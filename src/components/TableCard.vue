<template>
  <div class="card" v-for="table in tables" :key="table.country">
      <p>{{table.flag}}</p>
      <h1>{{table.country}}</h1>
      <p>{{table.soorten}}</p>
      <p>0/{{table.aantal}} wijnen</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tables: [
                { flag: 'italie', country: 'Italie', soorten: 'Wit, Rood, Rose', aantal: 10 },
                { flag: 'frankrijk', country: 'Frankrijk', soorten: 'Wit, Rose', aantal: 12 },
                { flag: 'chili', country: 'Chili', soorten: 'Rood, Rose', aantal: 8 },
                { flag: 'afrika', country: 'Afrika', soorten: 'Wit, Rood', aantal: 6 },
            ],
        }
    },

}
</script>

<style scoped>

    .card{
        display: block;
        border: 1px solid rgb(0,0,0,0.1);
        text-align: left;
        width: 150px;
        height: 184px;
        border-radius: 8px;
    }

    h1{
        font-size: 24px;
        padding: 10px;
        margin: 0;
    }

    p{
        font-family: 'Roboto', serif;
        font-size: 16px;
        padding: 10px;
        margin: 0;
    }
</style>