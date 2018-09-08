<template>
  <div class="products">
    <div class="products-search">
      <input type="text" v-model="search" placeholder="Search a product...">
    </div>
    <div class="products" v-if="filteredList && filteredList.length">
        <product-list-item :offer="product" v-for="(product, index) in filteredList" :key="index"  @remove="removeProduct(...arguments)"></product-list-item>
    </div>
    <p v-else class="products-no">No products</p>
  </div>
</template>

<script>
import ProductListItem from './ProductListItem.vue'

export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: false
    },
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove', id)
    }
  },
  components: {
    ProductListItem
  }
}
</script>

<style scoped>
.products {
  width: 800px;
  margin: 0 auto;
}
.products .product:nth-child(odd) {
  background: #f2f2f2;
}
.products-no {
  background: #f2f2f2;
  padding: 20px;
}
.products-search {
  margin-bottom: 30px;
}
.products-search input {
  padding: 20px;
  border: 1px solid #e1e1e1;
}
.error {
  color: red;
  text-align: left;
}
.error:empty {
  display: none;
}
</style>
