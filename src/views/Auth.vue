<template>
  <div>
    <Register />
    <Signin v-if="!userToken" />
    <div v-else>
      <div id="nav">
        <router-link to="/users">Users</router-link> |
      </div>
      <h1> Welcome! </h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Signin from '@/components/Signin';
import Register from '@/components/Register';

export default {
  name: "Blog",
  components: {
    Signin,
    Register
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['userToken'])
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>
