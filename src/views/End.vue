<template>
  <div class="hero">
    <img :src="end" alt="">
    <p>Dankjewel om deel te nemen aan ons event. <br>
      Tot een volgende keer!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      end: require('/public/images/undraw_fireworks_re_2xi7 1.png')
    }
  },
  created() {
    document.body.style.background = '#f5f5f5';
  }
}
</script>

<style scoped>

.hero{
  margin-top: 150px;
}
.hero img {
  width: 80%;
}

.hero p{
  font-size: larger;
  color: #858585;
  font-family: gill-sans-nova, sans-serif;
  font-weight: 600;
  margin-left: 25px;
  margin-right: 25px;
}
.hero h2{
  margin: 0;
  padding-bottom: 10px;
  font-family: gill-sans-nova, sans-serif;
}

</style>