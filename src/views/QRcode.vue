<template>
  <div class="wijnen_heading">
    <img id="backbutton" class="wijnen_heading_inhoud" :src="backstroke" alt="" @click="this.$router.back()">
    <img id="flag" class="wijnen_heading_inhoud" :src="ITflag" alt="">
    <h1 id="wijnen_heading_h1" class="wijnen_heading_inhoud">Italië</h1>
  </div>
  <div class="qr_content">
    <p>Scan de QR code op de tafel om een overzicht van de beschikbare wijnen te krijgen.</p>
    <img class="heading" id="scan" :src="scanningbar" alt="scan lijn">
    <img class="heading" id="qrcode" :src="QRcode" alt="qr code">
    <img style="margin-top: 275px" :src="noflash" alt="no flash">
  </div>
  <router-link :to="{name: 'Wijnen'} ">
    <button>Scan QR</button>
  </router-link>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      ITflag: require("/public/images/IT.png"),
      backstroke: require("/public/images/back_stroke.png"),
      QRcode: require("/public/images/qrcode.png"),
      scanningbar: require("/public/images/scanlijn.png"),
      noflash: require("/public/images/noflash.png")
    }
  },
  created() {
    document.body.style.backgroundColor = "#1d1d1d";
  }
}
</script>

<style scoped>
#scan {
  z-index: 3;
  top: 460px;
  left: 18%;
}

#qrcode{
  display: block;
  z-index: 1;
  top: 335px;
  left: 23%;
}
.qr_content{
  color: #dcdcdc;
  width: 80%;
  margin-top: 75px;
  margin-left: 40px;
  font-family: gill-sans-nova, sans-serif;
  font-size: larger;


  /*justify-content: space-between;
  display: flex;*/
}

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
.wijnen_heading {
  background-color: #282828;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: #171717;
  height: 85px;
  padding: 25px;
  border: 1px solid #313131;
  text-align: left;
  font-family: gill-sans-nova, sans-serif;

}

.wijnen_heading_inhoud {
  display: inline;
  font-family: gill-sans-nova, sans-serif;

}
#backbutton {
  width: 12%;
  margin-top: 40px;
  margin-right: 80px;
  filter: brightness(400%);
}

#flag {
  width: 7%;
  margin-right: 5px;
}

#wijnen_heading_h1{
  color: #dedede;
}

</style>