<template>
  <LandingNav></LandingNav>
</template>

<script>
import LandingNav from "../components/LandingNav";

export default {
  name: "NumberImput",
  components: {LandingNav},
  created() {
    document.body.style.backgroundColor = "#1d1d1d";
  }
}
</script>

<style scoped>

</style>