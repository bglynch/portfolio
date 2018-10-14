// ========================================================================= //
//  Function to resize the navbar on scroll
// ========================================================================= //  
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