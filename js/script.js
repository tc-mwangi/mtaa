
function sasa(){
 var nameF = document.getElementById('tt').value;
 var nameS = document.getElementById('zz').value;

 var both = nameF.concat(nameS);
 var xx = new Blob ([both],{type: "text/plain;charset=utf-8" });
 saveAs(xx,"members.txt");
 alert ("You detail have been saved on the disk")
 document.getElementById('text').value = " ";

};
