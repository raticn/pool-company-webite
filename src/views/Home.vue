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
           heroCounter:0, 
           currentHero: 1,
           totalHeroes: 4,
        }
    },
    computed:{
        // carousel(){
        //     this.heroCounter++;
        //     if (this.heroCounter==5) 
        // },
    },
    mounted() {
        
    setInterval(() => {
      this.currentHero = this.currentHero === this.totalHeroes ? 1 : this.currentHero + 1
    }, 5000),
    document.querySelector('.heroImg').classList.add('slide-enter-active');
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
            <img class="heroImg" :key="currentHero" :src="`../assets/hero${currentHero}.jpg`" alt="Hero Image">
        <!-- <transition name="slide " mode="out-in">
           
            
        </transition> -->
        </div>
        <!-- <div class="hero">
            <img class="heroImg" src="../assets/hero1.jpg" alt="">
            <p class="heroText">Izgradnja bazena po vašoj želji</p>
        </div> -->
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
}
.heroText{
    position: absolute;
    top: 45%;
    left: 35%;
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
.hero-slider {
  position: relative;
}

.slide-enter-active {
  animation: fade-in 1.5s ease-in-out;
  
}
.slide-leave-active {
  animation: fade-out 1.5s ease-in;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    
  }
    
  100% {
    opacity: 1;
    
  }
}

@keyframes fade-out {
  0% {
    opacity: 0;
    
  }
  
  100% {
    opacity: 1;
    
  }
}


</style>