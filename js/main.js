let sections = document.querySelectorAll("section");
let svgs = document.querySelectorAll(".pattern");

let container1 = document.querySelector(".first-typed");
let container2 = document.querySelector(".second-typed");
let container3 = document.querySelector(".third-typed");

var i = 0;
let j = 0;
let k = 0;
var txt1 =
  "Thermochromic ink with an ilimited color palette for your customizable patterns";
var txt2 =
  "50 % polyurethane, 50 % polyester, a strong fabric totally waterproof with sealed stitching and liner";
var txt3 =
  "Four available windproof models, with removable hood and two big pockets";

function typeWriterOne() {
  if (i < txt1.length) {
    container1.innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriterOne, 30);
  }
}
function typeWriterTwo() {
  if (j < txt2.length) {
    container2.innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriterTwo, 25);
  }
}
function typeWriterThree() {
  if (k < txt1.length) {
    container3.innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriterThree, 35);
  }
}

setTimeout(() => {
  document.querySelector(".loader").style.opacity = 1;
}, 100);

setTimeout(() => {
  document.querySelector(".loader").style.opacity = 0;
}, 2200);
setTimeout(() => {
  document.querySelector("header").style.opacity = 1;
}, 4200);

sections.forEach(function(section) {
  var element = section;

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add("is-reached");
    },
    offset: "75%"
  });
});

new Waypoint({
  element: container1,
  handler: function(direction) {
    svgs.forEach(function(svg) {
      svg.classList.add("is-reached");
    });
    setTimeout(() => {
      typeWriterOne();
      typeWriterTwo();
      typeWriterThree();
    }, 1400);
  },
  offset: '65%'
});
