// HEADER WHEN SCROLL
const header = document.getElementById("header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

// SCROLL REVEAL
const scrollRevealFromRight = ScrollReveal({
  origin: 'right',
  distance: '50px',
  duration: 900,
  reset: true
});
scrollRevealFromRight.reveal(
  `#home-img, 
  #about-text-div, 
  #achievements-numbers, 
  #contact-socials`
  , {interval: 100})

const scrollRevealFromLeft = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 900,
  reset: true
});
scrollRevealFromLeft.reveal(
  `#home-text, 
  #about-img,
  #achievements-text, 
  #contact-main`
  , {interval: 100})

const scrollRevealFromTop = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 900,
  reset: true
});
scrollRevealFromTop.reveal(
  `#services-title, #services-subtitle, #services-cards, 
  #articles-title, #articles-subtitle, #articles .swiper-container`
  , {interval: 100})

// DETECT SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

// ARTICLES
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    breakpoints: {
      1400:{
      slidesPerView: 3,
      },
      1050:{
        slidesPerView: 2,
      }
    },
    mousewheel: true,
    keyboard: true,
  })

// SCROLL TO SECTION
var menuLinks = document.querySelectorAll('#menu-list a');

function scrollToSection(event) {
  event.preventDefault();

  var targetId = this.getAttribute('href');
  var targetElement = document.querySelector(targetId);
  var offset = document.getElementById('header').offsetHeight;
  var targetPosition = targetElement.offsetTop - offset;

  window.scrollTo({
    top: targetPosition
});
}

menuLinks.forEach(function (link) {
    link.addEventListener('click', scrollToSection);
})