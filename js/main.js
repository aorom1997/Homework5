/*
Name: Anthony Rom
Email: anthony_rom@student.uml.edu
Affiliation: UMass Lowell Senior; Computer Science Major, UTeach Minor
Date: October 29, 2020
Description: This is the javascript file to add a behavior layer for HW5.
*/

function getData(){
  // Obtain values
  var minColumn = parseInt(document.getElementById("minColumnValue").value);
  var maxColumn = parseInt(document.getElementById("maxColumnValue").value);
  var minRow = parseInt(document.getElementById("minRowValue").value);
  var maxRow = parseInt(document.getElementById("maxRowValue").value);
  // Declare pass flags for error checking
  var passed1 = 0;
  var passed2 = 0;
  var passed3 = 0;
  var passed4 = 0;
  var passed5 = 0;
  var passed6 = 0;

  // Out of Range Checking
  if((minColumn > 50 || minColumn < -50)){
    document.getElementById("err1").innerHTML = "Invalid value was entered: [-50 -50]";
  }
  else {
    document.getElementById("err1").innerHTML = " ";
    passed1 = 1;
  }

  if((maxColumn > 50 || maxColumn < -50)){
    document.getElementById("err2").innerHTML = "Invalid value was entered: [-50 -50]";
  }
  else {
    document.getElementById("err2").innerHTML = " ";
    passed2 = 1;
  }

  if((minRow > 50 || minRow < -50)){
    document.getElementById("err3").innerHTML = "Invalid value was entered: [-50 -50]";
  }
  else {
    document.getElementById("err3").innerHTML = " ";
    passed3 = 1;
  }

  if((maxRow > 50 || maxRow < -50)){
    document.getElementById("err4").innerHTML = "Invalid value was entered: [-50 -50]";
  }
  else {
    document.getElementById("err4").innerHTML = " ";
    passed4 = 1;
  }

  // min is less than max value checking
  if (minColumn > maxColumn){
    document.getElementById("err1_2").innerHTML = "Invalid minimum column value.";
  }
  else {
    document.getElementById("err1_2").innerHTML = " ";
    passed5 = 1;
  }

  if (minRow > maxRow){
    document.getElementById("err3_2").innerHTML = "Invalid minimum row value.";
  }
  else {
    document.getElementById("err3_2").innerHTML = " ";
    passed6 = 1;
  }


  // All conditions passed
  if(passed1 == 1 && passed2 == 1 && passed3 == 1 && passed4 == 1 && passed5 == 1 && passed6 == 1) {
    generate_table(minColumn, maxColumn, minRow, maxRow)
  }
}



function generate_table(minColumn, maxColumn, minRow, maxRow) {
    var table = "<tr>"
    table += "<th> </th>" // first spacer

    for (var h = minColumn; h <= maxColumn; h++) { // Loop for headers
      table += "<th>"+ h + "</th>";
    }
    table += "</tr>"; //end row
    for (var i = minRow ; i < maxRow + 1; i++) { // Loop for rows
      table += "<tr><th>" + i + "</th>";
      for (var j = minColumn; j < maxColumn + 1; j++) { // Loop for columns
        table += "<td>" + i * j + "</td>";
      }
      table += "</tr>";
    }
    document.getElementById("Table").innerHTML = table; // Draw table in html
}
