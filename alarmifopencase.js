table =  window.frames["gsft_main"].document.querySelector("#incident_table")
// t =  window.frames["gsft_main"].document.querySelector("#incident_table > tbody").rows;


/*
  * not require... easy way below
function getHeadingPosition(table,heading) {
   tableHeadings = table.tHead.rows[0].cells
   for (let i = 0; i < tableHeadings.length; i++) {
     if (tableHeadings[i].textContent.trim() === heading) {
       return i;
     }
   }
}

let numberPos;
if(typeof numberPos === "undefined") {
    numberPos = getHeadingPosition(table,'Number')
}

let statePos;
if(typeof statePos === "undefined") {
    statePos = getHeadingPosition(table,'State')
}

*/

Tableheadings = table.tHead.rows[1].cells
Tableheadings.number.cellIndex


for (let i = 0; i < table.tBodies[0].length; i++) {
  const element = table.tBodies[0][i];
}

//copypasta
for (var j = 0; j < data.rows.length; j++) {
  if ( data.rows[j].cells[0].innerHTML.indexOf("abc") >= 0 ) {

  }
}

console.log('Position of heading "Number":', position);
