// services DB

const servicesBD = [
  {
    id: 'service1',
    title: 'creative kitchen',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    img: './assets/img/service1.jpg'
  },
  {
    id: 'service2',
    title: 'art installation',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    img: './assets/img/service2.jpg'
  },
  {
    id: 'service3',
    title: 'print design',
    text:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ',
    img: './assets/img/service3.jpg'
  }
]

// changing serviceItem page content
let buttonsArr = document.querySelectorAll('.whatWeDo-item__content__button')
const servicesItemTitle = document.querySelector('.servicesItemTitle')
const servicesItemImg = document.querySelector('.servicesItemImg')
const servicesItemText = document.querySelector('.servicesItemText')

if (buttonsArr) {
  buttonsArr.forEach(button => {
    button.addEventListener('click', function() {
      let serviceKey = button.dataset.about
      console.log(serviceKey)
      localStorage.setItem('serviceID', serviceKey)
    })
  })
}

if (servicesItemTitle) {
  let activeServiceId = localStorage.getItem('serviceID')
  servicesBD.forEach(item => {
    if (item.id == activeServiceId) {
      servicesItemTitle.innerHTML = item.title
      servicesItemImg.setAttribute('src', item.img)
    }
  })
}
