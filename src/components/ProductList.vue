<template>
  <div class="products">
    <div class="products" v-if="products && products.length">
        <product-list-item :offer="product" v-for="(product, index) in products" :key="index"  @remove="removeProduct(...arguments)"></product-list-item>
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

<style lang="css">
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
.error {
  color: red;
  text-align: left;
}
.error:empty {
  display: none;
}
</style>
