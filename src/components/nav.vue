<template>
  <nav>
      <div class="container">
        <div class="row left">
          <div class="col">
            <router-link to="/home">
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
        </div>
        <div class="row right">

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
      width: 10%;
    }
    
    .container-fluid {
      display: flex;
      justify-content: center;
    }
    
    .col {
      text-align: center;
      margin-left: 5vw;
      color: #B1E1FF;
      border: 1px solid blue;
      border-radius: 100%;
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
    
    .left{
      display: flex;
      flex-direction: column;
    }
    </style>