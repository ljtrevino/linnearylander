var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length-1];
var dummy_x = null;

window.onscroll = function () {
  // Horizontal Scroll.
  var y = document.body.getBoundingClientRect().top;
  page.scrollLeft = -y;
  
  // Looping Scroll.
 // var diff = window.scrollY - dummy_x;
  //if (diff > 0) {
 //   window.scrollTo(0, diff);
 // }
 // else if (window.scrollY == 0) {
 //   window.scrollTo(0, dummy_x);
  //}
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
  document.body.style.height = w + 'px';
  
  dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
}

function scaleit(){


    setTimeout(function () {
   window.location.href = "https://lrylander.github.io/linnearylander/inside.html"; //REPLACE WITH REAL LINK
}, 2000);

    document.getElementById('blackout').className ='blackout'

  };

function sendEmail() 
{
    window.location = "mailto:linnearylander@gmail.com";
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

var width = document.body.clientWidth;

function home(){
    window.scrollTo(0, 0);
}

function resume(){
    window.location = window.location.href.replace('index.html','') + 'Linnea_Rylander_Resume.pdf';
}

function education(){
    window.scrollTo(0, width*0.97);
}

function experience(){
    window.scrollTo(0, width*0.97);
}

function projects(){
    window.scrollTo(0, width*1.94);
}

function awards(){
    window.scrollTo(0, width*1.94);
}

function hobbies(){
    window.scrollTo(0, width*2.93);
}

function contact(){
    window.scrollTo(0, width*10);
}

function sky(){
    window.location = 'https://lrylander.github.io/linnearylander/sky2/index.html'
}

function mccormick(){
    window.location = 'https://lrylander.github.io/linnearylander/hobbies/index.html'
}

//if (screen.width <= 699) {
//document.location = "https://lrylander.github.io/linnearylander/mobile";
//}
function checkPrevious(){
if (sessionStorage["previousPage"] == "home"){
    home();
}
if (sessionStorage["previousPage"] == "education"){
    education();
}
if (sessionStorage["previousPage"] == "experience"){
    experience();
}
if (sessionStorage["previousPage"] == "projects"){
    projects();
}
if (sessionStorage["previousPage"] == "awards"){
    awards();
}
if (sessionStorage["previousPage"] == "hobbies"){
    hobbies();
}
if (sessionStorage["previousPage"] == "contact"){
    contact();
}
}