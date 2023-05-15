
// url = document.URL;

// output= `Hi,\n\ngot a ${priority} case\n\n${incidentNumber} -  ${url}\n\nDesc:\n${desc}`;

var incidentNumber = window.frames["gsft_main"].document.getElementById("sys_readonly.incident.number").value;
var prio = window.frames["gsft_main"].document.getElementById("incident.priority");
var priority = prio.options[prio.selectedIndex].text.split(" ")[2];
var desc = window.frames["gsft_main"].document.getElementById("incident.description").value;
var shortdesc = window.frames["gsft_main"].document.getElementById("incident.short_description").value;
output= `${priority} case - ${incidentNumber}\n\nDescription:\n\n${shortdesc}\n\n${desc}`;

console.log("this is " + output);

navigator.clipboard.writeText(output)
