import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    user: null,
    albums: null,
    album: null,
    cart: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setAlbums(state, albums) {
      state.albums = albums;
    },
    setAlbum(state, album) {
      state.album = album;
    },
    setUserCart(state, cart) {
      state.cart = cart;
    },
  },
  actions: {
    async getUsers(context) {
      let fetched = await fetch("https://heartstrings-api.herokuapp.com/users");
      let res = await fetched.json();
      context.commit("setUsers", res.users);
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
      context.commit("setAlbum", res.album);
    },
    updateAlbum(context, payload) {
      fetch('https://heartstrings-api.herokuapp.com/albums/' + payload.id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      })
    },
    deleteAlbum(context, id){
      fetch('https://heartstrings-api.herokuapp.com/albums/' + id, {
        method: 'DELETE'
      })
      .then((res)=> res.json())
      .then((data)=>{
        swal({
          icon: 'success',
          title: 'Weapon Deleted',
          timer: 1000
        })
        context.dispatch('getAlbums')
      })
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
          if (data.msg === "Email Not Found") {
            alert(data.msg);
          } else if (data.msg === "Password is Incorrect") {
            alert(data.msg);
          } else {
            alert("You are now loged in");
            context.commit("setUser", data.user[0]);
            context.dispatch("getUserCart");
          }
        });
    },
    async getUserCart(context) {
      let fetched = await fetch(
        "https://heartstrings-api.herokuapp.com/users/" +
          context.state.user.userID +
          "/cart"
      );
      let res = await fetched.json();
      context.commit("setUserCart", res.cart);
    },

    addCart(context, payload) {
      fetch(
        "https://heartstrings-api.herokuapp.com/users/" +
          context.state.user.userID +
          "/cart",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results == "There is no user with that id") {
            alert(data.results);
          } else {
            alert("Item Added");
            context.dispatch("getUserCart");
          }
        });
    },
    deleteCart(context) {
      fetch(
        "https://heartstrings-api.herokuapp.com/users/" +
          context.state.user.userID +
          "/cart",
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result == "There is no user with that ID") {
            alert(data.result);
          } else {
            alert("Cart Deleted");
            context.dispatch("getUserCart");
          }
        });
    },
    deleteSingleCart(context) {
      fetch(
        "https://heartstrings-api.herokuapp.com/users/" +
          context.state.user.userID + "/cart/" + context.state.cart.cartId,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result == "There is no user with that ID") {
            alert(data.result);
          } else {
            alert("Item Removed from cart");
            context.dispatch("getUserCart");
          }
        });
    },
  },
  modules: {},
});
