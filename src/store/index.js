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
    register(context, payload) {
      const { fullname, email, password } = payload;
      fetch("https://heartstrings-api.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify({
          Fullname: fullname,
          Email: email,
          Password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (
            data.msg == "The provided email exists. Please enter another one"
          ) {
            alert("The provided email exists. Please enter another one");
          } else {
            alert("Registration Successful");
            context.commit("setToken", data.token);
            setTimeout(() => {
              router.push("/login"), 2508;
            });
          }
        });
    },
    login(context, payload) {
      const { fullname, email, password } = payload;
      fetch("https://heartstrings-api.herokuapp.com/users", {
        method: "PATCH",
        body: JSON.stringify({
          Fullname: fullname,
          Email: email,
          Password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg == "Email Not Found. Please register") {
            alert(data.msg);
          } else {
            if (data.msg == "Password is Incorrect") {
              alert(data.msg);
            } else {
              alert(`Welcome, ${data.user[0].Fullname}`);
              context.commit("setUser", data.user[0]);
              context.commit("setToken", data.token);
              context.dispatch("getUserCart");
              setTimeout(() => {
                router.push("/products"), 2508;
              });
            }
          }
        });
    },
  },
  modules: {},
});
