<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chivo:wght@300&family=Lora&family=Montserrat:wght@300;500&display=swap');
#app {

  font-family: 'Montserrat','Chivo','Lora' sans-serif;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

body {
 font-family: 'Chivo', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
 font-family: 'Montserrat', sans-serif;
 font-weight: 300;
 text-transform: uppercase;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
