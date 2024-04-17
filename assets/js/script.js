
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


// langToggle

function toShow() {
  const lang = document.querySelectorAll('.lang');
  const headerLanguage = document.querySelector('.header_language')
  lang.forEach((item) => {
    item.classList.toggle('lang-all');
  })
  headerLanguage.classList.toggle('active');
}

const langMenu = document.querySelector('.header_language');
langMenu.addEventListener('click', toShow);

const menu = document.querySelector('.menu_overlay-lang');
menu.addEventListener('click', toShow);


// navMenuAccordion
/* const navBtn = document.querySelector('.order');
const tabs = document.querySelector('.menu_overlay-navigation .tabs');
const tabsFlex = document.querySelector('nav .tabs-flex');
const tabsBtn = document.querySelectorAll('.menu_overlay-navigation .tabs li');
if (window.innerWidth < 767) {

  navBtn.addEventListener('click', function () {
    tabs.classList.add('_active');
    tabsBtn.forEach(btn => {
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
} else if (window.innerWidth >= 768) {
  const itemList = document.querySelectorAll('.menu_overlay-navigation .item_list');
  navBtn.addEventListener('click', function () {
    tabsFlex.classList.add('_active');
    tabsBtn.forEach(btn => {
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
} */

// inputMask

var selector = document.getElementById("phone_number");
var im = new Inputmask("+38 (099)9999999");
im.mask(selector);

var selectorModal = document.getElementById("phone_number_modal");
var imModal = new Inputmask("+38 (099)9999999");
imModal.mask(selectorModal);



// popUp

const btnPopUp = document.querySelectorAll('.btn_popUp');
const closePopUp = document.querySelector('.form_modal span');
const popUp = document.querySelector('.modal_overlay');
const wrapper = document.querySelector('.modal_overlay .wrapper')
const btnClose = document.querySelector('.btn_modal')
btnPopUp.forEach((btn) => {
  btn.addEventListener('click', () => {
    popUp.classList.add('modal_overlay-active');
    closePopUp.addEventListener('click', () => {
      popUp.classList.remove('modal_overlay-active');
    })
    wrapper.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        popUp.classList.remove('modal_overlay-active');
      }
    });
    btnClose.addEventListener('click', () => {
      popUp.classList.remove('modal_overlay-active');
    })
  })
})


