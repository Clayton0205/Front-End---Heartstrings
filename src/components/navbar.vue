<template>
  <nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <router-link to="/">
            <button type="button">
              <i class="bi bi-house-door-fill"></i>
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/albums">
            <button type="button">
              Albums
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/register">
            <button type="button">
              Register
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="login">
            <button type="button">
              Login
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/cart">
            <button type="button">
              Cart
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/account">
            <button type="button">
              Account
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/admin">
            <button type="button">
              Admin
            </button>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/about">
            <button type="button">
              About
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100px;
}
.row {
  position: absolute;
}
.col {
  margin-bottom: 10px;
}
button {
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 35px;
  width: 40px;
  font-family: Futara;
  background-color: white;
  color: black;
}
button:hover {
  color: white;
  background-color: black;
}
button:focus{
  color: white;
  background-color: black;
}
a {
  font-family: Futara;
  text-decoration: none;
  color: #B1E1FF;
  font-size: 10px;
}
a:hover {
  text-decoration: line-through;
}

</style>