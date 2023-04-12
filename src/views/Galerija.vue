<script>
import Nav from './Nav.vue';
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
    data() {
        return {
            javniS: "javniS",
        }
    },
    components: {
        Nav,
        FontAwesomeIcon,
    },
    methods: {
        ...mapActions(useBazeniStore, ['getImages'])
    },
    created() {
        library.add(faMagnifyingGlassPlus)
    }
}
</script>

<template>
<Nav/>
<div class="portfolioGalerija">
    <div class="porfolio_section section1">
        <img class="portfolio_img" src="../assets/privatniBazeni.jpg" alt="Privatni">
        <div class="portfolio_hover">
            <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
            <p>Privatni bazeni</p>
        </div>    
    </div>
    <div @click="getImages(this.javniS); this.$router.push('/galerijaSekcija')" class="porfolio_section section2">
        <img class="portfolio_img" src="../assets/javniBazeni.jpg" alt="Javni bazeni">
        <div class="portfolio_hover">
            <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
            <p>Javni bazeni</p>
        </div>
    </div>
    <div class="porfolio_section section3">
        <img class="portfolio_img" src="../assets/fontana.jpg" alt="Fontane">
        <div class="portfolio_hover">
            <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
            <p>Fontane</p>
            
        </div>
    </div>
    <div class="porfolio_section section4">
        <img class="portfolio_img" src="../assets/sauna.jpg" alt="Saune">
        <div class="portfolio_hover">
            <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
            <p>Saune</p>
        </div>
    </div>
</div>
</template>

<style>
.portfolioGalerija{
    display: flex;
    width: 90vw;
    margin: 15% auto 0;
    justify-content: space-between;
}
</style>