<script>
import {RouterLink, RouterView} from "vue-router"
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faClipboardCheck, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Nav from './Nav.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Nav,
        FontAwesomeIcon,
        Footer,
    },
    data() {
        return {
            currentHero: 0,
            heroImages: null,
            javniS: "javniS",
            privatni:"privatni",
            fontane: "fontane",
            saune: "saune",
        }
    },
    methods: {
        ...mapActions(useBazeniStore, ['setLocalStorageSelection']),
        carousel() {
            let counter = this.currentHero
            this.heroImages.forEach(function(hero){
            hero.style.transform = `translateX(-${counter * 100}%)`
            hero.style.transition = "all 1s ease-in-out"
    })
        }
    },
    mounted() {
        window.removeEventListener("scroll", function (){
            console.log('noscroll')
        })
        this.heroImages = document.querySelectorAll(".hero")
        this.heroImages.forEach(function(hero, index){
        hero.style.left = `${index * 100}%`
        })

        setInterval(() => {
            this.currentHero++
            if (this.currentHero > 3) {
                this.currentHero = 0
                this.carousel()
            }
            else {
                this.carousel()
            }
        }, 6000)

        this.$router.beforeEach((to, from, next) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
        next();
        });
    },
    created() {
        library.add(faCheck, faClipboardCheck,faMagnifyingGlassPlus)
    }
}
</script>

<template>
    <div class="home">
        <Nav />
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                    <img src="../assets/hero01.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Gradimo bazene po vašoj želji</h3>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src="../assets/hero2.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Usklađujemo se sa vašim potrebama</h3>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src="../assets/hero3.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Mnogo zadovoljnih klijenata</h3>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img src="../assets/hero04.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Ostvarite vaše snove!</h3>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
        <div class="aboutUs">
            <!-- <FontAwesomeIcon class="checkListIcon" icon="fa-solid fa-clipboard-check"></FontAwesomeIcon> -->
            <img class="homeLogo" src="../assets/transpLogo.jpg" alt="">
            <div class="checklist">
                <p class="aboutHeader">
                    Žašto <span class="aboutSpan">odabrati nas?</span></p>
                <p class="aboutText">
                    <FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>300+ izgrađenih bazena i isto toliko
                    zadovoljnih klijenata
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>25 godina iskustva
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Prilagođavanje željama klijenta
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Licencirani projektanti
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Višegodišnja profesionalna tehnička podrška
                </p>
                <p class="aboutText">
                    <FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Najsavremenija AstralPool oprema
                </p>
            </div>
        </div>
        <div class="action">

            <div id="projektovanje_div" class="section">
                <p class="action_header">Projektovanje i izgradnja</p>
                <p class="action_text">Licencirani projektanti će se potruditi da prilagode projekat bazena svim vašim željama...</p>
                <RouterLink class="action_link" to="/projektovanjeIzgradnja"><button class="action_btn">Saznaj više</button></RouterLink>
                <div class="plavo"></div>
            </div>

            <div id="renoviranje_div"  class="section">
                <p class="action_header">Renoviranje i održavanje</p>
                <p class="action_text">Ukoliko je vašem bazenu neophodno renoviranje ili želite da nas angažujete za poslove održavanja rado ćemo preuzeti te obaveze...</p>
                <RouterLink class="action_link" to="/renoviranjeOdrzavanje"><button class="action_btn">Saznaj više</button></RouterLink>
                <div class="plavo"></div>

            </div>

            <div id="oprema_div" class="section">
                <p class="action_header">Reference</p>
                <p class="action_text">Izdvojili smo nekoliko reprezentativnih primera iz našeg 25-godišnjeg rada… 
                </p>
                <RouterLink class="action_link" to="/reference"><button class="action_btn">Saznaj više</button></RouterLink>
                <div class="plavo"></div>

            </div>
        </div>
        <div class="portfolio_wrapper">
            <p class="portfolio_header">Galerija</p>
            <p class="portfolio_text">MMD Bazeni, Fontane, Saune </p>
            <div class="portfolio">
                <div class="porfolio_section section1" @click="setLocalStorageSelection(this.privatni); this.$router.push('/galerijaSekcija')">
                    <img class="portfolio_img" src="../assets/privatniBazeni.jpg" alt="Privatni">
                    <div class="portfolio_hover">
                        <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
                        <p>Privatni bazeni</p>
                    </div>    
                </div>
                <div class="porfolio_section section2" @click="setLocalStorageSelection(this.javniS); this.$router.push('/galerijaSekcija')">
                    <img class="portfolio_img" src="../assets/javniBazeni.jpg" alt="Javni bazeni">
                    <div class="portfolio_hover">
                        <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
                        <p>Javni bazeni</p>
                    </div>
                </div>
                <div class="porfolio_section section3" @click="setLocalStorageSelection(this.fontane); this.$router.push('/galerijaSekcija')">
                    <img class="portfolio_img" src="../assets/fontana.jpg" alt="Fontane">
                    <div class="portfolio_hover">
                        <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
                        <p>Fontane</p>
                        
                    </div>
                </div>
                <div class="porfolio_section section4" @click="setLocalStorageSelection(this.saune); this.$router.push('/galerijaSekcija')">
                    <img class="portfolio_img" src="../assets/sauna.jpg" alt="Saune">
                    <div class="portfolio_hover">
                        <FontAwesomeIcon class="searchIcon" icon="fa-solid fa-magnifying-glass-plus"></FontAwesomeIcon>
                        <p>Saune</p>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    
</template>

<style>
*{
    overflow-x: hidden;
}
.mainLogo{
    width: 30em;
    position: absolute;
    top: 20%;
    left: 10%;
}
.home {
    width: 100%;
    margin: 0 auto;
    overflow-x: hidden;
}
.heroWrapper{
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
}
.hero{
    position: absolute;
    width: 100%;
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
    left: 5%;
    width: 7em;
    color: #fff;
    font-size: 4em;
    font-family: Quicksand;
}
.heroText4 {
    position: absolute;
    top: 35%;
    left: 35%;
    width: 7em;
    color: #fff;
    font-size: 4em;
    font-family: Quicksand;
}
h3{
    padding: 1px 0;
    text-shadow: -1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;
    line-height: 1.6;
}
.aboutHeader {
    font-size: 2.5em;
    margin: 0.5em 0;
    font-family: Quicksand;
    font-weight: bold;
}
.aboutSpan{
    color: rgb(46, 94, 154);
}

.aboutText {
    font-size: 1.3em;
    margin: 1.7em 0;
    font-family: Comfortaa;
}
.checkIcon{
    color: rgb(46, 94, 154);
    padding-right: 0.5em;
}
.aboutUs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2em 0;
}
.homeLogo{
    flex-basis: 30%;
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
    height: 46em;

}
#projektovanje_div{
    position: relative;
    background-image: url('../assets/projektovanje.jpg');
    background-size: cover;
}

#renoviranje_div{
    position: relative;
    background-image: url('../assets/cleaning.jpg');
    background-size: cover;
}
#oprema_div{
    position: relative;
    background-image: url('../assets/MMD-Galery22.jpg');
    background-size: cover;
}

.plavo{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgb(46, 94, 154);
    bottom: -100%;
    opacity: 0.8;
    z-index: 2;
}
.action_header{
    font-family: Quicksand;
    color: #fff;
    font-size: 2.3em;
}
#projektovanje_div:hover .plavo, #renoviranje_div:hover .plavo, #oprema_div:hover .plavo{
    bottom: 0%;
    transition: all 0.5s ease-in-out;
}
.action_btn{
    display: none;
    width: 10em;
    margin-top: 0.5em;
    align-self: center;
    cursor: pointer;
    border: 2px solid #fff;
    color: #fff;
    padding: 15px;
    background-color: transparent;
    font-family: Comfortaa;
}
.action_btn:hover{
    box-shadow: 0 0 10px #fff;
    font-weight: 700;
}
.action_link{
    text-decoration: none;
    color: #fff;
    display: flex;
    justify-content: center;
}
.action_text{
    color: #fff;
    font-family: Comfortaa;
    font-weight: 900;
    padding-top: 1em;
    line-height: 1.7em;
}
.action_header, .action_text{
    width: 80%;
    margin: 0 auto;
}
.action_header, .action_text, .action_btn{
    z-index: 10;  
    position: relative;
}
#projektovanje_div:hover .action_btn, #renoviranje_div:hover .action_btn, #oprema_div:hover .action_btn {
    display: block;  
}

.portfolio_wrapper{
    overflow: hidden;
}
.portfolio{
    display: flex;
    width: 90vw;
    margin: 0 auto;
    padding-bottom: 80px;
    justify-content: space-between;
}
.porfolio_section{
    flex-basis: 22%;
    overflow-y: hidden;
    position: relative;
}

.portfolio_img{
    width: 100%;
}
.portfolio_header{
    text-align: center;
    margin: 1em 0 0.5em;
    font-size:3em ;
    font-family: Quicksand;
    color: rgb(46, 94, 154);
}
.portfolio_text{
    margin-bottom: 1em;
    text-align: center;
    font-size:1.5em ;
    font-family: Comfortaa;
}
.portfolio_hover{
    background-color: rgb(46, 94, 154);
    opacity: 0;
    position: absolute;
    width: 2em;
    height: 2em;
    top: 30%;
    left: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-family: Comfortaa;
    font-size: 0.5em;
}
.searchIcon{
    font-size: 2em;
    margin-bottom: 0.2em;
}
.portfolio_hover p{
    font-weight: 900;
}
.section1:hover .portfolio_hover, .section2:hover .portfolio_hover, .section3:hover .portfolio_hover, .section4:hover .portfolio_hover{
    width: 100%;
    height: 100%;
    opacity: 0.8;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    cursor: pointer;
    transition: all 0.4s ease-in;
    font-size: 1em;
}
@keyframes fade-in {
    0% {
        opacity: 0.85;

    }

    100% {
        opacity: 1;
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    .aboutText{
        margin: 1.3em 0;
    }
    .section{
        height: 32em;
    }
}

@media (max-width: 1024px) {
    .aboutUs{
        flex-direction: column;
    }
    .homeLogo{
        width: 40%;
    }
    .aboutHeader{
        margin: 1em 0;
        text-align: center;
    }
    .portfolio{
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .porfolio_section{
        flex-basis: 45%;
        margin-bottom: 1em;
    }
    .action{
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .section{
        flex-basis: 45%;
        margin-bottom: 2em;
    }
    .action_btn{
        display: block;
    }
}

@media (max-width: 800px) {
    .section{
        flex-basis: 90%;
    }
    .aboutText{
        width: 80%;
        margin: 1.3em auto;
    }
    #carouselExampleCaptions{
        margin-top: 4em;
    }
}

@media (max-width: 479px) {
    .porfolio_section{
        flex-basis: 80%;
        margin-bottom: 1em;
    }
    .section{
        height: 25em;
    }
    .action_header{
        width: 90%;
        font-size: 1.8em;
    }
}
</style>