<template>
  <div>
    <p v-for="user in users" :key="user.id">
      {{ user }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Blog",
  components: {
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
