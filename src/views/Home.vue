
<template>
  <LandingNav></LandingNav>
  <div class="hero">
    <img :src="hero" alt="">
    <router-link :to="{name: 'Number'} ">
      <button>Start de ervaring</button>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import hero from "../assets/hero.png"
import LandingNav from "../components/LandingNav";

export default {
  name: 'Home',
  components: {
    LandingNav
  },
  data() {
    return {
      hero: hero,
      scanani: false,
      disables: false
    }
  },
  created() {
    document.body.style.backgroundColor = "#1d1d1d";
  },
  methods: {
    enableani(){
      this.scanqrbutton_click = true
      this.disabled = true
    }
  },
  computed: {
    buttonstyle() {
      return {
        backgroundColor: "#ffffff"
      }
    }
  }
}
</script>
<style scoped>
html, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.hero img {
  height: 320px;
  width: 320px !important;
  margin-top: 75px;
}

button {
  width: 348px;
  height: 57px;
  background-color: #5E3333;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 10px;
  bottom: 66px;
  border-radius: 12px;
}

</style>