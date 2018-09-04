

function mobile_detect(mobile,tablet,mobile_redirect,tablet_redirect) {
 var ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()));
 var istablet = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase()));

 if (ismobile && mobile==true) {
 window.location.href = 'https://lrylander.github.io/linnearylander/mobile/'
 } else if (istablet && tablet==true) {
 window.location.href = 'https://lrylander.github.io/linnearylander/mobile/'
 }
}

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
   window.location.href = "http://lrylander.github.io/linnearylander/inside.html"; //REPLACE WITH REAL LINK
}, 5000);

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

function home(){
    window.scrollTo(0, 0);
}

function resume(){
    window.location = window.location.href.replace('index.html','') + 'Linnea_Rylander_Resume.pdf';
}

function education(){
    window.scrollTo(0, 1600);
}

function experience(){
    window.scrollTo(0, 1600);
}

function projects(){
    window.scrollTo(0, 3240);
}

function awards(){
    window.scrollTo(0, 3240);
}

function hobbies(){
    window.scrollTo(0, 4800);
}

function contact(){
    window.scrollTo(0, 6000);
}



