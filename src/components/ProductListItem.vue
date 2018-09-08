<template>
  <div class="product">
    <div class="product-img">
      <img src="https://via.placeholder.com/50x50" />
    </div>
    <div class="product-name">
      {{ offer.Name }}
    </div>
    <div class="product-price">
      <b>{{ offer.Price }} {{ offer.CurrencyCode }}</b>
    </div>
    <button class="product-remove" @click="removeProduct(offer.id)">×</button>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    offer: Object
  },
  methods: {
    removeProduct(id) {
      this.$emit('remove', id)
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
    cursor: pointer;
}
</style>
