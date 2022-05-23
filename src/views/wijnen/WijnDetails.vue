<template>
  <img :src="backfull" alt="back button" @click="this.$router.back()">
  <img id="bg" :src="bg_img" alt="wijn background">
  <div class="titles">
    <img id="country" :src="itflag" alt="IT flag">
    <h3>Italië</h3>
    <h2>{{ regio }}</h2>
    <h1>{{ title }}</h1>
  </div>
  <div class="buttons">
    <button class="">Toevoegen aan lijst</button>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'details', 'img', 'bg_img', 'regio']
  ,
  data() {
    return{
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
#bg{
  width: 100%;
  height: auto;
}
#country{
  width: 5%;
  height: 5%;
  display: inline;
}
.titles{
  display: inline;
  float: start;
  text-align: left;
}
h3{
display: inline-block;
}
</style>