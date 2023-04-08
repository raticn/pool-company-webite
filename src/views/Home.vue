<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Nav from './Nav.vue'

export default {
    components: {
        Nav,
        FontAwesomeIcon,
    },
    data(){
        return{
            currentHero: 1,
        }
    },
    methods:{
    },
    mounted() {
    setInterval(() => {
    if(this.currentHero > 3) {
        this.currentHero = 1
    }
    else{
        this.currentHero++
    }
    }, 6000)
    
    },
    created() {
        library.add(faCheck)
    }
}
</script>

<template>
    <div class="home">
        <Nav/>
        <div class="hero">
            <img class="heroImg" :key="currentHero" :src="`../assets/hero${this.currentHero}.jpg`" alt="Hero Image">
            <p class="heroText">Izgrađujemo bazeno po vašoj želji</p>
        </div>
        <div class="aboutUs">
            <p class="aboutHeader">
                Žašto odabrati nas?</p>
            <p class="aboutText">
                <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>300+ izgrađenih bazena i isto toliko zadovoljnih klijenata</p>
            <p class="aboutText">
                <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>25 godina iskustva</p>
            <p class="aboutText">
                <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Prilagođavanje željama klijenta</p>
            <p class="aboutText">
                <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Licencirani proektanti</p>
            <p class="aboutText">
                <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Višegodišnja profesionalna tehnička podrška</p>
            <p class="aboutText">
                <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Najsavremenija AstralPool oprema</p>
        </div>

    </div>
</template>

<style>
.home{
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
}
.heroImg{
    width: 100%;
    position: relative;
    animation: fade-in 1.5s ease-in-out;
}
.heroText{
    position: absolute;
    top: 25%;
    left: 10%;
    width: 6em;
    color: #fff;
    font-size: 4em;
    font-family: Quicksand;
}
.aboutHeader{
    font-size: 2em;
    margin: 0.5em 0;
    font-family: Comfortaa;
}
.aboutText{
    font-size: 1.3em;
    margin: 0.5em 0;
    font-family: Comfortaa;
}

@keyframes fade-in {
    0% {
    opacity: 0.7;
    
    }
    100%{
    opacity: 1;
    }
}

</style>