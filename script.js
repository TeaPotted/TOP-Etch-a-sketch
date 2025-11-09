const container = document.querySelector(".gridContainer");
const btn = document.querySelector("button");

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
            })
            
            // append squares to row
            row.appendChild(square);
        }

        // append all rows to the container div
        container.appendChild(row);
    }
}

function generateRandomInteger(min, max) {
    // returns a number from min to max
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function validInt (userInput) {
    // repeat loop if userInput is not a valid integer 
    while (isNaN(userInput) || userInput < 1 || userInput > 100 ||
            userInput === "") {
        // exit prompt if cancel button is clicked
        if (userInput === null) return false;

        userInput = prompt("Only enter a valid number thats 1 - 100");
    }
    // if user enters a valid input return true
    return true;
}

btn.addEventListener("click", function clear(e) {
    // number of square will be the users input
    let gridSquares = prompt("Enter a number from 1 - 100");
    
    if (validInt(gridSquares)) {
        // remove the current grid and create a new one
        container.textContent = "";
        createGrid(gridSquares);
    }
})