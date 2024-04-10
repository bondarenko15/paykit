
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
      1024: {
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