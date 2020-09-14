// Main js file

// import js files
import './googleMap.js'
import './servicesItem.js'
import './blogItem.js'
import './worksItem.js'
import './slider.js'

//small portfolio resizing

const portfolio = document.querySelector('.portfolio')
const portfolioContent = document.querySelectorAll('.portfolio__item__content')
const portfolioItems = document.querySelectorAll('.portfolio__item')

if (portfolio) {
  const resizingPortfolio = () => {
    let widhtNew = portfolio.clientWidth
    let newHeight = widhtNew * 0.86
    let property = `height: ${newHeight}px;`
    portfolio.setAttribute('style', property)
  }

  window.addEventListener('load', resizingPortfolio, true)
  window.addEventListener('resize', resizingPortfolio, true)
}

if (portfolioContent) {
  let resizingPortfolioContent = () => {
    portfolioContent.forEach(function(element) {
      let widhtNew = element.clientWidth
      let newHeight = widhtNew
      let property = `height: ${newHeight}px;`
      element.setAttribute('style', property)
    })
  }

  portfolioItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      resizingPortfolioContent()
    })
    item.addEventListener('click', function() {
      resizingPortfolioContent()
    })
  })
}
// big portfolio on works pag. 'Show more' functional
const bigPortfolio = document.querySelector('.portfolioBig')

const workButton = document.querySelector('.work-button')
const newWorksArr = document.querySelectorAll('.defaultHidden')

if (workButton) {
  workButton.addEventListener('click', function() {
    if (workButton.classList.contains('wasClicked')) {
      workButton.classList.remove('wasClicked')
    } else {
      workButton.classList.add('wasClicked')
    }

    newWorksArr.forEach(function(element) {
      element.classList.remove('hiddenElement')
    })

    let property = `height: 2970px;`
    bigPortfolio.setAttribute('style', property)

    const resizingPortfolio = () => {
      let widhtNew = bigPortfolio.clientWidth
      let newHeight = widhtNew * 2.6
      let property = `height: ${newHeight}px;`
      bigPortfolio.setAttribute('style', property)
    }

    resizingPortfolio()

    window.addEventListener('load', resizingPortfolio, true)
    window.addEventListener('resize', resizingPortfolio, true)

    workButton.classList.add('hiddenElement')
  })
}

//big portfolio content resizing
const bigPortfolioContent = document.querySelectorAll(
  '.portfolioBig__item__content'
)
const bigPortfolioItems = document.querySelectorAll('.portfolioBig__item')

if (bigPortfolio && !workButton.classList.contains('wasClicked')) {
  const resizingPortfolio = () => {
    let widhtNew = bigPortfolio.clientWidth
    let newHeight = widhtNew * 1.73
    let property = `height: ${newHeight}px;`
    bigPortfolio.setAttribute('style', property)
  }

  window.addEventListener('load', resizingPortfolio, true)
  window.addEventListener('resize', resizingPortfolio, true)
}

if (bigPortfolioContent) {
  let resizingPortfolioContent = () => {
    bigPortfolioContent.forEach(function(element) {
      let widhtNew = element.clientWidth
      let newHeight = widhtNew
      let property = `height: ${newHeight}px;`
      element.setAttribute('style', property)
    })
  }

  bigPortfolioItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      resizingPortfolioContent()
    })
    item.addEventListener('click', function() {
      resizingPortfolioContent()
    })
  })
}

//big portfolio filter bigPortfolioItems

const worksTabsArr = document.querySelectorAll('.worksTab')
const worksTabsSmall = document.querySelectorAll('.worksTabsSmall')
const worksTabAll = document.querySelector('.worksTabAll')
const worksTabKitchen = document.querySelector('.worksTabKitchen')
const worksTabArt = document.querySelector('.worksTabArt')
const worksTabDesign = document.querySelector('.worksTabDesign')

const worksTopicKitchen = document.querySelectorAll('.worksTopicKitchen')
const worksTopicArt = document.querySelectorAll('.worksTopicArt')
const worksTopicDesign = document.querySelectorAll('.worksTopicDesign')

const worksPage = document.querySelector('.works-page')

if (worksPage) {
  function simpleFilter(tab, topic) {
    tab.addEventListener('click', function() {
      worksTabsArr.forEach(function(item) {
        if (item.classList.contains('activeFilter')) {
          item.classList.remove('activeFilter')
        }
      })
      tab.classList.add('activeFilter')

      bigPortfolioItems.forEach(function(element) {
        element.classList.add('hiddenElement')
      })

      topic.forEach(function(item) {
        item.classList.remove('hiddenElement')
      })

      workButton.classList.add('hiddenElement')

      worksTabsSmall.forEach(function(element) {
        if (element.classList.contains('activeFilter')) {
          let property = `height: 982px;`
          bigPortfolio.setAttribute('style', property)

          const resizingPortfolio = () => {
            let widhtNew = bigPortfolio.clientWidth
            let newHeight = widhtNew * 0.86
            let property = `height: ${newHeight}px;`
            bigPortfolio.setAttribute('style', property)
          }

          resizingPortfolio()

          window.addEventListener('load', resizingPortfolio, true)
          window.addEventListener('resize', resizingPortfolio, true)
        }
      })
    })
  }

  function showAll(tab) {
    tab.addEventListener('click', function() {
      worksTabsArr.forEach(function(item) {
        if (item.classList.contains('activeFilter')) {
          item.classList.remove('activeFilter')
        }
      })

      tab.classList.add('activeFilter')

      bigPortfolioItems.forEach(function(element) {
        element.classList.remove('hiddenElement')

        if (element.classList.contains('defaultHidden')) {
          element.classList.add('hiddenElement')
        }
      })

      if (workButton.classList.contains('hiddenElement')) {
        workButton.classList.remove('hiddenElement')
      }

      let property = `height: 1960px;`
      bigPortfolio.setAttribute('style', property)

      const resizingPortfolio = () => {
        let widhtNew = bigPortfolio.clientWidth
        let newHeight = widhtNew * 1.73
        let property = `height: ${newHeight}px;`
        bigPortfolio.setAttribute('style', property)
      }

      resizingPortfolio()

      window.addEventListener('load', resizingPortfolio, true)
      window.addEventListener('resize', resizingPortfolio, true)
    })
  }

  showAll(worksTabAll)
  simpleFilter(worksTabKitchen, worksTopicKitchen)
  simpleFilter(worksTabArt, worksTopicArt)
  simpleFilter(worksTabDesign, worksTopicDesign)
}

// remove whitespace in input value
window.onload = function() {
  const inputs = document.querySelectorAll('input')
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type == 'text') {
      inputs[i].onchange = function() {
        this.value = this.value.replace(/^\s+/, '').replace(/\s+$/, '')
      }
    }
  }
}

// Addition styles for forms inputs
let inputArr = document.querySelectorAll('.contacts__form__input')
let inputArrBig = document.querySelectorAll('.contactsOnWhite__form__input')

inputArr.forEach(function(element) {
  element.addEventListener('blur', function() {
    if (element.value) {
      let property = `border-top: none;`
      element.setAttribute('style', property)
    }
  })
})

inputArrBig.forEach(function(element) {
  element.addEventListener('blur', function() {
    if (element.value) {
      let property = `border-top: none;`
      element.setAttribute('style', property)
    }
  })
})

// script for showing data from the contact form in console

let inputName = document.querySelector('#name')
let inputEmail = document.querySelector('#email')
let inputMessage = document.querySelector('#message')
let form = document.querySelector('#contacts__form')
let popUp = document.querySelector('.contacts__pop-up')
let popUpButton = document.querySelector('.contacts__pop-up__button')

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(` Зареєструвався новий користувач
    Ім'я: ${inputName.value};
    Пошта: ${inputEmail.value};
    Повідомлення: ${inputMessage.value};`)

    inputArr.forEach(function(element) {
      element.value = ''
      let property = `border-top: 1px solid rgba($white, 0.4);`
      element.setAttribute('style', property)
    })

    form.classList.add('hiddenElement')
    popUp.classList.remove('hiddenElement')
  })

  popUpButton.addEventListener('click', function(e) {
    e.preventDefault()

    popUp.classList.add('hiddenElement')
    form.classList.remove('hiddenElement')
  })
}

let inputNameBig = document.querySelector('#nameBig')
let inputEmailBig = document.querySelector('#emailBig')
let inputMessageBig = document.querySelector('#messageBig')
let formBig = document.querySelector('#contactsOnWhite__form')
let popUpBig = document.querySelector('.contactsOnWhite__pop-up')
let popUpButtonBig = document.querySelector('.contactsOnWhite__pop-up__button')

if (formBig) {
  formBig.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(` Зареєструвався новий користувач
    Ім'я: ${inputNameBig.value};
    Пошта: ${inputEmailBig.value};
    Повідомлення: ${inputMessageBig.value};`)

    inputArrBig.forEach(function(element) {
      element.value = ''
      let property = `border-top: 1px solid rgba($white, 0.4);`
      element.setAttribute('style', property)
    })

    formBig.classList.add('hiddenElement')
    popUpBig.classList.remove('hiddenElement')
  })

  popUpButtonBig.addEventListener('click', function(e) {
    e.preventDefault()

    popUpBig.classList.add('hiddenElement')
    formBig.classList.remove('hiddenElement')
  })
}

// script for smooth scroll
import SmoothScroll from '../../node_modules/smooth-scroll'

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 2500,
  speedAsDuration: true
})

// script for burger menu

const burgerMenuOpen = document.querySelector('.burger-menu__button-open')
const burgerMenuLink = document.querySelector(
  '.burger-modal__navigation__list__link'
)
const burgerModal = document.querySelector('.burger-modal')
const closeLinesHide = document.querySelectorAll(
  '.burger-menu__button-open__line--hide'
)
const closeLineShow = document.querySelector(
  '.burger-menu__button-open__line--show'
)

function changeBgColor(elementDOM, color) {
  let property = `background-color:${color};`
  elementDOM.setAttribute('style', property)
}

burgerMenuOpen.addEventListener('click', function() {
  if (burgerMenuOpen.classList.contains('burgerModalOpen')) {
    burgerModal.classList.add('hiddenElement')
    burgerMenuOpen.classList.remove('burgerModalOpen')

    closeLinesHide.forEach(function(element) {
      element.classList.remove('hiddenElement')
    })
    closeLineShow.classList.remove('burger-menu__button-close__line')
    changeBgColor(closeLineShow, 'black')
  } else {
    burgerModal.classList.remove('hiddenElement')
    burgerMenuOpen.classList.add('burgerModalOpen')

    closeLinesHide.forEach(function(element) {
      element.classList.add('hiddenElement')
    })
    closeLineShow.classList.add('burger-menu__button-close__line')
    changeBgColor(closeLineShow, 'white')
  }
})

burgerMenuLink.addEventListener('click', function() {
  burgerModal.classList.add(' hiddenElement ')
})

//change contact section bg

let contactPage = document.querySelector('.contactUs-page')
let contactPageBg = document.querySelector('.contactUs-page__bg')

function changeBg(slide, img) {
  let adress = img.getAttribute('src')
  let property = `background-image: url(${adress});`
  slide.setAttribute('style', property)
}

if (contactPage && contactPageBg) {
  changeBg(contactPage, contactPageBg)
}

// count increasing on about page

let numbersArr = document.querySelectorAll('.statistics-item__number')
let numersWrap = document.querySelector('.container--statistics')

const time = 2000
const step = 1

function outNum(num, elem) {
  let n = 0
  let t = Math.round(time / (num / step))
  let interval = setInterval(() => {
    n = n + step
    if (n == num) {
      clearInterval(interval)
    }
    elem.innerHTML = n
  }, t)
}

if (numersWrap) {
  let numberTop = numersWrap.getBoundingClientRect()
  let top = numberTop.top
  let bottom = numberTop.bottom
  let height = numberTop.height

  window.addEventListener('scroll', function onScroll() {
    if (top + height >= 0 || height + window.innerHeight >= bottom) {
      window.removeEventListener('scroll', onScroll)

      let interval = setInterval(function() {
        numbersArr.forEach(item => {
          let end = +item.innerHTML

          outNum(item.innerHTML, item)

          if (item.innerHTML == end) {
            clearInterval(interval)
          }
        })
      }, 5)
    }
  })
}

// blog page filter
const blogPage = document.querySelector('#blog-page')

const topicArt = document.querySelectorAll('.topicArt')
const topicDesign = document.querySelectorAll('.topicDesign')
const topicLife = document.querySelectorAll('.topicLife')
const topicEvents = document.querySelectorAll('.topicEvents')

const articleArr = document.querySelectorAll('.whatWeDo-blog')

const tabsBlogArr = document.querySelectorAll('.blog-nav__item')
const topicsAllTab = document.querySelector('.topicsAllTab')
const topicArtTab = document.querySelector('.topicArtTab')
const topicDesignTab = document.querySelector('.topicDesignTab')
const topicLifeTab = document.querySelector('.topicLifeTab')
const topicEventsTab = document.querySelector('.topicEventsTab')

if (blogPage) {
  function simpleFilter(tab, topic) {
    tab.addEventListener('click', function() {
      tabsBlogArr.forEach(function(item) {
        if (item.classList.contains('activeFilter')) {
          item.classList.remove('activeFilter')
        }
      })

      tab.classList.add('activeFilter')
      articleArr.forEach(function(element) {
        element.classList.add('hiddenElement')
      })

      topic.forEach(function(item) {
        item.classList.remove('hiddenElement')
      })

      blogButton.classList.add('hiddenElement')
    })
  }

  function showAll(tab) {
    tab.addEventListener('click', function() {
      tabsBlogArr.forEach(function(item) {
        if (item.classList.contains('activeFilter')) {
          item.classList.remove('activeFilter')
        }
      })

      tab.classList.add('activeFilter')

      articleArr.forEach(function(element) {
        element.classList.remove('hiddenElement')

        if (element.classList.contains('defaultHidden')) {
          element.classList.add('hiddenElement')
        }
      })

      if (blogButton.classList.contains('hiddenElement')) {
        blogButton.classList.remove('hiddenElement')
      }
    })
  }

  showAll(topicsAllTab)
  simpleFilter(topicArtTab, topicArt)
  simpleFilter(topicDesignTab, topicDesign)
  simpleFilter(topicLifeTab, topicLife)
  simpleFilter(topicEventsTab, topicEvents)

  const blogButton = document.querySelector('.blog-button')

  blogButton.addEventListener('click', function() {
    tabsBlogArr.forEach(function(item) {
      if (item.classList.contains('activeFilter')) {
        item.classList.remove('activeFilter')
      }
    })

    topicsAllTab.classList.add('activeFilter')

    articleArr.forEach(function(element) {
      element.classList.remove('hiddenElement')
    })

    blogButton.classList.add('hiddenElement')
  })
}
