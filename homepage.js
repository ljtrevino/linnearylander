console.log("hi");

document.getElementById("Student").addEventListener("mouseover", mouseOver);
document.getElementById("Student").addEventListener("mouseout", mouseOut);

function mouseOver() {
console.log("mouseOver");

	var homepage_element = document.getElementsByClassName('homepage'), i;

for (var i = 0; i < homepage_element.length; i ++) {
    homepage_element[i].style.visibility = 'hidden';
}

var stud_element = document.getElementsByClassName('StudentAnimaton'), i;

for (var i = 0; i < stud_element.length; i ++) {
    stud_element[i].style.visibility = 'visible';
}
    //document.getElementsByClassName("homepage");.style.visibility = "hidden";
    //document.getElementsByClassName("StudentAnimaton").style.visibility = "visible";
}

function mouseOut() {
console.log("mouseOut");
	var homepage_element = document.getElementsByClassName('homepage'), i;

for (var i = 0; i < homepage_element.length; i ++) {
    homepage_element[i].style.visibility = 'visible';
}

var Stud_element = document.getElementsByClassName('StudentAnimaton'), i;

for (var i = 0; i < Stud_element.length; i ++) {
    Stud_element[i].style.visibility = 'hidden';
}

//function mouseOut() {
//    document.getElementsByClassName("StudentAnimaton").style.visibility = "hidden";
//     document.getElementsByClassName("homepage").style.visibility = "visible";

}