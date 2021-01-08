function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var elem = document.querySelector('#animatedImage');

elem.animate([
  { transform: "translate(0, 0)" },
  { transform: "translate(0, 20px)" },
  { transform: "translate(0, 0)" }
], {
  duration: 4000,
  iterations: Infinity,
  yoyo:Infinity,
  animationTimingFunction:'linear',
  playbackRate:-30
})





var elem2 = document.querySelector('#profileImage')

elem2.animate([
  { transform: "translate(0, 0)" },
  { transform: "translate(10px, -10px)" },
  { transform: "translate(0, 0)" },
], {
  duration: 4300,
  iterations: Infinity,
  yoyo:Infinity,
  animationTimingFunction:'linear',
  playbackRate:-30
})