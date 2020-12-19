<template>
  <div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "ShowListing",
  components: {
  },
  mounted() {
    this.fetchShows();
  },
  computed: {
    ...mapGetters(['shows'])
  },
  methods: {
    ...mapActions(['fetchShows'])
  }
};
</script>
