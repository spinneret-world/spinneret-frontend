<template>
  <div>
    <h2>Login</h2>
    <label> Email
      <input v-model="email"/>
    </label>
    <label> Password
      <input v-model="password"/>
    </label>
    <button @click="submitLogin">Submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Signin",
  components: {
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    ...mapGetters([])
  },
  mounted() {
  },
  methods: {
    ...mapActions(['login']),
    submitLogin() {
      this.login({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss">
</style>

