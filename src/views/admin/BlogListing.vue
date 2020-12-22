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
        <li>{{ post.content }}<router-link :to="'/admin/blog/edit/'+post.id">{{ post.title }}<button type="button">Edit</button></router-link></li>
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
