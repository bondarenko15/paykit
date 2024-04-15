
const swiperOurPartners = document.querySelector('.slider-our_partners') || null;
if (swiperOurPartners) {
  const slider = new Swiper('.slider-our_partners', {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      648: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
      1366: {
        loop: true,
        spaceBetween: 20,  
      }
    }
  });
}

const swiperOffers = document.querySelector('.slider_offers') || null;
if (swiperOffers) {
  const slider = new Swiper('.slider_offers', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      960: {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
      }
    }
  });
}




// menuOverlay


const mobileNav = document.querySelector('.menu_overlay');
const mobileMenuActive = document.querySelector('.header_menu');
const closeBtn = document.querySelector('.menu_overlay-close');
const body = document.querySelector('body')
mobileMenuActive.addEventListener('click', () => {
  mobileNav.classList.add('menu_overlay-active');
  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('menu_overlay-active');
  });

});








//header fixed

var element = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 1) {
    element.classList.add("fixed");
  } else {
    element.classList.remove("fixed");
  }
});


function toShow() {
  const lang = document.querySelectorAll('.lang');
  lang.forEach((item)  => {
    item.classList.toggle('lang-all');
  })
}

const langMenu = document.querySelector('.header_language');
langMenu.addEventListener('click', toShow);

const menu = document.querySelector('.menu_overlay-lang');
menu.addEventListener('click', toShow);



const navBtn = document.querySelector('.order');
const tabsBtn = document.querySelector('.menu_overlay-navigation .tabs');
const tabsBtn1 = document.querySelectorAll('.menu_overlay-navigation .tabs li');
const test1 = document.querySelectorAll('.menu_overlay-navigation .item_list');
navBtn.addEventListener('click', function () {
  tabsBtn.classList.add('active');
  tabsBtn1.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevActiveItem = document.querySelector('.tabs ._active');
      const prevActiveButton = document.querySelector('.menu_overlay-navigation .tabs ._active');
      
      if (prevActiveButton) {
        prevActiveButton.classList.remove('_active');
      }
      if (prevActiveItem) {
        prevActiveItem.classList.remove('_active');
      }
      const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;

      const nextActiveItem = document.querySelector(nextActiveItemId);
      

      btn.classList.add('_active');
      nextActiveItem.classList.add('_active');
    });
  })
    
  });
