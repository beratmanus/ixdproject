<template>
    <h1>Wijnen</h1>
    <div v-for="wijn in wijnen" :key="wijn.id" class="job">
        <router-link :to="{ name: 'WijnDetails', params: { id: wijn.id, title: wijn.title, details: wijn.details, img: wijn.img } }">
            <img :src="wijn.img" alt="">
            <div>
                <p>{{wijn.regio}}</p>
                <h2>{{wijn.title}}</h2>
                <p><svg class="temp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M176 322.9l.0002-114.9c0-8.75-7.25-16-16-16s-15.1 7.25-15.1 16L144 322.9c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 48 48s48-21.5 48-48C208 347.1 194.6 329.5 176 322.9zM272 278.5V112c0-61.87-50.12-112-111.1-112S48 50.13 48 112v166.5c-19.75 24.75-32 55.5-32 89.5c0 79.5 64.5 143.1 144 143.1S304 447.5 304 368C304 334 291.8 303.1 272 278.5zM160 448c-44.13 0-80-35.87-80-79.1c0-25.5 12.25-48.88 32-63.75v-192.3c0-26.5 21.5-48 48-48s48 21.5 48 48v192.3c19.75 14.75 32 38.25 32 63.75C240 412.1 204.1 448 160 448z"/></svg>{{wijn.temp}}</p>
                
            </div>
            <div class="id">
                {{wijn.id}}
            </div>
        </router-link>
    </div>
</template>

<script> 
export default {
    data() {
        return {
            wijnen: [
                { title: 'Fontanella', id: 1, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/images/fontanella.png', regio: "Orvieto, Umbrie", temp: "12.5" },
                { title: 'Panizzi', id: 2, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/panizzi.png', regio: "Florance, Toscane", temp: "12.5"},
                { title: 'Tra donne sole', id: 3, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/tradonnesole.png', regio: "Piémont", temp: "12.5"},
                { title: 'Tasari', id: 4, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/tasari.png',regio: "Sicilië", temp: "12.5"},]
        }
    },
    created() {
    document.body.style.backgroundColor = "#ffffff";
  },
}
</script>

<style scoped>
    body{
        display: inline;
        align-items: normal !important;
    }
    .job{
        padding: 10px;
        border-radius: 10px;
        margin: 10px auto;
        cursor: pointer;
        text-align: left;
    }

    .job h2,p{
        color: #444;
        margin: 6px;
    }
   
    .job a{
        text-decoration: none;
    }
    img{
        width: 89px;
        height: 89px;
        margin-top: 12px;
    }
    .job a{
        display: flex;
        text-decoration: none;
        color: #444;
    }

    .id{
        position: absolute;
        right: 20px;
    } 
    .temp{
        width: 15px;
        padding-right: 5px;
    }

</style>