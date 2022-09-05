<template>
  <nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <router-link to="/albums">Albums</router-link>
        </div>
        <div class="col">
          |
        </div>
        <div class="col">
          <router-link to="/">Home</router-link>
        </div>
        <div class="col">
          |
        </div>
        <div class="col">
          <router-link to="/register">Register</router-link>
        </div>
        <div class="col">
          |
        </div>
        <div class="col">
          <router-link to="/login">Login
          </router-link>
        </div>
        <div class="col">
          |
        </div>
        <div class="col">
          <router-link to="/cart">Cart
          </router-link>
        </div>
        <div class="col">
          |
        </div>
        <div class="col">
          <router-link to="/about">About</router-link>
        </div>
        <div class="col">
          |
        </div>
        <div class="col">
          <router-link to="/account">Account</router-link>
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
    
    nav {
      background-color: #A66CFF;
    }
    
    .container-fluid {
      display: flex;
      justify-content: center;
    }
    
    .col {
      text-align: center;
      margin-left: 5vw;
      color: #B1E1FF;
    }
    
    a {
      font-family: Rockwell;
      text-decoration: none;
      color: #B1E1FF;
      font-size: 1vw;
      /* text-decoration: underline; */
    }
    
    a:hover {
      text-decoration: line-through;
    }
    
    </style>