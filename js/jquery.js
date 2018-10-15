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
    responsive: { 0: { items: 1 }, 400: { items: 2 }, 768: { items: 3 }, 900: { items: 4 } }
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