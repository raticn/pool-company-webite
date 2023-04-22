<script>
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    data() {
        return {
            javniS: "javniS",
            privatni: "privatni",
            fontane: "fontane"
        }
    },
    components: {
        Nav,
        FontAwesomeIcon,
        Footer,
    },
    methods: {
        ...mapActions(useBazeniStore, ['setLocalStorageSelection'])
    },
    created() {
        library.add(faMagnifyingGlassPlus)
    }
}
</script>

<template>
    <Nav />
    <div class="galerijaHeader">
        <p>Galerija</p>
    </div>
    <div class="portfolioGalerija">
        <div @click="setLocalStorageSelection(this.privatni); this.$router.push('/galerijaSekcija')"
            class="porfolio_section section1">
            <img class="portfolio_img" src="../assets/privatniBazeni.jpg" alt="Privatni">
            <div class="portfolio_hover">
                <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
                <p>Privatni bazeni</p>
            </div>
        </div>
        <div @click="setLocalStorageSelection(this.javniS); this.$router.push('/galerijaSekcija')"
            class="porfolio_section section2">
            <img class="portfolio_img" src="../assets/javniBazeni.jpg" alt="Javni bazeni">
            <div class="portfolio_hover">
                <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
                <p>Javni bazeni</p>
            </div>
        </div>
        <div @click="setLocalStorageSelection(this.fontane); this.$router.push('/galerijaSekcija')" class="porfolio_section section3">
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
    <Footer/>
    
</template>

<style>
.portfolioGalerija {
    display: flex;
    width: 90vw;
    margin: 7% auto 15%;
    justify-content: space-between;
}
.galerijaHeader {
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0 0.5em;
    position: relative;
}

@media (max-width: 1024px) {
    .portfolioGalerija{
        flex-wrap: wrap;
    }
    .galerijaHeader{
        margin: 1.5em 0 0.5em;
    }
}

@media (max-width: 479px) {
    .portfolioGalerija{
        justify-content: center;
    }
    .galerijaHeader{
        margin: 1.5em 0 0.5em;
    }
}
</style>