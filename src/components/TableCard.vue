<template>
  <div class="card" v-for="table in tables" :key="table.country">
    <img :src="table.flag" alt="">
    <h1>{{ table.country }}</h1>
    <p>{{ table.soorten }}</p>
    <p>0/{{ table.aantal }} wijnen</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: [
        {flag: "/images/IT.png", country: 'Italië', soorten: 'Wit, Rood, Rosé', aantal: 10},
        {flag: '/images/FR.png', country: 'Frankrijk', soorten: 'Wit, Rosé', aantal: 12},
        {flag: '/images/CH.png', country: 'Chili', soorten: 'Rood, Rosé', aantal: 8},
        {flag: '/images/SA.png', country: 'Afrika', soorten: 'Wit, Rood', aantal: 6},
      ],

    }
  },

}
</script>

<style scoped>

.card {
  display: block;
  border: 1px solid rgb(0, 0, 0, 0.1);
  text-align: left;
  width: 165px;
  height: 184px;
  border-radius: 8px;
  background-color: white;
}

h1 {
  font-size: 24px;
  padding: 5px 25px;
  margin: 0;
}

p {
  font-family: 'Roboto', serif;
  font-size: 16px;
  padding: 10px 25px;
  margin: 0;
  display: block;
  width: 115px;
}

img {
  padding-top: 10px;
  margin: 4px 10px;
  width: 20px;
  height: 20px;
}
</style>