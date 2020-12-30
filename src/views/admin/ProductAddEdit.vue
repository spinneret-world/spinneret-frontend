<template>
  <div>
    <div>
      Add/Edit Products
    </div>
    <label> Name
      <input v-model="newProduct.name"/>
    </label>
    <label> Image Link
      <input type="url" v-model="newProduct.image_link"/>
    </label>
    <label> Creator
      <input v-model="newProduct.creator"/>
    </label>
    <label> Description
      <textarea v-model="newProduct.description"></textarea>
    </label>
    <button @click="submitProduct" type="button">Submit</button>
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
      newProduct: {
        name: "",
        description: "",
        image_link: "",
        creator: ""
      }
    }
  },
  computed: {
    ...mapGetters(['product', 'user'])
  },
  watch: {
    'product': function() {
      this.newProduct = this.product;
    }
  },
  mounted() {
    if(this.$route.params.id) {
      this.fetchProduct(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(['fetchProduct', 'addProduct', 'patchProduct']),
    submitProduct(){
      if (this.newProduct.id) {
        console.log(this.newProduct);
        this.patchProduct(this.newProduct);
      } else {
        this.newProduct.author_id = this.user.id;
        this.addProduct(this.newProduct);
      }
    }
  }
};
</script>

<style lang="scss">
</style>
