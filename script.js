const container = document.querySelector(".gridContainer");

// Make a 16x16 grid
createGrid(16);

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        // create a row for each i
        const row = document.createElement("div");
        for (let j = 0; j < num; j++) {
            // create a square for each j
            const square = document.createElement("div");

            // make square have a class of "box"
            square.classList.add("box");
            // how much space each square can take up in the grid
            let squareSize = 650 / num;
            // set the style of the square's width, height and outline
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`
            square.style.outline = "0.1px solid darkslategray";
            
            // change the square's background-color and outline when hovered over
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "lime";
                square.style.outline = "0.1px solid darkgreen";
            })
            
            // append squares to row
            row.appendChild(square);
        }

        // append all rows to the container div
        container.appendChild(row);
    }
}