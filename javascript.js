const grid = document.querySelector("grid");

var matrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    const tile = document.createElement("div");
    tile.className = "tile";

    const nr = document.createElement("p");
    nr.textContent = matrix[i][j];

    tile.appendChild(nr);
    grid.appendChild(tile);

    tile.onclick = function () {
      activateTile(i, j, nr, tile);
    };
  }
}

function activateTile(i, j, nr, tile) {
  if (matrix[i][j] == 0) {
    matrix[i][j] = 1;
    tile.style.backgroundColor = "gold";
  } else {
    matrix[i][j] = 0;
    tile.style.backgroundColor = "peru";
  }

  nr.textContent = matrix[i][j];
}

var myTile = document.getElementsByClassName("tile");
console.log(myTile[14].innerHTML);

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    if (matrix[i][j] == 0) {
    }
  }
}

function startGame() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matrix[i][j] == 1) {
        var livNeigh = 0;

        if (matrix[i - 1][j] == 1) {
          livNeigh++;
        }

        if (matrix[i + 1][j] == 1) {
          livNeigh++;
        }

        if (matrix[i][j - 1] == 1) {
          livNeigh++;
        }

        if (matrix[i][j + 1] == 1) {
          livNeigh++;
        }

        if (livNeigh < 2 || livNeigh > 3) {
          matrix[i][j] = 0;
          console.log(matrix);
        }
      } else if (matrix[i][j] == 0) {
        var livNeigh = 0;

        if (matrix[i - 1][j] == 1) {
          livNeigh++;
        }

        if (matrix[i + 1][j] == 1) {
          livNeigh++;
        }

        if (matrix[i][j - 1] == 1) {
          livNeigh++;
        }

        if (matrix[i][j + 1] == 1) {
          livNeigh++;
        }

        if (livNeigh == 3) {
          matrix[i][j] = 1;
          console.log(matrix);
        }
      }
    }
  }
}
