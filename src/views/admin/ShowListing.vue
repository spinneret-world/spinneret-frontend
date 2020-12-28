<template>
  <div>
    <div>
      Experiences
    </div>
    <router-link to="/admin/experiences/add">
      <button>Add Experience</button>
    </router-link>
    <div v-for="show in shows" :key="show.id">
      <ul>
        <li>{{ show.name }}<router-link :to="'/admin/experiences/edit/'+show.id"><button type="button">Edit</button></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "AdminExperiences",
  components: {
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['shows'])
  },
  mounted() {
    this.fetchShows();
  },
  methods: {
    ...mapActions(['fetchShows'])
  }
};
</script>

<style lang="scss">
</style>
