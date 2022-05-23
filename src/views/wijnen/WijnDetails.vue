<template>
  <img class="heading" id="back" :src="backfull" alt="back button" @click="this.$router.back()">
  <img class="heading" id="bg" :src="bg_img" alt="wijn background">
  <div class="titles">
    <img id="country" :src="itflag" alt="IT flag">
    <p>Italië</p>
    <h3>{{ regio }}</h3>
    <h1>{{ title }}</h1>
  </div>
  <div class="content">
    <hr>
    <div class="buttons">
      <button class="">Toevoegen aan lijst</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'details', 'img', 'bg_img', 'regio']
  ,
  data() {
    return {
      itflag: require("/public/images/IT.png"),
      backfull: require("/public/images/back_fullblack.png")
    }
  }
}
</script>

<style>
button {
  border-radius: 12px;
  padding: 18px;
}

hr {
  border: 0.5px rgba(222, 215, 215, 0.4) solid;
  width: 90%;
}

.heading {
  position: absolute;
  top: 0;
  left: 0;
}

#back {
  z-index: 3;
  margin-top: 50px;
  margin-left: 15px;
}

#bg {
  width: 100%;
  height: auto;
  z-index: 1;
}

#country {
  width: 10%;
  height: 10%;
  display: inline;
}

.titles {
  display: inline;
  float: start;
  text-align: left;
  position: fixed;
  top: 275px;
  left: 15px;
}

p {
  display: inline-block;
}

h3 {
  margin: 0;
  padding: 0;
  color: #8c8c8c;
  font-weight: normal;
}

h1 {
  margin: 0;
  padding: 0;
}

.content {
  top: 500px;
  margin-top: 425px;
}
</style>