<template>
  <img class="heading" id="back" :src="backfull" alt="back button" @click="this.$router.back()">
  <img class="heading" id="bg" :src="bg_img" alt="wijn background">
  <div class="titles">
    <img id="country" :src="itflag" alt="IT flag">
    <p class="details_titles_p">Italië</p>
    <h3 class="details_h3">{{ regio }}</h3>
    <h1 class="details_h1">{{ title }}</h1>
  </div>
  <div class="content">
    <hr class="details_hr">
    <h2 class="details_tussentitels">Herkomst</h2>
    <p class="details_p">{{details}}</p>
    <h2 class="details_tussentitels">Smaken</h2>
    <p class="details_p">{{details}}</p>
    <h2 class="details_tussentitels">In combinatie met</h2>
    <p class="details_p">{{details}}</p>
    <h2 class="details_tussentitels">Te serveren temperatuur</h2>
    <p class="details_p">{{details}}</p>
  </div>
  <MyModal />
  
  
</template>

<script>
import MyModal from "@/components/MyModal.vue"
export default {
  props: ['id', 'title', 'details', 'img', 'bg_img', 'regio']
  ,
  components:{
MyModal
  },
  data() {
    return {
      itflag: require("/public/images/IT.png"),
      backfull: require("/public/images/back_fullblack.png")
    }
  },
  methods: {
      
    }
  }

</script>

<style>
.details_button {
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

.details_tussentitels{
  padding: 0;
  margin: 25px 0 0;
}

.details_p{
  margin: 0;
  color: #939393;
  font-weight: lighter;
}


.details_hr {
  border: 0.5px rgba(222, 215, 215, 0.4) solid;
  width: 90%;
}

.heading {
  position: absolute;
  top: 0;
  left: 0;
}

#back {
  z-index: 3;
  margin-top: 50px;
  margin-left: 15px;
}

#bg {
  width: 100%;
  height: auto;
  z-index: 1;
}

#country {
  width: 10%;
  height: 10%;
  display: inline;
}

.titles {
  display: inline;
  float: start;
  text-align: left;
  position: absolute;
  top: 275px;
  left: 15px;
}

.details_titles_p {
  display: inline-block;
}

.details_h3 {
  margin: 0;
  padding: 0;
  color: #8c8c8c;
  font-weight: normal;
}

.details_h1 {
  margin: 0;
  padding: 0;
}

.content {
  top: 500px;
  margin-left: 15px;
  margin-top: 425px;
  text-align: left;
}
</style>