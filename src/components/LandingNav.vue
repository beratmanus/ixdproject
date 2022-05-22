<template>
<div class="nav-bar">
  <img :src="logo" alt="logo">
</div>
</template>

<script>
export default {
  name: "LandingNav",
  data() {
    return {
      logo: require("/public/images/logo.png")
    }
  }
}
</script>

<style scoped>
.nav-bar{
  width: fit-content;
  float: left;
  margin: 25px;
  padding-top: 35px;
}
img{
  right: 1px;
}
</style>