const randomId = () => Math.floor(Math.random() * (100 - 1) + 1);

new Vue({
  el: '#app',
  data: {
    productName: '',
    products: [
      {
        id: 1,
        name: 'Product 1'
      },
      {
        id: 2,
        name: 'Product 2'
      },
      {
        id: 3,
        name: 'Product 3'
      }
    ]
  },
  methods: {
    newProduct() {

      if (!this.productName.length) {
        alert('Please set a product name')
        return
      }

      const id = randomId();

      this.products.push({
        id: id,
        name: this.productName
      })

      this.productName = ''
    },
    removeProduct(index) {
      this.products.splice(index, 1);
    }
  }
})
