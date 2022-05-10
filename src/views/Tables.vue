<template>
  <div class="about">
    <p><span>#032</span> sessiecode</p>
    <div>
      <h1>Welkom, Dries</h1>
      <p>Start jouw ervaring <br> bij tafel naar keuze</p>
    </div>
    <div class="table">
    <Card />
    <Card />
    </div>
    <div class="table">
    <Card />
    <Card />
    </div>
  </div>
</template>
<script>
import Card from "../components/Card.vue"
export default {
  components: {
    Card
  }
}
</script>
<style scoped>
  body{
    background-color:#fff;
    margin: 20px;
  }
  h1, p{
    text-align: left;
  }
  .table{
    display: flex;
    justify-content: space-between;
    
    
  }
</style>