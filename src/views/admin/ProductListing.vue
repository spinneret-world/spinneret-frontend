<template>
  <div>
    <div>
      Products
    </div>
    <router-link to="/admin/products/add">
      <button>Add Product</button>
    </router-link>
    <div v-for="product in products" :key="product.id">
      <ul>
        <li>{{ product.name }}<router-link :to="'/admin/products/edit/'+product.id"><button type="button">Edit</button></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "AdminProducts",
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
