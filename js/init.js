(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy({
      scrollOffset: 50,
    });
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space