let sections = document.querySelectorAll('section');
let svgs = document.querySelectorAll('.pattern');
setTimeout(() => {
  document.querySelector('body').style.opacity = 1;
}, 500);

sections.forEach(function(section) {
  var element = section;

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add('is-reached');
    },
    offset: '75%'
  });
});

svgs.forEach(function(svg) {
  var pattern = svg;

  var waypoint = new Waypoint({
    element: pattern,
    handler: function(direction) {
      pattern.classList.add('is-reached');
    },
    offset: '75%'
  });
});
