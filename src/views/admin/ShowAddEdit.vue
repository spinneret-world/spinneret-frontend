<template>
  <div>
    <div>
      Add/Edit Experiences
    </div>
    <label> Name
      <input v-model="newShow.name"/>
    </label>
    <label> Link
      <input v-model="newShow.embed_link"/>
    </label>
    <label> Description
      <textarea v-model="newShow.description"></textarea>
    </label>
    <button @click="submitShow" type="button">Submit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "ShowAddEdit",
  components: {
  },
  data() {
    return {
      newShow: {
        name: "",
        description: "",
        embed_link: ""
      }
    }
  },
  computed: {
    ...mapGetters(['show', 'user'])
  },
  watch: {
    'show': function() {
      this.newShow = this.show;
    }
  },
  mounted() {
    if(this.$route.params.id) {
      this.fetchShow(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(['fetchShow', 'addShow', 'patchShow']),
    submitShow(){
      if (this.newShow.id) {
        console.log(this.newShow);
        this.patchShow(this.newShow);
      } else {
        this.newShow.author_id = this.user.id;
        this.addShow(this.newShow);
      }
    }
  }
};
</script>

<style lang="scss">
</style>
