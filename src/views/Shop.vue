<template>
  <div>
    <div>
      Shop
    </div>
    <div v-for="product in products" :key="product.id">
      <router-link :to="'/shop/'+product.id">{{ product.name }}</router-link>
    </div>
    <router-link to="/order">
      <button type="button">Order Form</button>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Shop",
  components: {
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['products'])
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    ...mapActions(['fetchProducts'])
  }
};
</script>

<style lang="scss">
</style>
