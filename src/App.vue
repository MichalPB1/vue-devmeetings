<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Mini Shop</h1>

    <product-list :products="products" @remove="removeProduct(...arguments)"></product-list>

    <button class="btn" type="button" @click="loadMore()">Load more</button>

    <h2>Add new product</h2>
    <form @submit.prevent="newProduct">
      <input v-validate="'required'" v-model="productName" name="productName" placeholder="Product name" autocomplete="off">
      <p class="error">
        {{ errors.first('productName') }}
      </p>
      <button class="btn btn-action" type="subm">Add new product :)</button>
    </form>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import { mapGetters, mapActions } from 'vuex'

const randomId = () => Math.floor(Math.random() * (100 - 1) + 1);

export default {
  name: 'app',
  data() {
    return {
      productName: '',
      page: 1
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsStore/products'
    })
  },
  methods: {
    ...mapActions({
      getProducts: 'productsStore/get',
      loadMore: 'productsStore/loadMore'
    }),
    newProduct() {

      this.$validator.validate().then(result => {
        if (result) {
          const id = randomId();

          this.products.push({
            id: id,
            name: this.productName
          })

          this.productName = ''
          this.$validator.reset()
        }
      });
    },
    removeProduct(id) {
      this.products.forEach((product, index) => {
        if (product.id === id) {
          this.products.splice(index, 1);
        }
      })
    }
  },
  components: {
    ProductList
  },
  mounted() {
    this.getProducts(this.page)
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
</style>
