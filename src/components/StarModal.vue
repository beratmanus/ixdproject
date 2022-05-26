<script setup>
import {ref} from 'vue'

const open = ref(false)

</script>

<template>
  <img :src="star" alt="favorite" class="open" @click="open = true">

  <div v-if="open" class="modal">
    <h4>👍</h4>
    <p>Toegevoegd aan verlanglijstje!</p>
    <button class="close" @click="open = false">Oké!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      star: require("/public/images/bxs_star_Grey.svg")
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 70%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: #ffffff;
  height: 175px;
  border-radius: 25px;
  box-shadow: #8c8c8c;
  border: 1px solid #c0c0c0;
}

.modal p{
  padding: 0 25px 0 30px;
}
h4{
  padding-top: 25px;
  margin-left: 46%;
  margin-top: 0;
}

.open {
  display: inline-block;
  z-index: 3;
  position: relative;
  left: 335px;
  font-size: larger;
}

img{
  top: -40px;
}

button {
  margin-left: 32%;
  background-color: #5E3333;
  color: white;
  width: 100px;
}

</style>