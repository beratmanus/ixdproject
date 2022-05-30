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
        <div style="margin-left: 6px"><img :src="wijn.flag" alt="">
          <p>{{ wijn.land }}</p></div>
      </div>
      <div class="id">
        {{ wijn.id }}
      </div>
      <div class="amount">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path
              d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm-6.5 10h13v1h-13v-1z"/>
        </svg>
        <p>2</p>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
          <path
              d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
        </svg>
      </div>
    </router-link>
  </div>
  <router-link :to="{name: 'Bevestigen'} ">
    <button>Bevestigen
      <svg style="padding-left: 5px" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_385_57)">
          <path
              d="M10 19.25C7.67936 19.25 5.45376 18.3281 3.81282 16.6872C2.17187 15.0462 1.25 12.8206 1.25 10.5C1.25 8.17936 2.17187 5.95376 3.81282 4.31282C5.45376 2.67187 7.67936 1.75 10 1.75C12.3206 1.75 14.5462 2.67187 16.1872 4.31282C17.8281 5.95376 18.75 8.17936 18.75 10.5C18.75 12.8206 17.8281 15.0462 16.1872 16.6872C14.5462 18.3281 12.3206 19.25 10 19.25ZM10 20.5C12.6522 20.5 15.1957 19.4464 17.0711 17.5711C18.9464 15.6957 20 13.1522 20 10.5C20 7.84784 18.9464 5.3043 17.0711 3.42893C15.1957 1.55357 12.6522 0.5 10 0.5C7.34784 0.5 4.8043 1.55357 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 13.1522 1.05357 15.6957 2.92893 17.5711C4.8043 19.4464 7.34784 20.5 10 20.5Z"
              fill="white"/>
          <path
              d="M13.7126 6.71248C13.7037 6.72111 13.6953 6.7303 13.6876 6.73998L9.34631 12.2712L6.73006 9.65373C6.55234 9.48813 6.31728 9.39798 6.0744 9.40227C5.83153 9.40655 5.5998 9.50494 5.42803 9.67671C5.25626 9.84847 5.15787 10.0802 5.15359 10.3231C5.1493 10.566 5.23946 10.801 5.40506 10.9787L8.71256 14.2875C8.80166 14.3764 8.90776 14.4465 9.02454 14.4936C9.14131 14.5406 9.26637 14.5636 9.39224 14.5613C9.51811 14.559 9.64223 14.5313 9.75718 14.48C9.87213 14.4286 9.97556 14.3547 10.0613 14.2625L15.0513 8.02498C15.2212 7.84665 15.3141 7.6086 15.3099 7.36232C15.3057 7.11603 15.2048 6.88129 15.0289 6.70885C14.853 6.53641 14.6163 6.44012 14.37 6.4408C14.1237 6.44148 13.8875 6.53907 13.7126 6.71248Z"
              fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_385_57">
            <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  </router-link>

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
          flag: require('/public/images/IT.png'),
          land: "Italie",
          herkomst: "Wijn van een blend van de druivenrassen Sangiovese en Merlot, uit Ombrië van de Wijnmakerij Goretti.",
          smaken: "Rosé wijn",
          combo: "Deze wijn gaat over het algemeen goed samen met varkensvlees, gevogelte of beef."
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
          herkomst: "Afkomstig uit Toscane, is deze witte druif ook de druif van de Toscaanse regionale wijn met dezelfde naam.",
          smaken: "Witte wijn. De wijnen zijn helder, citrusachtig en crisp en geven een lichte bittere noot als nasmaak.",
          combo: "Combineer dit met wit vlees of vis, maar ook met kruiden- en hartige sauzen om de kruidige tonen van de wijn naar voren te brengen."
        },
        {
          title: 'Baie Cap',
          id: 3,
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

button {
  width: 348px;
  height: 57px;
  background-color: #5E3333;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 10px;
  bottom: 66px;
  border-radius: 12px;
}

.id {
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


img {
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

p {
  display: inline-block;
}

#routerlink {
  position: relative;
}

.amount {
  position: absolute;
  top: 70px;
  right: 20px;
}

.amount p {
  margin: 20px;
  font-size: 20px;
}

</style>