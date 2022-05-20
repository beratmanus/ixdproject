<template>
  <div class="hero"> 
    <img :src="hero" alt="">
    <button>Start de ervaring</button>
  </div>
</template>

<script>
// @ is an alias to /src
import hero from "../assets/hero.png"

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      hero: hero
    }
  },
  created() {
    document.body.style.backgroundColor = "#1d1d1d";
  },
}
</script>
<style scoped>
html, body{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.hero img{
   height: 320px;
   width: 320px !important;
}
button{
  width: 348px;
  height: 57px;
  background-color: #5E3333;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 10px;
  bottom: 66px;
}
  
</style>