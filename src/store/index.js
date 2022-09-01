import { createStore } from "vuex";

export default createStore({
  state: {
    albums: null,
    album: null,
    user: null,
    cart: null,
    users: null,
    total: 0
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
    setTotal(state, total){
      state.total = total
    }
  },
  actions: {
    async getUsers(context){
      let fetched = await fetch ('https://heartstrings-api.herokuapp.com/users');
      let res = await fetched.json();
      context.commit('setUsers', res.users)
    },
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
              // context.commit("setToken", data.token);
              context.dispatch("getUserCart");
            }
          }
        });
    },
    async getUserCart(context){
      let fetched = await fetch('https://heartstrings-api.herokuapp.com/users/' + context.state.user.userID + '/cart');
      let res = await fetched.json();
      context.commit('setUserCart', res.cart)
    },
    addCart(context, payload){
      const {musictype, album, image, description, artist, year, price, creatorID} = payload
      fetch('https://heartstrings-api.herokuapp.com/users/' + context.state.user.userID + '/cart', {
      method: 'POST',
      body: JSON.stringify({
        musictype: musictype,
        album: album,
        image: image,
        description: description,
        artist: artist,
        year: year,
        price: price,
        creatorID: creatorID
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.results == 'There is no user with that id') {
            alert(data.results)
          } else {
            alert('Item Added')
            context.dispatch('getUserCart')
          }
    })
  },
  // getTotalCart(context){
  //   let total = 0;
  //   toRaw(context.state.cart).forEach(album => {
  //     total = total + album.price
  //   });
  //   context.commit('setTotal', total)
  // }
  },
  modules: {},
});
