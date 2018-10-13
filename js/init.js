(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 250,
  headerEl = document.getElementById('navbar');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("scrolled-navbar");
  } else {
    headerEl.classList.remove("scrolled-navbar");
  }
}
window.addEventListener('scroll', resizeHeaderOnScroll);