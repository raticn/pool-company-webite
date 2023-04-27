<script>
import Nav from './Nav.vue'
import axios from 'axios';

export default{
    data() {
        return {
            akcNov: "",
            akcije: "",
            novosti: "",
        }
    },
    components: {
        Nav,
    },
    async mounted() {
        try {
            let akcijeNovosti = await axios.get('http://091v123.mars2.mars-hosting.com/API/akcijeNovosti')
            this.akcNov = akcijeNovosti.data.q;
            console.log('akcNov iz data',this.akcNov);
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<template>
    <Nav />
<div class="akcije">
    <div class="akcijeHeader">
        Akcije
    </div>
    <div v-for="akcija in this.akcNov" class="akcijeText">
        <div v-if="akcija.akc_type == 'akcije'">
            <img :src="akcija.akcije_novosti_imageURL" alt="akcije_slika">
            <p>{{ akcija.akc_text }}</p>
        </div>
    </div>
    <div class="novostiHeader">
        Novosti
    </div>
    <div v-for="akcija in this.akcNov" class="akcijeText">
        <div v-if="akcija.akc_type == 'novosti'">
            <img :src="akcija.akcije_novosti_imageURL" alt="novosti_slika">
            <p>{{ akcija.akc_text }}</p>
        </div>
    </div>
</div>
</template>

<style>
.akcijeHeader, .novostiHeader{
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0.5em;
}
</style>