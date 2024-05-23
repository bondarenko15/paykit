
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

const swiperTabs = document.querySelector('.card_product-tabs') || null;
if (swiperTabs) {
  const slider = new Swiper(swiperTabs, {
    slidesPerView: "auto",
    spaceBetween: 30,
    breakpoints: {
      648: {

        spaceBetween: 0,
      }
    }
  });
}


const swiperOffers = document.querySelector('.slider_offers') || null;
if (swiperOffers) {
  const slider = new Swiper('.slider_offers', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      648: {
        loop: true,
        slidesPerView: 'auto'
      }
    }
  });
}


const swiperProduct = document.querySelector('.product_slider') || null;
if (swiperProduct) {
  const slider = new Swiper('.product_slider', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      648: {
        slidesPerView: 'auto'
      },
      1880: {
        slidesPerView: 'auto',
        spaceBetween: 0
      }
    }
  });
}


// menuOverlay


const mobileNav = document.querySelector('.menu_overlay');
const mobileMenuActive = document.querySelector('.header_menu');
const closeBtn = document.querySelector('.menu_overlay-close');
const btnMenu = document.querySelector('.btn_nav');
const orderMenu = document.querySelector('.menu_overlay-navigation .tabs');
mobileMenuActive.addEventListener('click', () => {
  mobileNav.classList.add('menu_overlay-active');
  closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('menu_overlay-active');
    orderMenu.classList.remove('active');
  });
});
btnMenu.addEventListener('click', () => {
  console.log('hello')
  orderMenu.classList.toggle('active');
})


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

const modalEquipment = document.querySelector('.form_equipment') || null;
if (modalEquipment) {
  var selectorEquipment = document.getElementById("phone_number_modal-equipment");
  var imEquipment = new Inputmask("+38 (999)9999999");
  imEquipment.mask(selectorEquipment);
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


const btnEquipment = document.querySelectorAll('.btn-card_equipment');
const popUpEquipment = document.querySelector('.equipment_modal');
const wrapperEquipment = document.querySelector('.modal_more .wrapper');

btnEquipment.forEach((btn) => {
  btn.addEventListener('click', () => {
    popUpEquipment.classList.add('equipment_modal-active');

    popUpForm.classList.contains('is_hide') ? popUpForm.classList.remove('is_hide') : null;


    closePopUp.addEventListener('click', () => {
      popUpEquipment.classList.remove('equipment_modal-active');
      popUpForm.classList.add('is_hide');
      modalThanks.classList.remove('is_show');
    })
    wrapperMore.addEventListener('click', (evt) => {
      if (evt.currentTarget === evt.target) {
        wrapperEquipment.classList.remove('equipment_modal-active');
      }
    });
    btnClose.addEventListener('click', () => {
      popUpEquipment.classList.remove('equipment_modal-active');
    })
  })
})


// blog

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



//equipment

const items = document.querySelectorAll('.equipment_item');
let array = Array.from(items);
var deleteItems = array;
function deleteItems1(i, j) {
  deleteItems.splice(i, j)
  deleteItems.forEach((item) => {
    item.style.display = 'none'
  });
}
if (window.innerWidth < 767) {
  deleteItems1(0, 3)

} else if (window.innerWidth < 1365) {
  deleteItems1(0, 6)
}
else if (window.innerWidth <= 5000) {
  deleteItems1(0, 9)
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
accordionBtn.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('tabs_item-active')) {
      item.classList.remove('tabs_item-active')
    } else {
      accordionBtn.forEach((subitem) => {
        subitem.classList.remove('tabs_item-active');
      })
      item.classList.add('tabs_item-active');

    }

  })
})

const accordionBase = document.querySelectorAll('.knowledge_base-navigation li');
accordionBase.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('item-active')) {
      item.classList.remove('item-active')
    } else {
      accordionBase.forEach((subitem) => {
        subitem.classList.remove('item-active');
      })
      item.classList.add('item-active');

    }
  })
})


// cardModelBtn 
const modelBtn = document.querySelectorAll('.model_item');
modelBtn.forEach((item) => {
  item.addEventListener('click', () => {
    modelBtn.forEach((subitem) => {
      subitem.classList.remove('model_item-active')
    })
    item.classList.add('model_item-active')
  })
})


//counter 

const counters = document.querySelectorAll('[data-counter]');

if (counters) {
  counters.forEach(counter => {
    counter.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.counter_button')) {
        if (target.closest('.counter_wrapper').querySelector('input').value == '' && (target.classList.contains('counter_button-minus') || target.classList.contains('counter_button-plus'))) {
          target.closest('.counter_wrapper').querySelector('input').value = 0;
        }

        let value = parseInt(target.closest('.counter_wrapper').querySelector('input').value);

        if (target.classList.contains('counter_button-plus')) {
          value++;
        } else {
          --value;
        }

        if (value <= 1) {
          value = 1;
          target.closest('.counter_wrapper').querySelector('.counter_button-minus').classList.add('disabled')
        } else {
          target.closest('.counter_wrapper').querySelector('.counter_button-minus').classList.remove('disabled')
        }

        target.closest('.counter_wrapper').querySelector('input').value = value;
      }
    })
  })
}

// tabs 
const tabsButtons = document.querySelectorAll('.tabs_button');
tabsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prevActiveItem = document.querySelector('.tabs_block-active');
    const prevActiveButton = document.querySelector('.swiper-slide_active');
    if (prevActiveButton) {
      prevActiveButton.classList.remove('swiper-slide_active');
    }
    if (prevActiveItem) {
      prevActiveItem.classList.remove('tabs_block-active');
    }
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    const nextActiveItem = document.querySelector(nextActiveItemId);
    btn.classList.add('swiper-slide_active');
    nextActiveItem.classList.add('tabs_block-active');
  });
})

const inputSearch = document.querySelector('.search form input') || null;
const searchForm = document.querySelector('.search');

if (inputSearch) {
  inputSearch.addEventListener('input', function () {
    if (this.value.length >= 3) {
      searchForm.classList.add('search-active');
    } else {
      searchForm.classList.remove('search-active');
    }
  });
}



const filterBtn = document.querySelector('.btn_sidebar') || null;
const filterMenu = document.querySelector('.sidebar_items');
if (filterBtn) {
  filterBtn.addEventListener('click', () => {
    filterMenu.classList.toggle('active')
  })
}



const clearCheckbox = document.querySelector('.clear') || null;
const inputCheckBox = document.querySelectorAll('.checkbox');
if (clearCheckbox) {
  clearCheckbox.addEventListener('click', () => {
    inputCheckBox.forEach((item) => {
      if (item.type == 'checkbox') {
        item.checked = false;
      }
    })
  })
}



const menuMobileBtn = document.querySelectorAll('.menu_btn');

menuMobileBtn.forEach((item) => {
  const sibling = item.nextElementSibling;
  item.addEventListener('click', () => {
    if (item.classList.contains('menu_btn-active')) {
      item.classList.remove('menu_btn-active');
      sibling.classList.remove('active');
    } else {
      menuMobileBtn.forEach((subitem) => {
        subitem.classList.remove('menu_btn-active');
        sibling.classList.remove('active');

      })
      item.classList.add('menu_btn-active');
      sibling.classList.add('active');
    }
  })
})


