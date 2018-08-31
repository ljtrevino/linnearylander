
function updatePath(){
  var width = document.body.clientWidth;
  if (width < 1500){
      document.getElementById("balloonPath").setAttribute("d", "m-154.352941,48.24997c0,25.000248 0,31.250309 0,31.250309c218.562589,405.2852 685.435442,535.250145 885.98444,676.143407c200.548996,140.893262 196.676627,516.495732 83.219588,761.254577c-146.376371,268.758557 -616.585438,254.209728 -740.419241,627.961153c-150.212071,638.936072 -146.809364,1020.128904 39.582304,1334.674375c316.091587,412.968066 250.044103,349.777436 252.100425,463.300093");
      console.log("small")
  }
}


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
    offset: 100
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