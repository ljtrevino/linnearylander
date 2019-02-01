(function() {
  window.addEventListener('scroll', function(event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
      layer = layers[i];
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  });

}).call(this);

var svg = $('#Layer_1'),
  plane = $('.plane'),
  pathString = $("#balloonPath").attr('d'),
  lisaPath = Snap.path.toCubic(pathString),
  arrayPath = [];

var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    offset: 400
  }
});

function calcOffset() {
  var center = $(window).scrollTop() + (window.innerHeight / 2) - (plane.height() / 2),
    offset = plane.position().top,
    distance = center - offset;
}

function setUpPoint(segment) {
  for (var i = 0; i < segment.length; i += 2) {
    //create a new object for the point so it can be passed to the bezier plugin
    var point = {};
    point.x = segment[i];
    point.y = segment[i + 1];
    //add the point to the array
    arrayPath.push(point);
  } //loop end
}

// loop through the curves collection
for (var i = 0; i < lisaPath.length; i++) {
  var segment = lisaPath[i],
    point;
  // the first element returned in the array is a letter, remove it
  segment.shift();
  //call the function to set up the points based on the segment returned
  point = setUpPoint(segment);
}

var tween1 = new TimelineMax()
  .add(TweenMax.to(plane, 1, {
    bezier: {
      values: arrayPath,
      type: "cubic",
    },
    ease: Linear.easeNone,
    onUpdate: calcOffset
  }));



// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: ".container",
    duration: svg.height()
  })
  .setTween(tween1)
  .addTo(controller)
    

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     $(location).attr('href', 'https://lrylander.github.io/linnearylander/test/index.html')
   }
});

function sessionStore(){
    sessionStorage["previousPage"] = "education"; 
}

function home(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function resume(){
    sessionStorage["previousPage"] = "home"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
    window.location = "https://lrylander.github.io/linnearylander/test/" + 'Linnea_Rylander_Resume.pdf';
}

function education(){
    sessionStorage["previousPage"] = "education"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function experience(){
    sessionStorage["previousPage"] = "experience"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function projects(){
    sessionStorage["previousPage"] = "projects"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function awards(){
    sessionStorage["previousPage"] = "awards"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function hobbies(){
    sessionStorage["previousPage"] = "hobbies"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}

function contact(){
    sessionStorage["previousPage"] = "contact"; 
    window.location = "https://lrylander.github.io/linnearylander/test";
}
