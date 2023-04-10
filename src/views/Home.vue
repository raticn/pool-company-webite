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
        <div class="action">

            <div id="projektovanje_div" class="section">
                <p class="action_header">Projektovanje i izgradnja</p>
                <p class="action_text">Licencirani projektanti će se potruditi da prilagode projekat vašeg bazena svim Vašim željama...</p>
                <button class="action_btn">Saznaj više</button>
                <div class="plavo"></div>
            </div>

            <div id="renoviranje_div"  class="section">
                <p class="action_header">Renoviranje i održavanje</p>
                <p class="action_text">Ukoliko je vašem bazenu neophodno renoviranje ili želite da nas angažujete za poslove održavanja rado ćemo preuzeti te obaveze...</p>
                <button class="action_btn">Saznaj više</button>
                <div class="plavo"></div>

            </div>

            <div id="oprema_div" class="section">
                <p class="action_header">Oprema i hemijska sredstva</p>
                <p class="action_text">Bilo da su Vam potrebna hemijska sredstva za održavanje bazena ili bilo šta od bazenske opreme treba zameniti mi to imamo u ponudi...</p>
                <button class="action_btn">Saznaj više</button>
                <div class="plavo"></div>

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
.action{
    display: flex;
    width: 100vw;

}
.section{
    display: flex;
    flex-direction: column;
    flex-basis: 33%;
    text-align: center;
    justify-content: center;
    overflow-y: hidden;
    height: 40em;

}
#projektovanje_div{
    position: relative;
    background-image: url('../assets/projektovanje.jpg');
    background-size: cover;
    /* background-repeat: no-repeat; */
}

#renoviranje_div{
    position: relative;
    background-image: url('../assets/cleaning.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
#oprema_div{
    position: relative;
    background-image: url('../assets/MMD-Galery22.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.plavo{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(62, 62, 239);
    bottom: -100%;
    opacity: 0.5;
    z-index: 2;
}
#projektovanje_div:hover .plavo, #renoviranje_div:hover .plavo, #oprema_div:hover .plavo{
    bottom: 0%;
    transition: all 0.5s ease-in-out;
}
.action_btn{
    display: none;
    width: 8em;
    margin-top: 0.5em;
    align-self: center;
}
#projektovanje_div:hover .action_btn,#projektovanje_div:hover .action_text, #renoviranje_div:hover .action_btn, #oprema_div:hover .action_btn {
    z-index: 10;  
    position: relative;
    display: block;  
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