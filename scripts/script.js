
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

  var aboutIntro = gsap.timeline({paused: true});
  aboutIntro
    .addLabel("text")
    .to('#quoteOne', {duration: 1.4, rotation: -5}, "text")
    .to('#quoteTwo', {duration: 1.4, rotation: 5}, "text")
    .addLabel("stars")
    .from('#star1', {duration: 0.8, x: -150, y: -100, opacity: 0}, "stars")
    .from('#star2', {duration: 1.2, x: -150, y: 200, opacity: 0}, "stars")
    .from('#star3', {duration: 0.6, x: 200, y: -150, opacity: 0}, "stars")
    .from('#star4', {duration: 1, x: 200, y: 150, opacity: 0}, "stars");
  $(window).scroll( function(){
    var currentScroll = $(this).scrollTop();
    var elementHeight = $('#about').height();
      if( currentScroll > elementHeight - 50 && currentScroll > 0 ){
        windowScroll = currentScroll/elementHeight;
        aboutIntro.play();
      }
  });

});

