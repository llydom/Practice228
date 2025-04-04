const basePath = window.location.hostname.includes('github.io')
  ? '/Practice228/'
  : '/'

document.addEventListener('DOMContentLoaded', function () {
  fetch(basePath + 'header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data
    })
    .catch(error => console.error('Error loading header:', error))

  fetch(basePath + 'footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data
    })
    .catch(error => console.error('Error loading footer:', error))

  document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
    if (link.href.includes('https://') || link.href.includes('http://')) {
      return
    }
    link.href = basePath + link.getAttribute('href')
  })

  document.querySelectorAll('script').forEach(script => {
    if (
      script.src &&
      (script.src.includes('https://') || script.src.includes('http://'))
    ) {
      return
    }
    if (script.src) {
      script.src = basePath + script.getAttribute('src')
    }
  })
})

var app = new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: 1,
        title: 'Nantes Carrot',
        short_text: 'A classic sweet and crunchy carrot.',
        image: 'images/nantes_carrot.jpg',
        desc: 'Nantes carrots are well-known for their crisp texture and sweet taste, making them perfect for eating raw or cooked.',
        characteristics: {
          resistance: 'HR: Root Rot; IR: Carrot Fly',
          plant: [
            'Medium-sized roots with a smooth texture.',
            'Requires loose, well-drained soil.',
            'Perfect for both garden and container growing.'
          ],
          fruit: [
            'Bright orange color.',
            'Sweet flavor with a tender crunch.',
            'Average root length: 15 – 20 cm.'
          ],
          cycle: ['Spring', 'Summer'],
          color: 'Orange'
        }
      },
      {
        id: 2,
        title: 'Imperator Carrot',
        short_text: 'Long, slender carrots with a rich taste.',
        image: 'images/imperator_carrot.jpg',
        desc: 'Imperator carrots are known for their long, slender roots and rich, deep flavor. They are often used in cooking and juices.',
        characteristics: {
          resistance: 'HR: Root Rot; IR: Carrot Weevil',
          plant: [
            'Long, smooth roots with a tapered tip.',
            'Requires deep, fertile soil for optimal growth.',
            'High yield variety with good storage life.'
          ],
          fruit: [
            'Rich, deep orange color.',
            'Sweet, earthy flavor with a smooth texture.',
            'Average root length: 20 – 25 cm.'
          ],
          cycle: ['Summer', 'Fall'],
          color: 'Orange'
        }
      },
      {
        id: 3,
        title: 'Danvers Carrot',
        short_text: 'Ideal for heavy soils, with a sweet flavor.',
        image: 'images/danvers_carrot.jpg',
        desc: 'Danvers carrots are known for their excellent flavor and ability to thrive in heavy soils. They have a robust and sweet taste.',
        characteristics: {
          resistance: 'HR: Root Rot; IR: Carrot Weevil',
          plant: [
            'Shorter, thicker roots with a deep orange color.',
            'Tolerates a wide range of soil types.',
            'Great for long-term storage and preservation.'
          ],
          fruit: [
            'Deep orange color with a slightly tapered end.',
            'Sweet and crunchy texture.',
            'Average root length: 18 – 22 cm.'
          ],
          cycle: ['Spring', 'Fall'],
          color: 'Orange'
        }
      },
      {
        id: 4,
        title: 'Purple Carrot',
        short_text: 'A unique carrot variety with vibrant purple color.',
        image: 'images/purple_carrot.jpg',
        desc: 'Purple carrots are a unique variety with rich antioxidants and a slightly earthy flavor. They add a burst of color to any dish.',
        characteristics: {
          resistance: 'HR: Root Rot; IR: Carrot Rust Fly',
          plant: [
            'Dark purple skin with a vibrant orange interior.',
            'Best grown in well-drained soil with plenty of sunlight.',
            'Can be used in salads, juices, and soups.'
          ],
          fruit: [
            'Purple skin with orange flesh.',
            'Slightly earthy taste with a crisp texture.',
            'Average root length: 15 – 18 cm.'
          ],
          cycle: ['Spring', 'Summer'],
          color: 'Purple'
        }
      },
      {
        id: 5,
        title: 'Baby Carrot',
        short_text: 'Small and tender carrots perfect for snacking.',
        image: 'images/baby_carrot.jpg',
        desc: 'Baby carrots are tender, small-sized carrots that are perfect for snacking and eating raw. They are sweet and juicy.',
        characteristics: {
          resistance: 'HR: Root Rot; IR: Carrot Weevil',
          plant: [
            'Small, tender roots with a smooth texture.',
            'Best grown in well-drained, rich soil.',
            'Great for fresh consumption and snacking.'
          ],
          fruit: [
            'Bright orange color.',
            'Sweet and tender with a mild flavor.',
            'Average root length: 5 – 8 cm.'
          ],
          cycle: ['Spring', 'Summer'],
          color: 'Orange'
        }
      }
    ],
    product: {},
    cart: [],
    btnVisible: 0,
    orderSummary: null,
    orderProducts: []
  },
  mounted: function () {
    this.getProduct()
    this.getCart()
  },
  methods: {
    getProduct: function () {
      const productId = window.location.hash.replace('#', '')
      if (productId) {
        this.product = this.products.find(p => p.id == productId) || {}
        this.checkInCart(productId)
      }
    },
    addToCart (id) {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      if (!cart.includes(id)) {
        cart.push(id)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      this.btnVisible = 1
    },
    goToCart () {
      window.location.href = '/Practice228/contact-us.html'
    },

    checkInCart: function (id) {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      this.btnVisible = cart.includes(parseInt(id)) ? 1 : 0
    },
    getCart: function () {
      this.cart = JSON.parse(localStorage.getItem('cart')) || []
    }
  }
})
