import { createStore } from "vuex";
import Swal from 'sweetalert2/dist/sweetalert2.js'

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
   addAlbum(context, payload) {
      const { musictype, album, image, description, artist, year, price, creatorID} = payload;
      fetch("https://heartstrings-api.herokuapp.com/albums", {
        method: "POST",
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
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.msg === Swal.fire({
          icon: 'error',
          title: 'Value is Wrong',
          text: 'Year, Price and CreatorID must be numbers'
        })) {
          alert(data.msg);
        } else Swal.fire(
          'Album added successfully'
        );
        context.commit("setAlbums", album);
        context.dispatch("getAlbums");
      });
  
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
            data.msg == Swal.fire({
              icon: 'error',
              title: 'The provided email exists. Please enter another one'
            })
          ) {
            alert(Swal.fire({
              icon: 'error',
              title: 'The provided email exists. Please enter another one',
            }));
          } else {
            Swal.fire({
              icon:'success',
              title: 'Registration successfully'
            }
            );
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
          if (
            data.msg == Swal.fire({
              icon: 'error',
              title: 'User Does Not Exist',
              title: 'or your Credentials are wrong'
            })
          ) {
            alert(Swal.fire({
              icon: 'error',
              title: 'User Does Not Exist',
              title: 'or your Credentials are wrong'
            }));
          } else {
            Swal.fire({
              icon:'success',
              title: 'Login successful'
            }
            );
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
          if (data.msg === Swal.fire({
            icon: 'error',
            title: 'User Not Found'
          })) {
            alert(data.msg);
          } else Swal.fire(
            'Album added successfully'
          )
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
          if (data.msg === Swal.fire({
            icon: 'error',
            title: 'Value is Wrong',
            text: 'Year, Price and CreatorID must be numbers'
          })) {
            alert(data.msg);
          } else Swal.fire(
            'Your Cart Has been cleared'
          )
        });
    },
  },
  modules: {},
});
