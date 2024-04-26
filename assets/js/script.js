
const swiperOurPartners = document.querySelector('.slider-our_partners') || document.querySelector('.slider_news') || null;
if (swiperOurPartners) {
  const slider = new Swiper(swiperOurPartners, {
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
  const overlayMenu = document.querySelector('.menu_overlay-lang')
  const wrapper = document.querySelector('.header .wrapper')
  lang.forEach((item) => {
    item.classList.toggle('lang-all');
  })
  headerLanguage.classList.toggle('active');
  overlayMenu.classList.toggle('active');
  wrapper.addEventListener('click', (evt) => {
    if (evt.currentTarget === evt.target) {
      item.classList.remove('lang-all');
      headerLanguage.classList.remove('active');
    }
  });
}

const langMenu = document.querySelector('.header_language');
langMenu.addEventListener('click', toShow);

const menu = document.querySelector('.menu_overlay-lang') || null;
if (menu) {
  menu.addEventListener('click', toShow);
}



// inputMask
var selector = document.getElementById("phone_number");
var im = new Inputmask("+38 (999)9999999");
im.mask(selector);
const formModal = document.querySelector('.form_modal') || null;
if (formModal) {
  var selectorModal = document.getElementById("phone_number_modal");
  var imModal = new Inputmask("+38 (999)9999999");
  imModal.mask(selectorModal);
}




// popUp


const btnPopUp = document.querySelectorAll('.btn_popUp');
const closePopUp = document.querySelector('.close_modal');
const popUp = document.querySelector('.modal_overlay');
const wrapper = document.querySelector('.modal_overlay .wrapper')
const btnClose = document.querySelector('.btn_modal')
const popUpForm = document.querySelector('.form_modal');
const modalThanks = document.querySelector('.modal_thanks');
btnPopUp.forEach((btn) => {
  btn.addEventListener('click', () => {
    popUp.classList.add('modal_overlay-active');

    popUpForm.classList.contains('is_hide') ? popUpForm.classList.remove('is_hide') : null;


    closePopUp.addEventListener('click', () => {
      popUp.classList.remove('modal_overlay-active');
      popUpForm.classList.add('is_hide');
      modalThanks.classList.remove('is_show');
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

const btnMore = document.querySelectorAll('.btn_more');
const popUpMore = document.querySelector('.modal_more');
const wrapperMore = document.querySelector('.modal_more .wrapper');

btnMore.forEach((btn) => {
  btn.addEventListener('click', () => {
    popUpMore.classList.add('modal_more-active');

    popUpForm.classList.contains('is_hide') ? popUpForm.classList.remove('is_hide') : null;


    closePopUp.addEventListener('click', () => {
      popUpMore.classList.remove('modal_more-active');
      popUpForm.classList.add('is_hide');
      modalThanks.classList.remove('is_show');
    })
    wrapperMore.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        popUpMore.classList.remove('modal_more-active');
      }
    });
    btnClose.addEventListener('click', () => {
      popUpMore.classList.remove('modal_more-active');
    })
  })
})



// blog

const blog = document.querySelector('.blog_main-items');
const blogItem = document.querySelectorAll('.blog_main-items__item');
let newArray = Array.from(blogItem);
var deleteItem = newArray;
function deleteItems(i, j) {
  deleteItem.splice(i, j)
  deleteItem.forEach((item) => {
    item.style.display = 'none'
  });
}
if (window.innerWidth < 767) {
  deleteItems(0, 3)

} else if (window.innerWidth < 1365) {
  deleteItems(0, 4)
}
else if (window.innerWidth < 1880) {
  deleteItems(0, 6)
}


// youtube player API

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    videoId: '8WtRKHwVROs',
    playerVars: {
      'controls': 1,
      'modestbranding': 1,
      'rel': 0,
      'showinfo': 0,
      'fs': 0,
      'autoplay': 0
    }
  });
}
function playVideo() {
  player.playVideo();
  document.getElementById("play").remove();
  document.getElementById("bg").style = 'display:none';
}



// accordion

const accordionBtn = document.querySelectorAll('.tabs_item');
const tabsSub = document.querySelector('.tabs_item-active ul')
accordionBtn.forEach((item) => {
  item.addEventListener('click', ()=> {
    accordionBtn.forEach((subitem) => {
      subitem.classList.remove('tabs_item-active');
    })
    item.classList.toggle('tabs_item-active');
    })
})

