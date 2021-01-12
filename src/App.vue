<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/experiences">Experiences</router-link> |
      <router-link to="/shop">Shop</router-link> |
    </div>
    <div v-if="user">
      <div>
        <router-link to="/admin/users">Users</router-link> |
        <router-link to="/admin/blog">Blog</router-link> |
        <router-link to="/admin/experiences">Experiences</router-link> |
        <router-link to="/admin/products">Products</router-link> |
        <router-link to="/admin/orders">Orders</router-link> |
        <router-link to="/admin/settings">Settings</router-link> 
      </div>
    </div>
    <router-view />
    <audio controls src="https://streampusher-relay.club/datafruits.mp3"></audio>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: "App",
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['user', 'settings'])
  },
  watch: {
  },
  mounted() {
    if(this.$cookies.get('jwt')) {
      this.setUserToken(this.$cookies.get('jwt'));
      this.fetchUser();
      this.fetchSettings();
    }
  },
  methods: {
    ...mapActions(['fetchUser', 'fetchSettings']),
    ...mapMutations(['setUserToken'])
  }
};

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
