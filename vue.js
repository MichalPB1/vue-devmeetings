const randomId = () => Math.floor(Math.random() * (100 - 1) + 1);

new Vue({
  el: '#app',
  data: {
    test: 'Dev Meetings',
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
      const id = randomId();

      this.products.push({
        id: id,
        name: `Product ${id}`
      })
    }
  }
})
