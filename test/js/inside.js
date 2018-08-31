var $decryption = $('.decryption');
var originalText = $decryption.text();

function decrypt(el) {

  var clock = 0;
  var encryptedLocations = null;

  var ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@~&/%$#';
  var DELAY = 7;
  var OFFSET = 40;


  function easeFn(x) {
    return Math.round(Math.log(Math.max(0, x - OFFSET)));
  }


  function tick() {
    var textArray = originalText.split('');

    if (encryptedLocations === null) {
      encryptedLocations = _.range(originalText.length);
    }

    if (clock % DELAY === 0) {
      for (var i = 0; i < encryptedLocations.length; ++i) {
        var k = _.random(0, ALPHABET.length - 1);
        var l = encryptedLocations[i];
        textArray[l] = '<span class="blackout">' + ALPHABET[k]  + '</span>';
      }

      remCount = easeFn(clock);
      for (var i = 0; i < _.min([remCount, encryptedLocations.length]); ++i) {
        var k = _.random(0, encryptedLocations.length - 1);
        var l = encryptedLocations[k];
        textArray[l] = originalText.charAt(l);
        if (encryptedLocations.length >= 1) {
          encryptedLocations.splice(k, 1);
        }
      }

      console.log("Remove count:", remCount);
      console.log('Text:', textArray.join(''));
      console.log("Locations:", encryptedLocations);

      $decryption.html(textArray.join(''));
    }

    ++clock;

    if (encryptedLocations.length > 0) {
      window.requestAnimationFrame(tick);
    }
  }

  window.requestAnimationFrame(tick);
}

decrypt($('.decryption'));

$('button').click(function() { decrypt($('.decryption')); });




//SCROLLING


window.scrollConverter=function(e,t,n){var o,r,l=t.documentElement,i=!1,a=!1,s=!1,c=function(n,o,r){if(!i)return!0;var a,s,c,v,d,u,f,h;return a=0,s=10,d=(l?l.offsetWidth:0)||0,u=t.body.scrollWidth||0,f=l?l.clientWidth:0,h=Math.max(d,u)-f,Math.abs(o.wheelDeltaX)>Math.abs(o.wheelDeltaY)||(o.detail?a=-240*o.detail:o.wheelDelta&&(a=5*o.wheelDelta),c=a/120*s,(v=n.x-c)>=0&&v<=h?(n.x=v,n.setByScript=!0,e.scrollTo(n.x,n.y)):0!==n.x&&n.x!==h&&(n.x=v>h?h:0,n.setByScript=!0,e.scrollTo(n.x,n.y)),"function"==typeof r&&r(n),!1)},v=function(n){var o="scroll"+(n=n.toUpperCase()),r="scroll"+("X"===n?"Left":"Top");return e["page"+n+"Offset"]||e[o]||function(){var e=t.documentElement||t.body.parentNode;return("number"==typeof e[r]?e:t.body)[r]}()},d=function(n,l){o=function(t){t=t||e.event;if(!1===c(n,t,l)){if(!t.preventDefault||!t.stopPropagation)return!1;t.preventDefault(),t.stopPropagation()}},r=function(){n.setByScript||(n.x=v("x"),n.y=v("y")),n.setByScript=!1},e.addEventListener?"onmousewheel"in e?(e.addEventListener("mousewheel",o,!1),e.addEventListener("scroll",r,!1)):(e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener("scroll",r,!1)):(t.attachEvent("onmousewheel",o),e.attachEvent("onscroll",r))},u=function(){(o||r)&&(e.removeEventListener?"onmousewheel"in e?(e.removeEventListener("mousewheel",o,!1),e.removeEventListener("scroll",r,!1)):(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener("scroll",r,!1)):(t.detachEvent("onmousewheel",o),e.detachEvent("onscroll",r)))},f=function(e){return e.preventDefault(),e.stopPropagation(),!1};return{activate:function(t){if(i=!0,!s){d({x:0,y:0},t),s=!0}a&&(e.addEventListener?e.removeEventListener("scroll",f,!0):e.detachEvent("onscroll",f),a=!1)},deactivate:function(){i=!1,s&&(u(),s=!1)},deactivateAllScrolling:function(){i=!1,a=!0,e.addEventListener?e.addEventListener("scroll",f,!0):e.attachEvent("onscroll",f)}}}(window,document);


scrollConverter.activate(function (offset) {
	console.log(offset); // Logs the current horizontal scroll offset
});



//CROCHET
var R = 200 , dur = 15; 

var tl = new TimelineLite()
.staggerTo(".small_cookie", dur ,{
bezier:{curviness:1.5,values:[{x:0,y:0},{x:R/2,y:R/2},{x:0,y:R},{x:-R/2,y:R/2},{x:0,y:0}]}
,rotation:-720,repeat:-1,ease:Power0.easeNone},dur/20)
.to(".main_cookie", dur ,{rotation:-0,ease:Power0.easeNone,repeat:-1},0)
.time(dur);



//logic


var contain = document.querySelector('#contain') 
    C = 2;
    // try change C to 10 , C should be even like 2,4,6 ...

for (var i=0; i<C-1; i++){
  var SVG = document.getElementById("svg");
  var nSVG = document.getElementById("svg").cloneNode(true) ;
  nSVG.setAttribute("class",i&1?'R-T':'R-D');
  if(i&1){contain.insertBefore(nSVG,SVG)}else{contain.appendChild(nSVG);};
};

TweenLite.set(contain,{perspective:300});
TweenMax.staggerTo('.R-D,.R-T',1,{rotationX:180,repeat:-1,ease:Linear.easeNone,delay:-C/2},1/(C/2));
TweenMax.to('.R-D,.R-T',40,{rotation:360,repeat:-1,ease:Linear.easeNone});
TweenMax.to('#core',1.5,{scale:0.95,repeat:-1,yoyo:true,ease:Sine.easeInOut});


$(window).scroll(function() {
   if($(document).width() - ($(window).scrollLeft() + $(window).width()) == 0) {
     $(location).attr('href', 'https://lrylander.github.io/linnearylander/test/index.html')
   }
});




