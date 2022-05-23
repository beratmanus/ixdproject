<template>
  <!--  <h1>Job Detailspage</h1>
    <p>The job id {{id}}</p>-->
  <img :src="bg" alt="wijn background">
  <img :src="itflag" alt="IT flag">
  <h3>Italië</h3>
  <h2>{{ regio }}</h2>
  <h1>{{ title }}</h1>
  <div class="buttons">
    <button class="">Toevoegen aan lijst</button>
    <button class="details">Bekijk details</button>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'details', 'img', 'bg_img', 'regio']
  ,
  data() {
    return{
      itflag: require("/public/images/IT.png"),
    }
  }
}
</script>

<style>
button {
  border-radius: 12px;
  padding: 18px;
}
</style>