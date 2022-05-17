<template>
  <div id="body" :class="{changetolight: disabled}">

    <!--    nav-->
    <div>
      <ul>
        <li style="float:left"><a href="./src/views/Home.vue"><img src="./public/images/logo.png" alt="logo / home"></a></li>

        <li><a href="#"><img src="./public/images/qrscan.png" alt="qr scanning" height="20px"
                                             width="30px"></a></li>
        <li><a href="#"><img src="./public/images/shoppingbag.png" alt="basket" height="25px" width="25px"></a>
        </li>
      </ul>
    </div>

    <!--    content-->
    <a v-if="!disabled" class="terugnaarlijst" href="#">Terug naar lijst</a>
    <Transition name="swoosh">
      <div :class="{ swoosh: disabled }">
        <h1>Santa Tierra</h1>
      </div>
    </Transition>
    <div style="margin-left: 30px;" :class="{picture: disabled}">
      <img class="winepic" src="./public/images/santa_tierra.png" alt="dry red wine">
    </div>

    <div v-if="showinformation" id="detailsblok" :class="{slideup: disabled}">
      <h3 style="color: #1D1D1D">Details.</h3>
      <ul class="details">
        <li class="detail">Herkomst</li>
        <br>
        <li class="detail">Smaakpalet</li>
        <br>
        <li class="detail">Serveringssuggestie</li>
        <br>
      </ul>
    </div>


    <button v-if="!disabled" class="naardetails" @click="warnDisabled">Check details</button>
  </div>
</template>

<script>
export default {
  name: 'Scanned',
  components: {},
  data() {
    return {
      disabled: false,
      showinformation: false,
      changetolight: false
    }
  },
  methods: {
    warnDisabled() {
      this.disabled = true
      this.showinformation = true
      this.changetolight = true
    }
  }
}
</script>

<style>


.slideup{
  transition: slideup 1s ease-in;
}

@keyframes slideup {
  0%{
    transform: translateY(-50px);
    opacity: 0;
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

#detailsblok{
  text-align: center;
  position: absolute;
  top: 425px;
  left: 30%;
}

.details, h3 {
  text-align: center;
  display: block;
}

h3 {
  font-size: 48px;
  margin-bottom: 5px;
}

.detail{
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  padding: 5px;
  border-radius: 8px;
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}

ul {
  list-style-type: none;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  overflow: hidden;
  margin: 0;
}

ul:first-child {
  font-size: 20px;
  font-style: oblique;
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
}

body {
  margin: 0;
}

#body {
  height: 100vh;
  width: 390px;
}

.changetolight {
  animation: changetolight 1.5s ease forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes changetolight {
  50%, 60%, 70%, 80%, 90%, 100% {
    background-color: #DBC6B2;
  }
}

.swoosh {
  animation: swoosh 0.5s ease-in forwards;
  -webkit-animation-fill-mode: forwards;
}

.swoosh h1 {
  color: #2A0000;
}

@keyframes swoosh {
  50%, 60%, 70%, 80%, 90%, 100% {
    transform: translate(125px, 125px) rotate(90deg);
    opacity: 0.7;
  }
}

.picture {
  animation: picture 0.5s ease-in forwards;
  -webkit-animation-fill-mode: forwards;
}

@keyframes picture {
  50%, 60%, 70%, 80%, 90%, 100% {
    transform: translateY(-150px) scale(0.8);
  }
}

body {
  background-color: #1D1D1D;
  margin: 0;
}

.terugnaarlijst {
  color: grey;
  margin-left: 4vh;
}

h1 {
  color: darkgrey;
  font-size: 55px;
  text-align: center;
}

.winepic {
  height: 50vh;
  width: 40vh;
}

.naardetails {
  background-color: #5E3333;
  border-radius: 10px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  padding: 15px 25px;
  position: absolute;
  left: 11vh;
  top: 85vh;
}

</style>
