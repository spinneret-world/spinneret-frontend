<template>
  <div>
    <div>
      Blog Posts
    </div>
    <router-link to="/admin/blog/add">
      <button>Add Blog Post</button>
    </router-link>
    <div v-for="post in posts" :key="post.id">
      <ul>
        <li><router-link :to="'/admin/blog/'+post.id">{{ post.title }}</router-link></li>
      </ul>
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
