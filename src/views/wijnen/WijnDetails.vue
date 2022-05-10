<template>
  <h1>Job Detailspage</h1>
  <p>The job id {{id}}</p>
  <h1>{{title}}</h1>
  <img :src="img" alt="">
  <div class="buttons">
    <button class="">Toevoegen aan lijst</button>
    <button class="details">Bekijk details</button>
  </div>
</template>

<script>
export default {
    props: ['id','title','details', 'img']

}
</script>

<style>
  button{
    border-radius: 12px;
    padding: 18px;
  }
</style>