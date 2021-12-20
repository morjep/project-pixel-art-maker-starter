// Select elements
const colorPicker = document.querySelector("#colorPicker");
const gridHeight = document.querySelector("#inputHeight");
const gridWidth = document.querySelector("#inputWidth");
const gridTable = document.querySelector("#pixelCanvas");

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
      row.insertCell(c);
    }
  }
}
const formSizePicker = document.querySelector("#sizePicker");
formSizePicker.addEventListener("submit", makeGrid);

// Create listener for clicks in cell and then colorize them
function colorCell(event) {
  if (event.target.style.backgroundColor == "") {
    //console.log('Colorize this cell!');
    event.target.style.backgroundColor = colorPicker.value;
  } else {
    //console.log('Un-colorize this cell!');
    event.target.style.backgroundColor = "";
  }
}
gridTable.addEventListener("click", colorCell);
