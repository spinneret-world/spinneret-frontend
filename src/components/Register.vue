<template>
  <div>
    <h2>Register</h2>
    <label> Email
      <input v-model="email"/>
    </label>
    <label> Username
      <input v-model="username"/>
    </label>
    <label> Password
      <input v-model="password"/>
    </label>
    <button @click="submitRegistration">Submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Register",
  components: {
  },
  data() {
    return {
      email: "",
      username: "",
      password: ""
    }
  },
  computed: {
    ...mapGetters([])
  },
  mounted() {
  },
  methods: {
    ...mapActions(['register']),
    submitRegistration() {
      this.register({
        email: this.email,
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style lang="scss">
</style>
