<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Tables'}">Tables</router-link> |
    <router-link :to="{ name: 'Wijnen'}">Wijnen</router-link>
    
    
  </div> -->
  
  <router-view />
</template>

<script>

export default {
  methods: {
    redirect() {
      this.$router.push({name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
#app {
  font-family: 'Rozha One', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}

body{
  margin: 0px;
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

button{
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
