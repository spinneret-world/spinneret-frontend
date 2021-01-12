<template>
  <div if="newSettings">
    <div>
      Settings
    </div>
    <label> Experience Mode
      <input type="checkbox" v-model="newSettings.experience_mode" />
    </label>
    <button type="button" @click="submitSettings">Save</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Settings",
  components: {
  },
  data() {
    return {
      newSettings: {
        experience_mode: false
      }    
    }
  },
  watch: {
    'settings': function(){
      this.newSettings = this.settings;
    }
  },
  computed: {
    ...mapGetters(["settings"])
  },
  mounted() {
  },
  methods: {
    ...mapActions(["addSettings"]),
    submitSettings(){
      this.addSettings(this.newSettings);
    }
  }
};
</script>

<style lang="scss">
</style>
