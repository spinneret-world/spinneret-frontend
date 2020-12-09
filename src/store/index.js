import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    user: null,
    posts: []
  },
  getters: {
    user: state => state.user,
    posts: state => state.posts
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    // Auth
    register({ commit }, payload) {
      axios.post(`${API}/register`, payload).then(
        response => {
          commit('setUser', response.user);
        },
        error => {
          console.log(error);
        }
      );
    },
    login({ commit }, payload) {
      axios.post(`${API}/login`, payload).then(
        response => {
          commit('setUser', response.user);
        },
        error => {
          console.log(error);
        }
      );
    },

    // Posts
    fetchPosts({ commit }) {
      axios.get(`${API}/posts`).then(
        response => {
          commit('setPosts', response.posts);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  modules: {}
});
