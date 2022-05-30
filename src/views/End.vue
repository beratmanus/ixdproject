<template>
  <img :src="end" alt="">
</template>

<script>
export default {
    data() {
        return {
            end: require('/public/images/end.png')
        }
    },
    created() {
        document.body.style.background = '#ffffff';
    }
}
</script>

<style scoped>
    img{
        width: 100%;
    }
</style>