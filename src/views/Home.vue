<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Nav from './Nav.vue'

export default {
    components: {
        Nav,
        FontAwesomeIcon,
    },
    data() {
        return {
            currentHero: 1,
        }
    },
    methods: {
        imageLoaded() {
            // Image is loaded, show it
            this.showImage = true;
        },
        loadImage() {
            // Start loading image
            this.showImage = false;
            const img = new Image();
            img.src = this.imageUrl;
        }
    },
    mounted() {
        this.loadImage();
        setInterval(() => {
            if (this.currentHero > 3) {
                this.currentHero = 1
            }
            else {
                this.currentHero++
            }
        }, 6000)

    },
    created() {
        library.add(faCheck, faClipboardCheck)
    }
}
</script>

<template>
    <div class="home">
        <Nav />
        <div class="hero">
            <div class="heroPlaceholder" v-show="!showImage">
                <div class="heroImg"></div>
            </div>
            <img class="heroImg" :key="currentHero" :src="`../assets/hero${this.currentHero}.jpg`" alt="Hero Image"
                @load="imageLoaded" />
            <p class="heroText">Gradimo bazene po vašoj želji</p>
        </div>
        <div class="aboutUs">
            <FontAwesomeIcon class="checkListIcon" icon="fa-solid fa-clipboard-check"></FontAwesomeIcon>
            <div class="checklist">
                <p class="aboutHeader">
                    Žašto odabrati nas?</p>
                <p class="aboutText">
                    <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>300+ izgrađenih bazena i isto toliko
                    zadovoljnih klijenata
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>25 godina iskustva
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Prilagođavanje željama klijenta
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Licencirani proektanti
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Višegodišnja profesionalna tehnička podrška
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon icon="fa-solid fa-check"></FontAwesomeIcon>Najsavremenija AstralPool oprema
                </p>
            </div>
        </div>

    </div>
</template>

<style>
.home {
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
}

.heroImg {
    width: 100%;
    position: relative;
    animation: fade-in 2s ease-in-out;
    transition: opacity 2s ease-in-out;
    opacity: 1;
}

.heroText {
    position: absolute;
    top: 25%;
    left: 10%;
    width: 6em;
    color: #fff;
    font-size: 4em;
    font-family: Quicksand;
}

.aboutHeader {
    font-size: 2em;
    margin: 0.5em 0;
    font-family: Comfortaa;
}

.aboutText {
    font-size: 1.3em;
    margin: 0.5em 0;
    font-family: Comfortaa;
}

.aboutUs {
    display: flex;
    justify-content: space-around;
    padding: 2em 0;
}

.checkListIcon {
    font-size: 15em;
}



@keyframes fade-in {
    0% {
        opacity: 0.85;

    }

    100% {
        opacity: 1;
    }
}
</style>