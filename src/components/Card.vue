<template>
  <div class="card" @click="this.$router.push('wijnen')">
      <p>flag</p>
      <h1>Italie</h1>
      <p>Wit, rood, rose</p>
      <p>0/10 wijnen</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            flag: '',
            
        }
    },

}
</script>

<style scoped>

    .card{
        display: block;
        border: 1px solid rgb(0,0,0,0.1);
        padding: 10px;
        text-align: left;
        width: 164px;
        height: 184px;
        margin: 10px;
        border-radius: 8px;
    }
</style>