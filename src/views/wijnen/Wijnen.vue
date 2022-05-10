<template>
    <h1>Wijnen</h1>
    <div v-for="wijn in wijnen" :key="wijn.id" class="job">
        <router-link :to="{ name: 'WijnDetails', params: { id: wijn.id, title: wijn.title, details: wijn.details, img: wijn.img } }">
            <img :src="wijn.img" alt="">
            <div>
                <h2>{{wijn.title}}</h2>
                <p>{{wijn.details}}</p>
                <p>😂 herkomst</p>
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
                { title: 'Santa Tierra', id: 1, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '/images/santa_tierra.png' },
                { title: 'Casilerro del Diablo', id: 2, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/casilerro_del_diablo.png'},
                { title: 'Mezzacorona', id: 3, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/mezzacorona.png'},
                { title: 'Baie Cap', id: 4, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/baie_cap.png'},
                { title: 'Les Florets', id: 5, details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',img: '/images/les_florets.png'},              
            ]
        }
    },
}
</script>

<style>
    .job{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        text-align: left;
    }

    .job h2,p{
        color: #444;
    }
   
    .job a{
        text-decoration: none;
    }
    img{
        width: 100px;
    }
    .job a{
        display: flex;
        text-decoration: none;
        color: #444;
    }

    .id{
        position: relative;
    }
</style>