import { createStore } from "vuex";

export default createStore({
  state: {
    albums: null,
    album: null,
    user: null,
    cart: null,
    users: null,
  },
  getters: {},
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums;
    },
    setUser(state, user) {
      state.user = user;
    },
    setAlbum(state, album) {
      state.album = album;
    },
    setUserCart(state, cart) {
      state.cart = cart;
    },
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getAlbums(context) {
      let fetched = await fetch(
        "https://heartstrings-api.herokuapp.com/albums"
      );
      let res = await fetched.json();
      context.commit("setAlbums", res.album);
    },

    async getAlbum(context, id) {
      let fetched = await fetch(
        "https://heartstrings-api.herokuapp.com/albums/" + id
      );
      let res = await fetched.json();
      console.log(res);
      context.commit("setAlbum", res.album);
    },
  },
  modules: {},
});
