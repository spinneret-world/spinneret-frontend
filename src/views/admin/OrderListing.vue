<template>
  <div>
    <div>
      Orders
    </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Order</th>
        <th>Date</th>
        <th>Shipped?</th>
      </tr>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.name }}</td>
        <td>{{ order.email }}</td>
        <td>{{ order.address }}</td>
        <td>{{ order.order }}</td>
        <td>{{ order.created_at | date }}</td>
        <td><input @change="toggleOrderShipped(order.id)" type="checkbox" v-model="order.is_shipped"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "AdminOrders",
  components: {
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['orders'])
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    ...mapActions(['fetchOrders', 'patchOrder']),
    toggleOrderShipped(id) {
      const order = this.orders.find(order => {
        return order.id === id;
      });
      this.patchOrder(order);
    }
  }
};
</script>

<style lang="scss">
</style>
