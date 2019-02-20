let sections = document.querySelectorAll('section');

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