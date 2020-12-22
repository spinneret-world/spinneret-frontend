import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from '../router'

Vue.use(Vuex);

const API = "http://localhost:3000";

export default new Vuex.Store({
  state: {
    user: null,
    userToken: null,
    users: [],
    post: null,
    posts: [],
    shows: []
  },
  getters: {
    user: state => state.user,
    users: state => state.users,
    userToken: state => state.userToken,
    post: state => state.post,
    posts: state => state.posts,
    shows: state => state.shows
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUserToken(state, token) {
      state.userToken = token;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
    setShows(state, shows) {
      state.shows = shows;
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
          console.log(response);
          commit('setUserToken', response.data.token);
        },
        error => {
          console.log(error);
        }
      );
    },

    // Users
    fetchUsers({ commit }) {
      axios.get(`${API}/users`).then(
        response => {
          console.log(response);
          commit('setUsers', response.data.users);
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
          commit('setPosts', response.data.posts);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchPost({ commit }, id) {
      axios.get(`${API}/posts/${id}`).then(
        response => {
          console.log(response.data.post);
          commit('setPost', response.data.post);
        },
        error => {
          console.log("Error fetching post");
          console.log(error);
        }
      );
    },
    addPost({ commit }, post) {
      axios.post(`${API}/posts`, post).then(
        response => {
          commit('setPost', response.data.post);
          router.push(`/admin/blog/edit/${response.data.post.id}`);
        },
        error => {
          console.log(error);
        }
      );
    },

    // Shows
    fetchShows({ commit }) {
      axios.get(`${API}/shows`).then(
        response => {
          commit('setShows', response.shows);
        },
        error => {
          console.log(error);
        }
      );
    }
  },
  modules: {}
});
