
function ClearInput(value, Search_NB){ // This calls our function ClearInput, and the two variables we will need for it to function the original value and the id.
var input = document.getElementById(Search_NB); // Gets the input field based on its id.

if(value == input.value){ // If the default value is equal to the current value.
input.value = ''; // Empty It.
}else{ // Else the value is not equal to the current input field value.
input.value = input.value; // Leave it the same.
} // End Else.
} // Close Function.





startList = function() {
if (document.all&&document.getElementById) {
navRoot = document.getElementById("nav_dep");
for (i=0; i<navRoot.childNodes.length; i++) {
node = navRoot.childNodes[i];
if (node.nodeName=="LI") {
node.onmouseover=function() {
this.className+=" over";
  }
  node.onmouseout=function() {
  this.className=this.className.replace
	(" over", "");
   }
   }
  }
 }
}
window.onload=startList;
