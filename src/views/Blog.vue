<template>
  <div>
    <div>
      Blawg
    </div>
    <div v-for="post in posts" :key="post.id">
      {{ post }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Blog",
  components: {
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['posts'])
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
};
</script>

<style lang="scss">
</style>
