<template>
  <div class="wijnen_heading">
    <img id="backbutton" class="wijnen_heading_inhoud" :src="backstroke" alt="" @click="$router.go(-1)">
    <h1 id="wijnen_heading_h1" class="wijnen_heading_inhoud"></h1>
  </div>
  <div class="hero">
    <img class="bevestiging" :src="bevestiging" alt="">
    <p>Dankjewel om deel te nemen aan ons event, je mag je bestelling afhalen aan stand:</p>
    <h2>E5</h2>
  </div>
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
    <hr>

  </div>
  <router-link :to="{name: 'End'} ">
    <button>Beëindigen
      <svg style="padding-left: 5px" width="20" height="21" viewBox="0 0 20 21" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.6377 9.4745H8.701C8.58609 9.4745 8.47231 9.49713 8.36615 9.54111C8.25999 9.58508 8.16353 9.64953 8.08228 9.73078C8.00103 9.81203 7.93657 9.90849 7.8926 10.0147C7.84863 10.1208 7.826 10.2346 7.826 10.3495C7.826 10.4644 7.84863 10.5782 7.8926 10.6843C7.93657 10.7905 8.00103 10.887 8.08228 10.9682C8.16353 11.0495 8.25999 11.1139 8.36615 11.1579C8.47231 11.2019 8.58609 11.2245 8.701 11.2245H13.6377L12.656 12.2063C12.4919 12.3704 12.3998 12.5931 12.3999 12.8252C12.4 13.0573 12.4922 13.2799 12.6564 13.4439C12.8206 13.608 13.0433 13.7001 13.2754 13.7001C13.5075 13.7 13.7301 13.6077 13.8941 13.4435L16.3686 10.969C16.4503 10.8879 16.5151 10.7915 16.5593 10.6852C16.6036 10.579 16.6263 10.465 16.6263 10.3499C16.6263 10.2349 16.6036 10.1209 16.5593 10.0147C16.5151 9.90841 16.4503 9.81196 16.3686 9.73088L13.895 7.25638C13.7309 7.09219 13.5084 6.9999 13.2762 6.99982C13.0441 6.99974 12.8215 7.09187 12.6573 7.25594C12.4931 7.42001 12.4008 7.64258 12.4008 7.87469C12.4007 8.1068 12.4928 8.32944 12.6569 8.49362L13.6377 9.4745ZM5.25 2.625C5.01793 2.625 4.79537 2.71719 4.63128 2.88128C4.46718 3.04538 4.375 3.26794 4.375 3.5V17.5C4.375 17.7321 4.46718 17.9546 4.63128 18.1187C4.79537 18.2828 5.01793 18.375 5.25 18.375C5.48206 18.375 5.70462 18.2828 5.86871 18.1187C6.03281 17.9546 6.125 17.7321 6.125 17.5V3.5C6.125 3.26794 6.03281 3.04538 5.86871 2.88128C5.70462 2.71719 5.48206 2.625 5.25 2.625V2.625Z"
            fill="white"/>
      </svg>
    </button>
  </router-link>
</template>

<script>


export default {

  data() {
    return {
      backstroke: require("/public/images/back_stroke.png"),
      wijnen: [
        {
          title: 'Fontanella',
          id: 2,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/fontanella.png',
          regio: "Orvieto, Umbrie",
          temp: "12.5°C",
          bg: require('/public/images/fontanella_bg.jpg'),
          flag: require('/public/images/IT.png'),
          land: "Italie",
          herkomst: "Kersenkleurig met een intens fruitig boeket dat afkomstig is van syrah-druiven",
          smaken: "Rode wijn. Hinten van aardbei, kers, framboos en granaatappel. In de mond is de wijn fris met een goede zuurgraad en evenwichtige tannines.",
          combo: "Als het vers wordt geserveerd, is het de perfecte match voor lichte lunches op basis van salades en de meest veeleisende gegrilde diners."
        },
        {
          title: 'Les Florets',
          id: 2,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/panizzi.png',
          regio: "Rhone, Luberon",
          temp: "7-12°C",
          bg: require('/public/images/panizzi_bg.jpg'),
          flag: require('/public/images/FR.png'),
          land: "Frankrijk",
          herkomst: "Kersenkleurig met een intens fruitig boeket dat afkomstig is van syrah-druiven",
          smaken: "Rode wijn. Hinten van aardbei, kers, framboos en granaatappel. In de mond is de wijn fris met een goede zuurgraad en evenwichtige tannines.",
          combo: "Als het vers wordt geserveerd, is het de perfecte match voor lichte lunches op basis van salades en de meest veeleisende gegrilde diners."
        },
        {
          title: 'Baie Cap',
          id: 2,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/tradonnesole.png',
          regio: "Robetson",
          temp: "10°C",
          bg: require('/public/images/tradonnesole_bg.jpg'),
          flag: require('/public/images/SA.png'),
          land: "Zuid-Afrika",
          herkomst: "Kersenkleurig met een intens fruitig boeket dat afkomstig is van syrah-druiven",
          smaken: "Rode wijn. Hinten van aardbei, kers, framboos en granaatappel. In de mond is de wijn fris met een goede zuurgraad en evenwichtige tannines.",
          combo: "Als het vers wordt geserveerd, is het de perfecte match voor lichte lunches op basis van salades en de meest veeleisende gegrilde diners."
        }]
      ,

      bevestiging: require("/public/images/undraw_order_delivered_re_v4ab 1.png")
    }
  },
  created() {
    document.body.style.backgroundColor = "#f5f5f5";
  },
}
</script>

<style scoped>
.hero p{
  margin-top: 150px;
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
  font-size: xx-large;
}
.hero img{
  width: 65%;
  position: absolute;
  top: 75px;
  left: 20%;
}
.id {
  display: inline-block;
  color: #892E2E;
  font-weight: 600;
}

.wijnen_heading {

  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: #8c8c8c;
  height: 85px;
  padding: 25px;
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
  margin-top: 41px;
  margin-right: 79px;
}

button {
  width: 348px;
  height: 57px;
  background-color: #5E3333;
  color: #fff;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 12px;
}

.flag {
  width: 20px;
}

.bevestiging {
  width: 280px;
}

body {
  display: inline;
  align-items: normal !important;
}

.job {
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  font-family: gill-sans-nova, sans-serif;
  padding: 0 10px;
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

p {
  display: inline-block;
}

#routerlink {
  position: relative;
}

.amount {
  position: absolute;
  top: 90px;
  right: 20px;
}

.amount p {
  margin: 20px;
  font-size: 20px;
}

</style>