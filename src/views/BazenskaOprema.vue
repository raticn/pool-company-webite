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
        sideBarToggle($event) {
            const clickedSection = $event.target;
            const clickedList = clickedSection.nextElementSibling;

            const activeSection = document.querySelector('.activeSection');
            const activeList = activeSection.nextElementSibling;

            if (clickedSection === activeSection) {
                return
            }
            else {
                activeSection.classList.remove('activeSection');
                activeList.style.display = 'none';

                clickedSection.classList.add('activeSection');
                clickedList.style.display = 'block';
            }
        },
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
                console.log('astral', astral.data);
            } catch (error) {
                console.log(error);
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
        <div class="sideBar">
            <p id="sideBarSection1" class="activeSection" @click="sideBarToggle($event); astralPoolInfo($event)">Oprema za
                privatne bazene</p>
            <ul class="sideBarList1 activeList">
                <li><a href="#pumpa">Pumpe</a></li>
                <li><a href="#filter">Filteri</a></li>
                <li><a href="#merdevine">Merdevine i rukohvati</a></li>
                <li><a href="#rasveta">Rasveta</a></li>
                <li><a href="#doziranje">Dozirna oprema</a></li>
                <li><a href="#vodopadi">Vodene atrakcije</a></li>
                <li><a href="#turbojet">Uređaji za plivanje u mestu</a></li>
                <li><a href="#ciscenje">Oprema za čišćenje bazena</a></li>
                <li><a href="#robot">Roboti</a></li>
                <li><a href="#obloge">Lajneri, pločice</a></li>
                <li><a href="#cevovodi">Cevi i fiting</a></li>
            </ul>
            <p id="sideBarSection2" @click="sideBarToggle($event); astralPoolInfo($event)">Oprema za javne bazene</p>
            <ul class="sideBarList2">
                <li><a href="#pumpaJavni">Pumpe</a></li>
                <li><a href="#filterJavni">Filteri</a></li>
                <li><a href="#doziranjeJavni">Dozirna oprema</a></li>
                <li><a href="#ostaloJavni">Ostalo</a></li>
            </ul>
        </div>
        <div class="bazenskaOprema">
            <div class="opremaHeaderWrapper">
                <p class="opremaHeader">Bazenska oprema</p>
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
    flex-basis: 22%;
    margin-top: 60px;
    font-family: Comfortaa;
}

.sideBar li {
    margin: 1em 0 0 2em;
    cursor: pointer;
    text-decoration: underline;
}

.sideBar li a {
    color: #000;
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
    flex-basis: 40%;
}

.opremaText {
    flex-basis: 60%;
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
}

.oprema {
    display: flex;
    align-items: center;
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
}

.opremaHeader {
    font-size: 3em;
    font-family: Quicksand;
    margin-top: 70px;


}</style>