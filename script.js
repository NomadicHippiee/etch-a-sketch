const gridContainer = document.querySelector(".container");

let currentMode = "click";
let currentTool = "black";

function createGrid(size) {
  gridContainer.innerHTML = "";

  // Loop to create size*size squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;

    square.addEventListener("click", function () {
      if (currentMode === "click") {
        applyTool(square);
      }
    });

    square.addEventListener("mouseenter", function () {
      if (currentMode === "hover") {
        applyTool(square);
      }
    });

    gridContainer.appendChild(square);
  }
}

function setMode(mode) {
  currentMode = mode;
}

function setTool(tool) {
  currentTool = tool;
}

function applyTool(square) {
  if (currentTool === "black") {
    square.style.backgroundColor = "black";
  } else if (currentTool === "random") {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  } else if (currentTool === "erase") {
    square.style.backgroundColor = "white";
  }
}

function setSize() {
  let sizeInput = document.querySelector("#size").value;
  let size;

  if (size === "") {
    size = 16;
  } else {
    size = parseInt(sizeInput.trim());
  }
  if (size < 1) {
    size = 1;
  }
  if (size > 100) {
    size = 100;
  }

  createGrid(size);
}

function resetGrid() {
  document.querySelector("#size").value = "";
  currentMode = "click";
  currentTool = "black";

  createGrid(16);
}

document.querySelector("#blackBtn").addEventListener("click", function () {
  setTool("black");
});

document.querySelector("#randomBtn").addEventListener("click", function () {
  setTool("random");
});

document.querySelector("#eraseBtn").addEventListener("click", function () {
  setTool("erase");
});

document.querySelector("#clickMode").addEventListener("click", function () {
  setMode("click");
});

document.querySelector("#hoverMode").addEventListener("click", function () {
  setMode("hover");
});

document.querySelector("#sizeBtn").addEventListener("click", function () {
  setSize();
});

document.querySelector("#reset").addEventListener("click", function () {
  resetGrid();
});

createGrid(16);
