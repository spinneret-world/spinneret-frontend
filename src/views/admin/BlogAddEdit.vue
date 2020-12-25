<template>
  <div>
    <div>
      Add/Edit Blog Post
    </div>
    <textarea v-model="newPost.content"></textarea>
    <button @click="submitPost" type="button">Submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "BlogAddEdit",
  components: {
  },
  data() {
    return {
      newPost: {
        content: "",
      }
    }
  },
  computed: {
    ...mapGetters(['post', 'user'])
  },
  watch: {
    'post': function() {
      this.newPost = this.post;
    }
  },
  mounted() {
    if(this.$route.params.id) {
      this.fetchPost(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(['fetchPost', 'addPost', 'patchPost']),
    submitPost(){
      if (this.newPost.id) {
        console.log(this.newPost);
        this.patchPost(this.newPost);
      } else {
        this.newPost.author_id = this.user.id;
        this.addPost(this.newPost);
      }
    }
  }
};
</script>

<style lang="scss">
</style>
