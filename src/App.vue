<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Mini Shop</h1>
    <template v-if="products.length">
      <h1>Products</h1>
      <div class="products">
          <div class="product" v-for="(product, index) in products" :key="index">
            <div class="product-name">
              {{ product.name }}
            </div>
            <button class="product-remove" @click="removeProduct(index)">×</button>
          </div>
      </div>
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
.products {
  width: 800px;
  border: 1px solid #e1e1e1;
  margin: 0 auto;
}
.products .product:nth-child(odd) {
  background: #e1e1e1;
}
.product {
  display: flex;
  padding: 10px 20px;
  flex-direction: row;
  justify-content: space-between;
}
.product-remove {
    background: none;
    border: 0;
    font-size: 20px;
}
</style>
