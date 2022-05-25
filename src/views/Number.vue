<template>
  <LandingNav></LandingNav>
  <div class="session">
    <h1>#0</h1>
    <input required v-model="sessioncode" placeholder=""/>
  </div>
  <router-link :to="{name: 'Tables'} ">
    <button>Start de ervaring</button>
  </router-link>
</template>

<script>
// @ is an alias to /src
import LandingNav from "../components/LandingNav";

export default {
  name: 'Home',
  components: {
    LandingNav
  },
  data() {
    return {
      sessioncode: ''
    }
  },
  created() {
    document.body.style.backgroundColor = "#1d1d1d";
  },
}
</script>
<style scoped>

html, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

h1 {
  margin: 0;
  font-size: 2em;
}

.session {
  display: flex;
  position: absolute;
  margin-top: 248px;
  margin-left: 118px;
  color: #ABABAB;

}

input {
  background: #1d1d1d;
  border: 1px solid #1d1d1d;
  font-size: 2em;
  width: 100px;
  color: #ABABAB;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #ABABAB;
  font-family: 'Rhoza one', serif;
  font-weight: bold;
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