<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button class="open" @click="open = true">Toevoegen aan lijst</button>

  <div v-if="open" class="modal">
    <p>Toegevoegd aan verlanglijstje!</p>
    <button class="close" @click="open = false">Close</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 70%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: #ffffff;
}
.open{
      border-radius: 12px;
  padding: 20px;
  background-color: #5E3333;
  color: white;
  width: 90%;
  height: 65px;
  font-size: larger;
  margin-top: 35px;
  margin-bottom: 35px;
}
button {
    margin-bottom: 10px;
}
</style>