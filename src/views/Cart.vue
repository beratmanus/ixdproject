<template>
  <div class="wijnen_heading">
    <img id="backbutton" class="wijnen_heading_inhoud" :src="backstroke" alt="" @click="$router.go(-1)">
    <h1 id="wijnen_heading_h1" class="wijnen_heading_inhoud">Verlanglijst</h1>
  </div>
  <div v-for="wijn in wijnen" :key="wijn.id" class="job">
    <router-link id="routerlink"
                 :to="{ name: 'WijnDetails', params: { id: wijn.id, title: wijn.title, details: wijn.details, img: wijn.img, bg_img: wijn.bg, regio: wijn.regio,
                                                        temp: wijn.temp, herkomst: wijn.herkomst, smaken: wijn.smaken, combo: wijn.combo} }">
      <img class="wijnen_img" :src="wijn.img" alt="">
      <div>
        <p>{{ wijn.regio }}</p>
        <h2>{{ wijn.title }}</h2>
        <div><img :src="wijn.flag" alt=""><p>{{wijn.land}}</p> </div>
      </div>
      <div class="id">
      {{ wijn.id }}
      </div>
      <div class="amount">
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"/></svg>
         <p>2</p>
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/></svg>
      </div>
    </router-link>
    
  </div>
  
</template>

<script>



export default {
  
  data() {
    return {
      wijnen: [
        {
          title: 'Fontanella',
          id: 1,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/fontanella.png',
          regio: "Orvieto, Umbrie",
          temp: "12.5°C",
          bg: require('/public/images/fontanella_bg.jpg'),
          flag: require( '/public/images/IT.png'),  
          land: "Italie"
        },
        {
          title: 'Les Florets',
          id: 2,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/panizzi.png',
          regio: "Rhone, Luberon",
          temp: "7-12°C",
          bg: require('/public/images/panizzi_bg.jpg'),
          flag: require( '/public/images/FR.png'),
          land: "Frankrijk"
        },
        {
          title: 'Baie Cap',
          id: 3,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/tradonnesole.png',
          regio: "Robetson",
          temp: "10°C",
          bg: require('/public/images/tradonnesole_bg.jpg'),
          flag: require( '/public/images/SA.png'),
          land: "Zuid-Afrika"
        }]
      ,
      ITflag: require("/public/images/IT.png"),
      backstroke: require("/public/images/back_stroke.png"),
      shoppingbag: require("/public/images/fluent_shopping-bag-24-filled.png")
    }
  },
  created() {
    document.body.style.backgroundColor = "#f5f5f5";
  },
}
</script>

<style scoped>
.id{
  display: inline-block;
}
.wijnen_heading {
  background-color: white;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: #8c8c8c;
  height: 85px;
  padding: 25px;
  border: 1px solid #c0c0c0;
  text-align: left;
  font-family: gill-sans-nova, sans-serif;
}

.wijnen_heading_inhoud {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

#backbutton {
    position: absolute;
  width: 10.5%;
  margin-top: 40px;
  margin-right: 80px;
}


img{
    width: 20px;
}


body {
  display: inline;
  align-items: normal !important;
}

.job {
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  margin: 25px auto 10px;
  font-family: gill-sans-nova, sans-serif;

}

.job h2, p {
  color: #444;
  margin: 6px;
}

.job a {
  text-decoration: none;
}

.wijnen_img {
  width: 120px;
  height: 130px;
}

.job a {
  display: flex;
  text-decoration: none;
  color: #444;
}

.id {
  position: absolute;
  right: 20px;
}

.temp {
  width: 15px;
  padding-right: 5px;
}

p{
  display: inline-block;
}

#routerlink{
  position: relative;
}

.amount{
    position: absolute;
    top: 90px;
    right: 20px;
}
.amount p {
    margin: 20px;
    font-size: 20px;
}

</style>