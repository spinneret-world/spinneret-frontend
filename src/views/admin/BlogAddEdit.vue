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
        author_id: 1 //TODO read from store once token auth is set up
      }
    }
  },
  computed: {
    ...mapGetters(['post'])
  },
  mounted() {
    if(this.$route.params.id) {
      this.fetchPost(this.$route.params.id).then(()=>{
        this.newPost = this.post;
      });
    }
  },
  methods: {
    ...mapActions(['fetchPost', 'addPost']),
    submitPost(){
      this.addPost(this.newPost);
    }
  }
};
</script>

<style lang="scss">
</style>
