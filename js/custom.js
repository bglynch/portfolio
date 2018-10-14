/*
Function to resize the navbar on scroll
*/
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


$(document).ready(function() {
  
  // ========================================================================= //
  //  Owl Carousel - carousel for the skill section
  // ========================================================================= //  
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });

  // ========================================================================= //
  //  filterizr - filtering the portfilio projects
  // ========================================================================= //  
  var filterizd = $('.filtr-container').filterizr({
  });
  
  // ========================================================================= //
  //  adding active class to the project filter buttons
  // ========================================================================= //  
  $('#project-filters li').on( 'click', function() {
    $("#project-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');
  });

  
  
})