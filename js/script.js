

const container = document.querySelector(".container");
const customGrid = document.querySelector("button");

//Default value
newGrid(16)

function newGrid(value) {
    gridCreator(value);
    const grid = document.querySelectorAll(".children");
    function colorChange(index) {
        grid[index].addEventListener("mouseover", () => {
            grid[index].style.background = getRandomColor();
        }); 
    }
    //For each div iteration, add border and the colorChange function when hover 
    for (i = 0; i < grid.length; i++) {
        grid[i].style.border = "solid 1px black";
        colorChange(i);
    }
}

customGrid.addEventListener("click", () => {
    let value = parseInt(prompt("How many rows?"));
    if (value <= 100) {
        newGrid(value);
    } else {
        alert("This value is higher than 100, please try again.");
    }
});

//Create the divs blocks of the grid
function gridCreator(value) { 
    for (i = 0; i < value; i++) {
        x = 0
        const rows = document.createElement("div");
        rows.classList.add("rows", "grid");
        container.appendChild(rows);
        while (x < value) {
            const childDivs = document.createElement("div");
            childDivs.classList.add("children", "grid");
            rows.appendChild(childDivs);
            x++           
        }       
        
    }

    //Delete the first grid instead of appending the new to it
    const verify = document.querySelectorAll(".grid");
    if (verify.length > (value * value) + value) {
        while (container.firstChild) {
            container.firstChild.remove();
        }
        gridCreator(value)
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }











