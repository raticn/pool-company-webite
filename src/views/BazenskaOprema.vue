<script>
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    data() {
        return {
            astralData: [],
        }
    },
    components: {
        Nav,
        Footer,
        FontAwesomeIcon
    },
    methods: {
        async astralPoolInfo($event) {
            let id = $event.target.id
            let astralParam;
            if (id == "sideBarSection1") {
                astralParam = "opremaP"
            }
            else if (id == "sideBarSection2") {
                astralParam = "opremaJ"
            }
            try {
                let astral = await axios.get('http://091v123.mars2.mars-hosting.com/API/oprema', {
                    params: {
                        fil_type: astralParam
                    }
                })
                this.astralData = astral.data.q
            } catch (error) {
                console.log(error);
            }
            const clickedSection = $event.target;
            // const clickedList = clickedSection.nextElementSibling;

            const activeSection = document.querySelector('.activeSection');

            if (clickedSection === activeSection) {
                return
            }
            else {
                activeSection.classList.remove('activeSection');

                clickedSection.classList.add('activeSection');
            }
        }
    },
    async mounted() {
        let astralParam = "opremaP"
        try {
            let astral = await axios.get('http://091v123.mars2.mars-hosting.com/API/oprema', {
                params: {
                    fil_type: astralParam
                }
            })
            this.astralData = astral.data.q
        } catch (error) {
            console.log(error);
        }
        this.scrollHandler = function () {
            let scrollHeight = window.pageYOffset;
            if (scrollHeight > 70) {
                document.querySelector(".opremaToTop").style.display = "block";
            } else {
                document.querySelector(".opremaToTop").style.display = "none";
            }
        };
        window.addEventListener("scroll", this.scrollHandler);

    },
    created() {
        library.add(faCircleArrowUp)
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }
}
</script>

<template>
    <Nav />

    <div class="bazenskaOpremaWrapper" id="opremaTop">
        <div class="bazenskaOprema">
            <div class="sideBar">
            <p id="sideBarSection1" class="activeSection" @click="astralPoolInfo($event)">Oprema za
                privatne bazene</p>
            <p id="sideBarSection2" @click="astralPoolInfo($event)">Oprema za javne bazene</p>
        </div>
            <div class="bazenskaOpremaText">
                <p>U ponudi imamo opremu proizvodjača <span class="astralSpan">AstralPool - Fluidra</span>. Kao <span
                        class="astralUnderline">najveći svetski proizvodjač i prodavac bazenske opreme</span> sa tradicijom
                    dugom preko 50 godina, oprema Astrala se pokazala kao bazenska oprema sa najbolji odnosom cene i
                    kvaliteta.</p>
                <p>Sa minimalnim brojem reklamacija, obezbedjenim servisom i ponudom celokupne bazenske opreme AstralPool se
                    probio do samog svetskog vrha.</p>
                <p>Sedište firme se nalazi u Barseloni u Španiji a proizvodni pogoni koji snabdevaju Evropu se takodje
                    nalaze u EU.</p>
                <p>U ponudi imamo opremu za privatne bazene i za javne bazene. U zavisnosti šta Vam je potrebno možemo Vam
                    ponuduti:</p>
            </div>
            <div v-for="astral in this.astralData" :id="astral.fil_param" class="oprema">
                <div class="opremaPrikaz">
                    <img :src="astral.files_imageURL" alt="">
                    <p>{{ astral.fil_name }}</p>
                </div>
                <div class="opremaText">
                    {{ astral.fil_text }}
                </div>
            </div>
        </div>
    </div>
    <a class="top" href="#opremaTop">
        <FontAwesomeIcon class="opremaToTop" icon="fa-solid fa-circle-arrow-up"></FontAwesomeIcon>
    </a>
    <Footer />
</template>

<style>
.sideBar {
    display: flex;
    width: 90vw;
    justify-content: center;
    margin: 80px auto 0;
    font-family: Quicksand;
    font-size: 2.5em;
    text-decoration: underline;
}


#sideBarSection1,
#sideBarSection2 {
    margin: 1em 0 0 1em;
    cursor: pointer;
}

.activeSection {
    font-weight: bold;
    display: block;
    color: rgb(46, 94, 154);
}

.sideBarList2 {
    display: none;
}

.bazenskaOprema {
    flex-basis: 78%;
}

.bazenskaOpremaText,
.oprema {
    width: 90%;
    margin: 0 auto;
    font-family: Comfortaa;
    margin-bottom: 0.5em;
    line-height: 1.5em;
}

.opremaPrikaz {
    flex-basis: 30%;
    font-family: Quicksand;
}

.opremaText {
    flex-basis: 50%;
}

.bazenskaOpremaText {
    margin-top: 2%;
}

.astralSpan {
    font-weight: bold;
}

.astralUnderline {
    text-decoration: underline;
}

.bazenskaOpremaWrapper {
    display: flex;
    flex-direction: column;
}

.oprema {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
}

.oprema img {
    width: 300px;
}

.opremaToTop {
    font-size: 3em;
    color: rgb(46, 94, 154);
    cursor: pointer;
    position: fixed;
    bottom: 1em;
    left: 1em;
    display: none;
}

.opremaHeaderWrapper {
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
}

.opremaHeader {
    font-size: 3em;
    font-family: Quicksand;
    margin-top: 70px;
}

@media (max-width: 1250px) {
    .sideBar{
        font-size: 2em;
    }
}

@media (max-width: 1024px) {
    .sideBar{
        font-size: 1.5em;
    }
    .opremaText{
        padding: 0 0.5em;
        box-sizing: border-box;
    }
    .opremaPrikaz img{
        width: 100%;
    }
}

@media (max-width: 750px) {
    .sideBar{
        flex-direction: column;
        align-items: center;
        font-size: 1.4em;
        margin-bottom: 1em;
    }
    .oprema{
        flex-direction: column;
        align-items: center;
    }
    .opremaPrikaz p {
        text-align: center;
        font-size: 1.3em;
        margin: 0.5em 0;
    }
}
</style>