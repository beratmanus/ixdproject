<template>
  <div class="wijnen_heading">
    <img id="backbutton" class="wijnen_heading_inhoud" :src="backstroke" alt="" @click="this.$router.back()">
    <img id="flag" class="wijnen_heading_inhoud" :src="ITflag" alt="">
    <h1 id="wijnen_heading_h1" class="wijnen_heading_inhoud">Italië</h1>
    <img id="shoppingbag" class="wijnen_heading_inhoud" :src="shoppingbag" alt="">
  </div>
  <div v-for="wijn in wijnen" :key="wijn.id" class="job">
    <router-link id="routerlink"
                 :to="{ name: 'WijnDetails', params: { id: wijn.id, title: wijn.title, details: wijn.details, img: wijn.img, bg_img: wijn.bg, regio: wijn.regio,
                                                        temp: wijn.temp, herkomst: wijn.herkomst, smaken: wijn.smaken, combo: wijn.combo} }">
      <img class="wijnen_img" :src="wijn.img" alt="">
      <div>
        <p>{{ wijn.regio }}</p>
        <h2>{{ wijn.title }}</h2>
        <p>
          <svg class="temp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
                d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"/>
          </svg>
          {{ wijn.temp }}
        </p>
      </div>
      <div class="id">
        {{ wijn.id }}
      </div>
    </router-link>
    <StarModal id="starmodal"/>
  </div>
</template>

<script>
import StarModal from "../../components/StarModal";

export default {
  components: {StarModal},
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
          herkomst: "Wijn van een blend van de druivenrassen Sangiovese en Merlot, uit Ombrië van de Wijnmakerij Goretti.",
          smaken: "Rosé wijn",
          combo: "Deze wijn gaat over het algemeen goed samen met varkensvlees, gevogelte of beef."
        },
        {
          title: 'Panizzi',
          id: 2,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/panizzi.png',
          regio: "Florance, Toscane",
          temp: "7-12°C",
          bg: require('/public/images/panizzi_bg.jpg'),
          herkomst: "Afkomstig uit Toscane, is deze witte druif ook de druif van de Toscaanse regionale wijn met dezelfde naam.",
          smaken: "Witte wijn. De wijnen zijn helder, citrusachtig en crisp en geven een lichte bittere noot als nasmaak.",
          combo: "Combineer dit met wit vlees of vis, maar ook met kruiden- en hartige sauzen om de kruidige tonen van de wijn naar voren te brengen."
        },
        {
          title: 'Tra donne sole',
          id: 3,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/tradonnesole.png',
          regio: "Piémont",
          temp: "10°C",
          bg: require('/public/images/tradonnesole_bg.jpg'),
          herkomst: "Een witte wijn uit Piemonte, Italië. Gemaakt van Chardonnay, Sauvignon Blanc druiven.",
          smaken: "Noord-Italische witte wijn. Droog en citrus.",
          combo: "Past goed bij vis, oude kaas en geprocesseerd vlees."
        },
        {
          title: 'Tasari',
          id: 4,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/tasari.png',
          regio: "Sicilië",
          temp: "18-20°C",
          bg: require('/public/images/tasari_bg.jpg'),
          herkomst: "Kersenkleurig met een intens fruitig boeket dat afkomstig is van syrah-druiven",
          smaken: "Rode wijn. Hinten van aardbei, kers, framboos en granaatappel. In de mond is de wijn fris met een goede zuurgraad en evenwichtige tannines.",
          combo: "Als het vers wordt geserveerd, is het de perfecte match voor lichte lunches op basis van salades en de meest veeleisende gegrilde diners."
        },
        {
          title: 'Santa Cristina',
          id: 5,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          img: '/images/santacristina.png',
          regio: "Toscane",
          temp: "6-10°C",
          bg: require('/public/images/santacristina_bg.jpg'),
          herkomst: "Sinds 1946 in Cortona, hernieuwt Santa Cristina de traditie van wijnen met een geweldig karakter die onmiddellijk na het bottelen kunnen worden geconsumeerd, evenals een selectie van verfijnde klassiekers en unieke Toscaanse specialiteiten.",
          smaken: "Fris, fruitig, aroma's van grapefruit en wilde aardbei. De smaak is goed uitgebalanceerd, zacht, geurig met een fruitige afdronk.",
          combo: "Gaat goed samen met vis en milde kazen."
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
  display: inline;
}

#backbutton {
  width: 12%;
  margin-top: 40px;
  margin-right: 80px;
}

#flag {
  width: 7%;
  margin-right: 5px;
}

#shoppingbag {
  width: 12%;
  margin-left: 70px;
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


</style>