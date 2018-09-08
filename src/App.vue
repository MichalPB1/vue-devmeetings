<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Mini Shop</h1>
    <template v-if="products.length">
      <div class="products">
          <product :offer="product" v-for="(product, index) in products" :key="index" @remove="removeProduct(index)"></product>
      </div>
    </template>
    <p v-else>No products</p>

    <h2>Add new product</h2>
    <form @submit.prevent="newProduct">
      <input v-validate="'required'" v-model="productName" name="productName" placeholder="Product name" autocomplete="off">
      <p class="error">
        {{ errors.first('productName') }}
      </p>
      <button class="btn btn-action" type="subm">Dodaj nowy produkt :)</button>
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

      this.$validator.validate().then(result => {
        if (result) {
          const id = randomId();

          this.products.push({
            id: id,
            name: this.productName
          })

          this.productName = ''
        }
      });
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
  max-width: 800px;
  margin: 60px auto 0 auto;
}
input {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}
.products {
  width: 800px;
  margin: 0 auto;
}
.products .product:nth-child(odd) {
  background: #f2f2f2;
}
.btn {
  border: 1px solid #ccc;
  padding: 10px 20px;
}
.btn-action {
  background: #41b883;
  color: #fff;
  width: 100%;
  font-size: 18px;
  padding: 20px;
  cursor: pointer;
}
.error {
  color: red;
  text-align: left;
}
.error:empty {
  display: none;
}
</style>
