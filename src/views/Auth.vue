<template>
  <div>
    <Signin v-if="!user" />
    <h1 v-else> Welcome! </h1>
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
