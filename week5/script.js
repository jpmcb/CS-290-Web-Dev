// John McBride
// Feburary 7th 2018
// ------
// CS 290 - Assignment DOM and Events

// ------------
// addTable - adds a 4x4 table to the DOM at the parameter element
// ------------
function addTable(inElement){
	// Generate the table and set it's border style
	var myTable = document.createElement("table");
	myTable.style.border = "solid";

	// perform 4 loops to create table rows
	for(var i = 0; i < 4; i++){
		var tableRow = document.createElement("tr");

		// loop 4 times for the table headers / table data cells. Generate content and
		// border styling before appending to the table row
		if(i == 0){
			for(var j = 0; j < 4; j++){
				var tableHeader = document.createElement("th");
				tableHeader.textContent = "Header " + (j + 1);

				tableHeader.style.border = "solid";

				tableRow.appendChild(tableHeader);
			}
		} else {
			for(var j = 0; j < 4; j++){
				var tableData = document.createElement("td");
				tableData.textContent = (j + 1) + ", " + i;

				tableData.style.border = "solid";

				tableRow.appendChild(tableData);
			}
		}

		// add the table row to the table
		myTable.appendChild(tableRow);
	}

	// add the the DOM where specified in the parameters
	inElement.appendChild(myTable);
}

// -------------
// addDirectionalButtons - adds 4 buttons that are used to change the 
// table selection. Inserts the buttons into the DOM where specified
// by the parameter. Sets the events for each button accordingly
// -------------
function addDirectionalButtons(inElement){
	var newButton = document.createElement("button");
	newButton.textContent = "Up";
	newButton.addEventListener("click", changeUp);
	inElement.appendChild(newButton);

	newButton = document.createElement("button");
	newButton.textContent = "Down";
	newButton.addEventListener("click", changeDown);
	inElement.appendChild(newButton);

	newButton = document.createElement("button");
	newButton.textContent = "Left";
	newButton.addEventListener("click", changeLeft);
	inElement.appendChild(newButton);

	newButton = document.createElement("button");
	newButton.textContent = "Right";
	newButton.addEventListener("click", changeRight);
	inElement.appendChild(newButton);
}

// ---------------
// addmarkButton - adds the mark button into the DOM
// where specified by parameter
// ---------------
function addMarkButton(inElement){
	var newButton = document.createElement("button");
	newButton.textContent = "Mark Cell";
	newButton.addEventListener("click", markCell);
	inElement.appendChild(newButton);
}

// ---------------
// defaultSelect - sets the cell in the upper right left corner
// to be the selected cell initially.
// ---------------
function defaultSelect(){
	// Gets us the table element
	var table = document.body.firstElementChild.nextElementSibling;
	table = table.firstChild.nextElementSibling.firstChild;

	table.style.border = "thick solid";

	table.setAttribute("id", "selected");
}

// -----------
// changeUp - moves the selection "up" in the table
// Similar implementation to the changeDown function.
// Iterates through the table to find the "index" (the
// current selected cell's coordinates in the table) and 
// accordingly adjust the selction
// -----------
function changeUp(){
	// The current selected element in the table
	var selected = document.getElementById("selected");

	// the table element (to be iterated through to get the "index")
	var table = document.body.firstElementChild.nextElementSibling;

	// increment these values as we iterate through the table
	var rowIndex = 0;
	var vertIndex = 0;

	// the iterator object for the table
	var tableTemp = table.firstElementChild;

	// flag for the while loop
	var found = false;

	// Loop through the table element until we found the selected element
	// or we've reached the end of the table
	while(!found && tableTemp != null)
	{
		// set the column index to zero upon each iteration
		vertIndex = 0;

		// next loop deeper iterator
		var dataTemp = tableTemp.firstElementChild;

		// Continue until we reach the end of the row
		while(dataTemp != null){
			// check to see if we found the selected element
			if(dataTemp.id == selected.id){
				// set the flag to true (end the while loop)
				found = true;
				// call the selection function with the index of the
				// found element in the table
				setUp(rowIndex, vertIndex);
			}

			// Go to the next element in this row & increment the index
			dataTemp = dataTemp.nextElementSibling;
			vertIndex++;
		}

		// go to the next row & increment the index
		tableTemp = tableTemp.nextElementSibling;
		rowIndex++; 
	}

	// changes the selection
	function setUp(row, vert){
		// ensure that we aren't at the end of the upper bound of the table
		// Additional condition to ensure that the selection cannot move into
		// the header columns. 
		if(table.children[(row - 1)] != undefined && (row - 1) > 0)
		{
			// Remove the selection from the current element
			selected.removeAttribute("id");
			selected.style.border = "solid";

			// Set the selection to the next element up in the table 
			// using the table coordinates passed by parameter.
			// subtracting one gets us to one element above the current selection
			selected = table.children[(row - 1)];
			selected = selected.children[vert];

			// Set the selection attributes for the new cell
			selected.setAttribute("id", "selected");
			selected.style.border = "thick solid";
		}
	}
}

// -----------
// changeDow - moves the selection "down" in the table
// Similar implementation to the changeUp function.
// Iterates through the table to find the "index"  (the
// current selected cell's coordinates is in the table) and 
// accordingly adjust the selction
// -----------
function changeDown(){
	// The current selected cell in the table
	var selected = document.getElementById("selected");

	// The table element itse;f (to be itterated through)
	var table = document.body.firstElementChild.nextElementSibling;

	// The coordinates of the selected table
	var rowIndex = 0;
	var vertIndex = 0;

	// the table iterator that we will be moving through
	var tableTemp = table.firstElementChild;

	// The while loop flag
	var found = false;

	// Go through the table until we reach the end or the element is found
	while(!found && tableTemp != null)
	{
		// On a new row, start the index over
		vertIndex = 0;

		// The iterator through the row for the next loop
		var dataTemp = tableTemp.firstElementChild;
		// Go through the row until the end is met
		while(dataTemp != null){
			// Check to see if we found the current selected cell
			if(dataTemp.id == selected.id){
				// set the flag and change the elements with the coordinates
				found = true;
				setDown(rowIndex, vertIndex);
			}

			// go to the next element in the row and increase the index
			dataTemp = dataTemp.nextElementSibling;
			vertIndex++;
		}

		// go to the next row in the table and increment the index
		tableTemp = tableTemp.nextElementSibling;
		rowIndex++; 
	}

	// changes the selection to the one below the current slection
	function setDown(row, vert){
		// Ensure we are still in bounds of the table
		if(table.children[(row + 1)] != undefined)
		{
			// remove the current selection
			selected.removeAttribute("id");
			selected.style.border = "solid";

			// set to to the next cell down. Adding 1 to the
			// row coordinate to get us to the next cell down
			selected = table.children[(row + 1)];
			selected = selected.children[vert];

			// set the new selections attributes
			selected.setAttribute("id", "selected");
			selected.style.border = "thick solid";
		}
	}	
}

// ---------------
// changeLeft -- moves the selected cell to the next left cell
// ---------------
function changeLeft(){
	var selected = document.getElementById("selected");

	// Make sure we are still in bounds
	if(selected.previousElementSibling != null)
	{
		// Remove stuff
		selected.removeAttribute("id");
		selected.style.border = "solid";

		// Add stuff
		selected = selected.previousElementSibling;
		selected.setAttribute("id", "selected");
		selected.style.border = "thick solid";
	}
}

// ----------------
// changeRight -- move the selected cell to the next right cell
// ----------------
function changeRight(){
	var selected = document.getElementById("selected");

	// Make sure we are still in bounds of the table
	if(selected.nextElementSibling != null)
	{
		// Remove stuff
		selected.removeAttribute("id");
		selected.style.border = "solid";

		// Add stuff
		selected = selected.nextElementSibling;
		selected.setAttribute("id", "selected");
		selected.style.border = "thick solid";
	}
}

function markCell(){
	var selected = document.getElementById("selected");

	selected.style.backgroundColor += "yellow";
}
var docBody = document.body;

addTable(docBody);
addDirectionalButtons(docBody);
addMarkButton(docBody);
defaultSelect();