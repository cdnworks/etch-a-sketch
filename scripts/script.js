function renderCanvas() {
    //create and place a grid of square divs
    //these divs will be placed inside a container div, class="canvas"
    
    //expansion idea: take some parameters that define the size of the canvas
    //where size is the resolution or number of squares on the canvas

    let height = 16;
    let width = 16;

    const canvas = document.querySelector('.canvas');






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

}

renderCanvas();