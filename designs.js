// Select elements
const sizePicker = document.querySelector("#sizePicker");
const colorPicker = document.querySelector("#colorPicker");
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");
const gridTable = document.querySelector("#pixelCanvas");


// Color the cell
function colorCell(event) {
    event.target.style.backgroundColor = colorPicker.value;
}

// Clear the cell
function clearCell(event) {
    event.target.style.backgroundColor = "";
}

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  event.preventDefault();
  //console.log('Submit was clicked!');
  //console.log('Heigth: ' + gridHeight.value);
  //console.log('Width: ' + gridWidth.value);
  //console.log('Color: ' + colorPicker.value);
  gridTable.innerHTML = "";
  for (let r = 0; r < gridHeight.value; r++) {
    let row = gridTable.insertRow(r);
    for (let c = 0; c < gridWidth.value; c++) {
      cell = row.insertCell(c);
      // Note: By adding eventlisteners per cell the browser does become quite slow if your grid is large!
      // Alternatively add a listener on the table!
      cell.addEventListener('click', colorCell);
      cell.addEventListener('dblclick', clearCell);
    }
  }
}

sizePicker.addEventListener("submit", makeGrid);
