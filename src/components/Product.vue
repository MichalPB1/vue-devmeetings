<template>
  <div class="product">
    <div class="product-img">
      <img src="https://via.placeholder.com/50x50" />
    </div>
    <div class="product-name">
      {{ offer.name }}
    </div>
    <button class="product-remove" @click="removeProduct(index)">×</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    offer: Object
  },
  methods: {
    removeProduct(index) {
      this.$emit('remove', index)
    }
  }
}
</script>

<style scoped>
.product {
  display: flex;
  padding: 10px 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.product-remove {
    background: none;
    border: 0;
    font-size: 20px;
}
</style>
