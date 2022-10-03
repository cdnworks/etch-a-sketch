function renderCanvas(h, w) {
    //draws a square grid on screen composed of HTML divs, then defines 
    //a  drawable area composed of the individual squares.
    let height = h;
    let width = w;

    const canvas = document.querySelector('.canvas');

    //clear any pre-existing canvas elements
    canvas.textContent = '';

    //create a row, then in said row, appends squares, then append row
    //this is slow, in the future, make one row procedurally, then copy that row
    for(let i = 1; i <= height; i ++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for(let j = 1; j <= width; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }

    //define drawable area and then set up event listeners
    let canvasSquares = document.querySelectorAll('.square');
    let colorSelection = document.getElementById("color-picker");
    colorSelection.value = "#000000";
    drawToCanvas(canvasSquares);
}


function drawToCanvas(canvasSquares) {
    //Defines the drawable area of the canvas
    //Must be called whenever the canvas is updated via renderCanvas()

    let colorSelection = document.getElementById("color-picker");
    let color = colorSelection.value;

    canvasSquares.forEach((square) => {
        square.addEventListener('mouseover', function(event) {
            //color preview
            let originalColor = square.style.backgroundColor;
            square.style.backgroundColor = color;

            square.addEventListener('mouseout', function(event) {
                //revert to the original color
                square.style.backgroundColor = originalColor;
            })

            square.addEventListener('mousedown', function(event) {
                //commit new color to the square, and 'originalColor'
                originalColor = color;
                square.style.backgroundColor = color;
            });
        });
    });

    colorSelection.addEventListener('input', function(event) {
        color = colorSelection.value;
    });
}


renderCanvas(8, 8);

//get and define controls
let slider = document.getElementById("resolution-slider");
let sliderInfo = document.getElementById("slider-info");
sliderInfo.innerText = `${slider.value} x ${slider.value}`;

let clearBtn = document.getElementById("clear-btn");

//slider events
slider.oninput = function() {
    sliderInfo.innerText = `${this.value} x ${this.value}`;
    let dimension = parseInt(this.value);
    renderCanvas(dimension, dimension);
}

//button evens
clearBtn.onclick = function() {
    let dimension = parseInt(slider.value);
    renderCanvas(dimension, dimension);
}