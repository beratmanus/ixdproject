<template>
  <img class="bevestiging" :src="bevestiging" alt="">
  <div v-for="wijn in wijnen" :key="wijn.id" class="job">
    <router-link id="routerlink"
                 :to="{ name: 'WijnDetails', params: { id: wijn.id, title: wijn.title, details: wijn.details, img: wijn.img, bg_img: wijn.bg, regio: wijn.regio,
                                                        temp: wijn.temp, herkomst: wijn.herkomst, smaken: wijn.smaken, combo: wijn.combo} }">
      <img class="wijnen_img" :src="wijn.img" alt="">
      <div>
        <p>{{ wijn.regio }}</p>
        <h2>{{ wijn.title }}</h2>
      </div>
      <div class="id">
      {{ wijn.id }} flessen
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
          id: 2,
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
          id: 2,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/tradonnesole.png',
          regio: "Robetson",
          temp: "10°C",
          bg: require('/public/images/tradonnesole_bg.jpg'),
          flag: require( '/public/images/SA.png'),
          land: "Zuid-Afrika"
        }]
      ,
      
      bevestiging: require("/public/images/bevestiging.png")
    }
  },
  created() {
    document.body.style.backgroundColor = "#ffffff";
  },
}
</script>

<style scoped>
.id{
  display: inline-block;
  color: #892E2E;
  font-weight: 600;
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
  width: 12%;
  margin-top: 40px;
  margin-right: 80px;
}


.flag{
  width: 20px;
}

.bevestiging{
  width: 280px;
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
  width: 54px;
  height: 54px;
  margin-top: 14px;
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