<template>
  <nav>
    <div class="container">
      <div class="row left">
        <div class="col">
          <router-link to="/">
            <button type="button">
              Home
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
  border-bottom-left-radius: 5px;
  height: 50px;
  width: 100px;
  font-family: Rockwell;
  background-color: #8E3200;
  color: #FFEBC1;
}

button:hover {
  color: #8E3200;
  background-color: #D7A86E;
}

button:focus{
  color: #8E3200;
  background-color: #D7A86E;
}

a {
  font-family: Rockwell;
  text-decoration: none;
  color: #B1E1FF;
  font-size: 20px;
  /* text-decoration: underline; */
}

a:hover {
  text-decoration: line-through;
}

.left {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 299px) and (max-width: px) {

}
</style>