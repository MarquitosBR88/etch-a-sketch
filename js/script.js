const container = document.querySelector(".container");
for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}

const grid = document.querySelectorAll(".grid");

for (i = 0; i < grid.length; i++) {
    grid[i].style.border = "solid black";
}



