<template>
  <div>
    <Register />
    <Signin />
  </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex';
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
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="scss">
</style>
