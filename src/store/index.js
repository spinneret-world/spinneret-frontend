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
    product: null,
    products: [],
    show: null,
    shows: []
  },
  getters: {
    user: state => state.user,
    users: state => state.users,
    userToken: state => state.userToken,
    post: state => state.post,
    posts: state => state.posts,
    product: state => state.product,
    products: state => state.products,
    show: state => state.show,
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
      Vue.$cookies.set('jwt', token);
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPost(state, post) {
      state.post = post;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setShows(state, shows) {
      state.shows = shows;
    },
    setShow(state, show) {
      state.show = show;
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
    login({ commit, dispatch }, payload) {
      axios.post(`${API}/login`, payload).then(
        response => {
          commit('setUserToken', response.data.token);
          dispatch('fetchUser')
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchUser({ commit, state }) {
      axios.get(`${API}/profile`, 
        { headers:  { Authorization: `bearer ${state.userToken}`}}
      ).then(
        response => {
          commit('setUser', response.data.user);
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
    patchPost({ commit }, post) {
      axios.patch(`${API}/posts/${post.id}`, post).then(
        response => {
          commit('setPost', response.data.post);
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
          commit('setShows', response.data.shows);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchShow({ commit }, id) {
      axios.get(`${API}/shows/${id}`).then(
        response => {
          console.log(response.data.show);
          commit('setShow', response.data.show);
        },
        error => {
          console.log("Error fetching show");
          console.log(error);
        }
      );
    },
    addShow({ commit }, show) {
      axios.post(`${API}/shows`, show).then(
        response => {
          commit('setShow', response.data.show);
          router.push(`/admin/experiences/edit/${response.data.show.id}`);
        },
        error => {
          console.log(error);
        }
      );
    },
    patchShow({ commit }, show) {
      axios.patch(`${API}/shows/${show.id}`, show).then(
        response => {
          commit('setShow', response.data.show);
        },
        error => {
          console.log(error);
        }
      );
    },

    // Products
    fetchProducts({ commit }) {
      axios.get(`${API}/products`).then(
        response => {
          commit('setProducts', response.data.products);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetchProduct({ commit }, id) {
      axios.get(`${API}/products/${id}`).then(
        response => {
          console.log(response.data.product);
          commit('setProduct', response.data.product);
        },
        error => {
          console.log("Error fetching product");
          console.log(error);
        }
      );
    },
    addProduct({ commit }, product) {
      axios.post(`${API}/products`, product).then(
        response => {
          commit('setProduct', response.data.product);
          router.push(`/admin/products/edit/${response.data.product.id}`);
        },
        error => {
          console.log(error);
        }
      );
    },
    patchProduct({ commit }, product) {
      axios.patch(`${API}/products/${product.id}`, product).then(
        response => {
          commit('setProduct', response.data.product);
        },
        error => {
          console.log(error);
        }
      );
    },
  },
  modules: {}
});
