<template>
  <div>
    <div>
      Order Products
    </div>
    <form>
      <label>Your Name
        <input v-model="orderForm.name"/>
      </label>
      <label>Your Email Address
        <input type="email" v-model="orderForm.email"/>
      </label>
      <label>Your Shipping Address
        <textarea v-model="orderForm.address"></textarea>
      </label>
      <label>Your Order
        <textarea v-model="orderForm.order"></textarea>
      </label>
    </form>
    <button type="button" @click="submitOrder">Submit Order</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "Order",
  components: {
  },
  data() {
    return {
      orderForm: {
        name: "",
        email: "",
        address: "",
        order: ""
      }
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    ...mapActions(['addOrder']),
    submitOrder() {
      this.addOrder(this.orderForm);
    }
  }
};
</script>

<style lang="scss">
</style>
