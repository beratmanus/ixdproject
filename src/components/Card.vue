<template>
  <div class="card" @click="this.$router.push('wijnen')">
    <p>flag</p>
    <h1>Italië</h1>
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

.card {  display: block;
  border: 1px solid #c0c0c0;
  padding: 10px;
  text-align: left;
  width: 164px;
  height: 184px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: #8c8c8c;
}
</style>