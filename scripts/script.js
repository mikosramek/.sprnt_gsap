
const animations = {};

animations.slideIn = { 
  duration: 1.2, 
  x: 25, 
  opacity: 0, 
  scale: 0.5 
};

animations.normal = {
  duration: 0.35,
  rotation: 0,
  scale: 1
}

animations.getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * max);
}

$(document).ready(function(){
  gsap.from("h1", animations.slideIn);

  $('.headerNav li').hover(function() {
    gsap.to(this, {duration: 0.35, scale: 0.9, rotation: animations.getRandomNumber(-20, 40)});
  }, function() {
    gsap.to(this, animations.normal);
  });

});
