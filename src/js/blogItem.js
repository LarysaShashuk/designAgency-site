// blog articles DB

const blogArticlesBD = [
  {
    id: 'blogArticle1',
    name: 'we have created the best event',
    data: '16 november 2015',
    imgSrc: './assets/img/1blog.jpg'
  },
  {
    id: 'blogArticle2',
    name: 'how to make a good design?',
    data: '11 november 2015',
    imgSrc: './assets/img/2blog.jpg'
  },
  {
    id: 'blogArticle3',
    name: 'the impact of design for society',
    data: '08 november 2015',
    imgSrc: './assets/img/3blog.jpg'
  },
  {
    id: 'blogArticle4',
    name: 'veganism and green economy',
    data: '03 november 2015',
    imgSrc: './assets/img/4blog.jpg'
  },
  {
    id: 'blogArticle5',
    name: 'UI/UX design creating',
    data: '01 november 2015',
    imgSrc: './assets/img/5blog.jpg'
  },
  {
    id: 'blogArticle6',
    name: 'how to create a city culture hub',
    data: '28 october 2015',
    imgSrc: './assets/img/6blog.jpg'
  },
  {
    id: 'blogArticle7',
    name: 'colors and accents of the interior',
    data: '25 october 2015',
    imgSrc: './assets/img/7blog.jpg'
  },
  {
    id: 'blogArticle8',
    name: 'modern way of urban culture',
    data: '20 october 2015',
    imgSrc: './assets/img/8blog.jpg'
  },
  {
    id: 'blogArticle9',
    name: 'futurism and abstraction',
    data: '15 october 2015',
    imgSrc: './assets/img/9blog.jpg'
  },
  {
    id: 'blogArticle10',
    name: 'a few little things for coziness',
    data: '11 october 2015',
    imgSrc: './assets/img/10blog.jpg'
  },
  {
    id: 'blogArticle11',
    name: 'planning, preparation, implementation',
    data: '05 october 2015',
    imgSrc: './assets/img/11blog.jpg'
  },
  {
    id: 'blogArticle12',
    name: 'design thinking for innovation',
    data: '01 october 2015',
    imgSrc: './assets/img/12blog.jpg'
  }
]

// changing blogItem page content
let buttonsArr = document.querySelectorAll('.whatWeDo-blog__content__button')
let blogItemTitle = document.querySelector('.blogItemTitle')
let blogItemData = document.querySelector('.blogItemData')
let blogItemContentImgSrc = document.querySelector('.blogItemContentImg')

buttonsArr.forEach(button => {
  button.addEventListener('click', function() {
    let articleKey = button.dataset.about
    console.log(articleKey)
    localStorage.setItem('blogActicleID', articleKey)
  })
})

if (blogItemTitle) {
  let activeActicleId = localStorage.getItem('blogActicleID')
  blogArticlesBD.forEach(item => {
    if (item.id == activeActicleId) {
      blogItemTitle.innerHTML = item.name
      blogItemData.innerHTML = item.data
      blogItemContentImgSrc.setAttribute('src', item.imgSrc)
    }
  })
}

// change bg img
let blogItemContentImgWrap = document.querySelector('.blogItemContent__imgWrap')
let blogItemContentImg = document.querySelector('.blogItemContent__img')

function changeBg(slide, img) {
  let adress = img.getAttribute('src')
  let property = `background-image: url(${adress});`
  slide.setAttribute('style', property)
}

if (blogItemContentImg) {
  changeBg(blogItemContentImg, blogItemContentImgSrc)
}

//resizing img height

const resizingImg = () => {
  let widhtNew = blogItemContentImgWrap.clientWidth
  let newHeight = widhtNew * 0.65
  let property = `height: ${newHeight}px;`
  blogItemContentImgWrap.setAttribute('style', property)
}

if (blogItemContentImgWrap) {
  resizingImg()

  window.addEventListener('load', resizingImg, true)
  window.addEventListener('resize', resizingImg, true)
}

//slides auto-creating

let sliderWrapper = document.querySelector('.relatedPostsSlider__wrap')

if (sliderWrapper) {
  blogArticlesBD.forEach(article => {
    let slide = document.createElement('div')
    slide.className = 'swiper-slide relatedPostsSlider__slide'
    sliderWrapper.append(slide)

    let slideLink = document.createElement('a')
    slideLink.setAttribute('data-about', article.id)
    slideLink.setAttribute('href', 'blogItem.html')
    slideLink.className =
      'relatedPostsSlider__slide__link whatWeDo-blog__content__button '
    slide.append(slideLink)

    let slideTitle = document.createElement('p')
    slideTitle.className = 'relatedPostsSlider__slide__title'
    slideTitle.innerText = article.name
    slideLink.append(slideTitle)

    let slideData = document.createElement('p')
    slideData.className = 'relatedPostsSlider__slide__data'
    slideData.innerText = article.data
    slideLink.append(slideData)

    slideLink.addEventListener('click', function() {
      localStorage.setItem('blogActicleID', article.id)
    })
  })
}
