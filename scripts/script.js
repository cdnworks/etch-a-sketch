function renderCanvas(h, w) {
    //create and place a grid of square divs
    //these divs will be placed inside a container div, class="canvas"
    
    //expansion idea: take some parameters that define the size of the canvas
    //where size is the resolution or number of squares on the canvas

    let height = h;
    let width = w;

    const canvas = document.querySelector('.canvas');

    //clear canvas area
    canvas.textContent = '';

    //create a row, then in said row, appends squares, then append row
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

    let canvasSquares = document.querySelectorAll('.square');
    drawToCanvas(canvasSquares);

}


function drawToCanvas(canvasSquares) {
    let color = 'black';
    //mouse events
    canvasSquares.forEach((square) => {
        square.addEventListener('mouseover', function(event) {
            //color preview
            let originalColor = square.style.backgroundColor; //get the original color
            square.style.backgroundColor = color; //color the square

            //listen for mouse out
            square.addEventListener('mouseout', function(e) {
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
}


renderCanvas(8, 8);

//event vars



let slider = document.getElementById("resolution-slider");
let sliderInfo = document.getElementById("slider-info");
sliderInfo.innerText = `${slider.value} x ${slider.value}`;

//slider events
slider.oninput = function() {
    sliderInfo.innerText = `${this.value} x ${this.value}`;
    let dimension = parseInt(this.value);
    renderCanvas(dimension, dimension);
}