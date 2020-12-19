<template>
  <div>
    <div>
      Add/Edit Blog Post
    </div>
    <textarea v-model="post"></textarea>
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
    }
  },
  computed: {
    ...mapGetters(['post'])
  },
  mounted() {
    if(this.$route.params.id) this.fetchPost(this.$route.params.id);
  },
  methods: {
    ...mapActions(['fetchPost'])
  }
};
</script>

<style lang="scss">
</style>
