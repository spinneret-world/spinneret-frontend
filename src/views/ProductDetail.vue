<template>
  <div>
    <div>
      {{ product.name }}
    </div>
    <img :src="product.image_link"/>
    By {{ product.creator }}
    <p> {{ product.description }} </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "ProductAddEdit",
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['product'])
  },
  mounted() {
    this.fetchProduct(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchProduct']),
  }
};
</script>

<style lang="scss">
</style>
