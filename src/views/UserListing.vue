<template>
  <div>
    uSERS
    <Register />
    <p v-for="user in users" :key="user.id">
      {{ user }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Register from '@/components/Register';

export default {
  name: "Blog",
  components: {
    Register
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['users'])
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions(['fetchUsers'])
  }
};
</script>

<style lang="scss">
</style>
