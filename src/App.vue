<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Mini Shop</h1>
    <template v-if="products.length">
      <h1>Products</h1>
      <ul>
        <li v-for="(product, index) in products" :key="index">
          {{ product.name }}
          <button @click="removeProduct(index)">×</button>
        </li>
      </ul>
    </template>
    <p v-else>No products</p>

    <h2>Add new product</h2>
    <form @submit.prevent="newProduct">
      <input v-model="productName" placeholder="Product name">
      <button type="subm">Dodaj nowy produkt :)</button>
    </form>
  </div>
</template>

<script>
import Product from './components/Product.vue'

const randomId = () => Math.floor(Math.random() * (100 - 1) + 1);

export default {
  name: 'app',
  data() {
    return {
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
    }
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
  },
  components: {
    Product
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
