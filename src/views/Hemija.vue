<script>
import axios from 'axios';
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmarkCircle, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
    data() {
        return {
            astralImages: [],
            dinotecImages: [],
            openPopup: false,
            url: "",
            hemijaText: "",
            astral: false,
            dinotec: false,
            astralText: "",
            dinotecText: "",
            fil_param: "",
        }
    },
    components: {
        Nav,
        Footer,
        FontAwesomeIcon
    },
    methods: {
        async getUrl(image) {
            let fil_id = image.fil_id
            this.url = image.files_imageURL
            this.openPopup = !this.openPopup
            document.querySelector(".top").style.display = "none"
            let sekcije = document.querySelectorAll(".hemijskaSredstva")
            document.querySelector(".hemijaHeaderWrapper").style.filter = "blur(15px)"
            document.querySelector(".footer").style.filter = "blur(15px)"
            sekcije.forEach(sekcija => {
                sekcija.style.filter = "blur(15px)"
            })
            let text = await axios.get('http://091v123.mars2.mars-hosting.com/API/hemija', {params: {
                fil_id: fil_id
            }})
            this.hemijaText = text.data.q[0].fil_text.split(".")
        },
        noBlur() {
            let sekcije = document.querySelectorAll(".hemijskaSredstva")
            document.querySelector(".hemijaHeaderWrapper").style.filter = "none"
            document.querySelector(".footer").style.filter = "none"
            sekcije.forEach(sekcija => {
                sekcija.style.filter = "none"
            })
            document.querySelector(".top").style.display = "block"
            this.astral = false
            this.dinotec = false
        },
    },
    async mounted() {
        let hemija = "hemija"
        let hemijaDinotec = "hemijaDinotec"
        try {
            let images = await axios.get('http://091v123.mars2.mars-hosting.com/API/oprema', {
                params: {
                    fil_type: hemija,
                }
            })
            this.astralImages = images.data.q
            this.astralText = images.data.q[0].fil_text.split(".")
        } catch (error) {
            console.log(error);
        }
        try {
            let images = await axios.get('http://091v123.mars2.mars-hosting.com/API/oprema', {
                params: {
                    fil_param: this.fil_param,
                    fil_type: hemijaDinotec
                }
            })
            console.log(images);
            this.dinotecImages = images.data.q
            this.dinotecText = images.data.q[0].fil_text.split(".")
        } catch (error) {
            console.log(error);
        }
        window.addEventListener("scroll", function () {
            let scrollHeight = this.window.pageYOffset
            if (this.document.querySelector(".toTop")!=null){
            if (!this.openPopup) {
                if (scrollHeight > 50) {
                    // console.log(this.document.querySelector(".toTop"));
                this.document.querySelector(".toTop").style.display = "block"
            }
            else {
                this.document.querySelector(".toTop").style.display = "none"
            }
            }
        }
        })
    },
    created() {
        library.add(faXmarkCircle ,faCircleArrowUp)
    }
}
</script>

<template>
    <Nav />
    <div class="hemija">
        <div class="hemijaHeaderWrapper">
            <p class="hemijaHeader">Hemijska sredstva za bazene</p>
            <p class="hemijaSubHeader">U ponudi imamo hemijska sredstva za odrzavanje bazena proizvodjača AstralPool i Dinotec. Oba proizvodjača su svetski poznata i sa sedištem i proizvodnjom u EU. </p>
        </div>
            <div class="hemijskaSredstva">
                <div class="astralLogo">
                    <img src="../assets/AstralPool-Logo_high-uniform.jpg" alt="">
                </div>
                <p class="hemijaProizvodjacText">Ispod ćete naći našu ponudu iz asortimana hemijskih sredstava AstralPool-a. Ukoliko Vam je potrebno nešto od sredstava, a ne nalaze se na stranici, kontaktirajte nas.</p>
                <div class="sredstvaWrapper">
                    <div v-for="img in this.astralImages" :id="img.fil_id" class="sredstvo" @click="getUrl(img); this.astral = !this.astral">
                        <img :src="img.files_imageURL" alt="">
                        <p class="sredstvoIme">{{ img.fil_name }}</p>
                    </div>
                </div>
            </div>
            <div class="hemijskaSredstva">
                <div class="dinotecLogo">
                    <img src="../assets/dinotec_sigl.jpg" alt="">
                </div>
                <p class="hemijaProizvodjacText">Iz Dinotec asortimana izdvajamo najčešće tražena sredstva za obaranje Ph vrednosti vode i hlorisanje vode.</p>
                <div class="sredstvaWrapper">
                    <div v-for="img in this.dinotecImages" :id="img.fil_id" class="sredstvo" @click="getUrl(img); this.astral = !this.astral">
                        <img :src="img.files_imageURL" alt="">
                        <p class="sredstvoIme">{{ img.fil_name }}</p>
                    </div>
                </div>
            </div>
            <div v-if="this.openPopup" class="hemijaPopup">
                <FontAwesomeIcon class="xmark" icon="fa-solid fa-xmark-circle"
                    @click="noBlur(); this.openPopup = !this.openPopup"></FontAwesomeIcon>
                <div v-if="astral" class="hemijaPopupMain">
                    <img class="hemijaImgPopup" :src="this.url" alt="slike">
                    <div class="hemijaTextPopup">
                        <ul>
                            <li v-for="text in this.hemijaText">
                                - {{ text }}
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <div v-if="dinotec" class="hemijaPopupMain">
                    <img class="hemijaImgPopup" :src="this.url" alt="slike">
                    <div class="hemijaTextPopup">
                        <ul>
                            <li v-for="text in this.dinotecText">
                                - {{ text }}
                            </li>
                        </ul>
                    </div>
                </div> -->
            </div>
            <a  class="top" href="#top">
                <FontAwesomeIcon class="toTop" icon="fa-solid fa-circle-arrow-up"></FontAwesomeIcon>
            </a>
    </div>
    <div class="footerWrapper">
        <Footer />
    </div>
</template>

<style>
.hemijaHeaderWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 70px;
}
.hemijaHeader{
    
    font-size: 3em;
    font-family: Quicksand;
}
.hemijaSubHeader{
    text-align: center;
    font-family: Quicksand;
    margin-top: 1em;
    width: 90%;
}
.hemijaProizvodjac{
    font-size: 2em;
    font-family: Quicksand;
    color: rgb(46, 94, 154);
    margin: 1em 0;
}
.hemijaProizvodjacText{
    font-family: Comfortaa;
    margin-bottom: 2em;
}
.hemijskaSredstva{
    text-align: center;
    margin-bottom: 2em;
}
.sredstvaWrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
}
.sredstvo{
    flex-basis: 22%;
    font-family: Comfortaa;
    border: 2px solid transparent;
    cursor: pointer;
    margin-bottom: 1em;
    box-sizing: border-box;
}
.sredstvo img{
    width: 100%;
}
.sredstvo:hover{
    border-color:rgb(46, 94, 154);
}
.sredstvoIme{
    font-size: 1.3em;
    padding-top: 0.5em;
}
.astralLogo{
    width: 100vw;
}
.astralLogo img , .dinotecLogo img {
    width: 30%;
    margin: 2em auto;
}

.hemijaPopup {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100;
}
.hemijaPopupMain{
    width: 95vw;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 80px auto 0;
}
.hemijaImgPopup {
    flex-basis: 45%;
    border-radius: 20px;
    margin-top: 5%;
}
.hemijaTextPopup{
    flex-basis: 45%;
    font-family: Comfortaa;
    font-weight: bold;
    font-size: 2em;
    line-height: 2em;
}
.footerWrapper{
    margin-top: 9em;
}
@media (max-width: 1024px) {
    .sredstvo{
        flex-basis: 30%;
    }
    .hemijaPopupMain{
        flex-direction: column;
    }
    .hemijaImgPopup{
        width: 60%;
    }
}

@media (max-width: 800px) {
    .hemijaHeaderWrapper{
        width: 90%;
        margin: 70px auto 0;
    }
    .hemijaHeader{
        font-size: 2.5em;
        text-align: center;
    }
    .sredstvo{
        flex-basis: 48%;
    }
    .hemijaTextPopup{
        font-size: 1.3em;
    }
}

@media (max-width: 480px) {
    .sredstvo{
        flex-basis: 80%;
    }
    .hemijaHeader{
        font-size: 2em;
    }
    .hemijaImgPopup{
        width: 80%;
    }
}
</style>