/**
 * 
 */
function addRow(id){    
    //location="index.html";
   

    /* var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");
    var td1 = document.createElement("TD");   
    var td2 = document.createElement("TD");    
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row); */

        document.getElementById(id).insertRow(-1).innerHTML =
        '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';




   
  }