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
  #contact-infos`
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
const swiperArticles = new Swiper('#articles .swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '#articles .swiper-pagination'
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


// SERVICES
const swiperServices = new Swiper('#services .swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '#services .swiper-pagination'
  },
  breakpoints: {
    1250:{
    slidesPerView: 3,
    mousewheel: false,
    },
    900:{
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

// HEADER - Actual Section
const underline = document.getElementById("actual_section_underline")
const items = document.querySelectorAll(".item")

function moveUnderline(item) {
  window.removeEventListener('scroll', activateMenu)
  underline.style.left = item.offsetLeft + "px";
  underline.style.width = item.clientWidth + "px";
  setTimeout(function () {
    window.addEventListener('scroll', activateMenu);
  }, 700);
}

const sections = document.querySelectorAll('main section')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 3
    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document.querySelector(`li[id="item-${sectionId}"]`).classList.add('active')

            item_atual = document.querySelector(`li[id="item-${sectionId}"]`)
            underline.style.left = item_atual.offsetLeft + "px";
            underline.style.width = item_atual.clientWidth + "px";
        } else {
            document.querySelector(`li[id="item-${sectionId}"]`).classList.remove('active')
        }
    }
}

function activateMenu() {
  activateMenuAtCurrentSection()
}

window.addEventListener('scroll', activateMenu)

var item_atual = document.getElementById("item-home");
item_atual.classList.add('active')
window.scrollTo(0, 0);
moveUnderline(item_atual)

for (const item of items) {
    item.addEventListener('click', function() {
        moveUnderline(this)
        item_atual.classList.remove('active')
        item_atual = this;
        item_atual.classList.add('active')
    });
}

window.addEventListener('resize', function() {
    moveUnderline(item_atual)
    }
)
