// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from '../../node_modules/swiper'

// configure Swiper to use modules
Swiper.use([Navigation, Pagination])

// Swiper slider on header page
export const sliderHeader = document.querySelector('.swiper-container1')

const swiperHeader = new Swiper(sliderHeader, {
  direction: 'vertical',
  loop: true,
  noSwiping: true,
  allowSlidePrev: true,
  allowSlideNext: true,
  pagination: {
    el: '.swiper-pagination1',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  autoplay: {
    delay: 500
  }
})

// Change slide bg into img

let img = document.querySelector('.header-slider__bg')
let wrap = document.querySelector('.header-slider')

function changeBg(slide, img) {
  let adress = img.getAttribute('src')
  let property = `background-image: url(${adress});`
  slide.setAttribute('style', property)
}

if (img) {
  changeBg(wrap, img)
}

// Swiper slider on 'our team' page
export const sliderTeam = document.querySelector('.swiper-container2')

const swiperTeam = new Swiper(sliderTeam, {
  slidesPerView: 1,
  spaceBetween: 65,

  breakpoints: {
    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }
  },

  pagination: {
    el: '.swiper-pagination2',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})

// Swiper slider on 'clients say's' page

export const galleryThumbsSlider = document.querySelector('.gallery-thumbs')
export const galleryTopSlider = document.querySelector('.gallery-top')

const galleryTop = new Swiper(galleryTopSlider, {
  speed: 1500,
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  freeMode: false,
  keyboard: {
    enabled: true
  }
})

const galleryThumbs = new Swiper(galleryThumbsSlider, {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,

  breakpoints: {
    421: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination3',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  }
})

galleryThumbs.on('slideChange', function() {
  galleryTop.slideTo(this.realIndex + 1)
})

// blogItem page slider

export const relatedPostsSliderSrc = document.querySelector(
  '.relatedPostsSlider'
)

const relatedPostsSlider = new Swiper(relatedPostsSliderSrc, {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 95
    }
  },
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination4',
    dynamicBullets: true,
    dynamicMainBullets: 3,
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  }
})

// worksItem page slider

export const worksItemSlider = document.querySelector('.worksItemSlider')
const worksItem = new Swiper(worksItemSlider, {
  speed: 1500,
  slidesPerView: 1,
  centeredSlides: true,
  grabCursor: true,
  freeMode: false,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: '.swiper-pagination5',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  },
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1'
  }
})

// worksItem page 'related-works' slider

export const relatedWorkssSliderSrc = document.querySelector(
  '.relatedWorksSlider'
)

const relatedWorkssSlider = new Swiper(relatedWorkssSliderSrc, {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 95
    }
  },
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination6',
    dynamicBullets: true,
    dynamicMainBullets: 3,
    type: 'bullets',
    clickable: true,
    bulletElement: 'button'
  }
})
