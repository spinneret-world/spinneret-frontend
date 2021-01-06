<template>
  <div>
    <Signin v-if="!user" />
    <div v-else>
      <div id="nav">
        <router-link to="/admin/users">Users</router-link> |
        <router-link to="/admin/blog">Blog</router-link> |
        <router-link to="/admin/experiences">Experiences</router-link> |
        <router-link to="/admin/products">Products</router-link> |
        <router-link to="/admin/orders">Orders</router-link> |
      </div>
      <h1> Welcome! </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Signin from '@/components/Signin';

export default {
  name: "Admin",
  components: {
    Signin
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>
