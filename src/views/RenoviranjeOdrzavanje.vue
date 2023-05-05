<script>
import axios from 'axios';
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    data() {
        return {
            odrzavanjeImg1: "",
            odrzavanjeImg2: "",
            odrzavanjeImg3: "",
            odrzavanjeImg4: "",
            renoviranjeImg: "",
        }
    },
    components: {
        Nav,
        Footer,
        FontAwesomeIcon,
    },
    async mounted() {
        let odrzavanje = "odrzavanje"
        let renoviranje = "renoviranje"
        try {
            let images = await axios.get('http://091v123.mars2.mars-hosting.com/API/pictures', {
                params: {
                    fil_type: odrzavanje
                }
            })
            this.odrzavanjeImg1 = images.data.q[1].files_imageURL
            this.odrzavanjeImg2 = images.data.q[0].files_imageURL
            this.odrzavanjeImg3 = images.data.q[2].files_imageURL
            this.odrzavanjeImg4 = images.data.q[3].files_imageURL
        } catch (error) {
            console.log(error);
        }
        try {
            let images = await axios.get('http://091v123.mars2.mars-hosting.com/API/pictures', {
                params: {
                    fil_type: renoviranje
                }
            })
            this.renoviranjeImg = images.data.q[0].files_imageURL
        } catch (error) {
            console.log(error);
        }
    },
    created() {
        library.add(faCheck)
    }
}
</script>

<template>
    <Nav />
    <div class="renoviranjeNaslov">
        <p>Renoviranje</p>
    </div>
    <div class="renoviranjeWrapper">
        <div class="renoImgWrapper">
            <img :src="this.renoviranjeImg" alt="Slika odrzavanje">
        </div>
        <div class="renoTextWrapper">
            <p>Niste zadovoljni kako funkcioniše vaš bazen? Imate problema sa kvalitetom vode? Možda biste želeli da
                promenite rasvetu na vašem bazenu ili dodate vodopad ili vodene atrakcije?</p>
            <p>Mi smo tu da Vam pomognemo! Kakve god da su vaše želje mi ćemo Vas saslušati i dati predlog kako da rešimo
                probleme sa vašim bazenom.</p>
            <p>Vršimo zamenu starih halogenih reflektora koji se više ne proizvode u EU sa novim eco-friendly LED
                reflektorima. Možemo zameniti staru rasvetu u vašem bazenu a na vama je da odaberete tip(bela svetlost ili
                višebojna) novih reflektora.</p>
            <p>Ukoliko postoje problemi sa kvalitetom vode možda je došlo vreme za servis ili zamenu filtracione pumpe ili
                filtera. Tokom višegodišnjeg rada opreme može doći do raznih nepravilnosti u radi koji drastično mogu
                uticati na kvalitet filtracije a samim ti i kvaliteta vode u bazenu.</p>
            <p>Želite da obogatite vaš bazen slapom ili vodopadom? Prezentovaćemo Vam modele koje imamo i koje smo ugradili
                na preko 100 bazena do sada a na Vama je da odaberete.</p>
            <p>Svaki problem koji imate na bazenu mi smo se verovatno u predhodnih 25 godina rada sreli sa njim i rešili ,
                bilo da je bazenski lajner dotrajao ,doziranje hemijskih sredstava ne radi kako treba ili bilo kakve
                probleme da imate, obratite nam se a mi ćemo u konsultaciji sa Vama ponuditi rešenje!</p>
        </div>
    </div>
    <div class="odrzavanjeNaslov">
        <p>Održavanje</p>
    </div>
    <div class="odrzavanjeWrapper">
        <div class="odrzavanjeTextWrapper">
            <p>Nemate vremena da se posvetite održavanju vašeg bazena? Niste zadovoni načinom na koji je do sada vodjeno
                održavanje? </p>
            <p>Mi ćemo preuzeti brigu o vašem bazenu. U dogovoru sa Vama ćemo odrediti termine kada dolazimo na održavanje
                vašeg bazena.</p>
        </div>
        <div class="odrzavanjeImgWrapper">
            <div class="beforeAfter">
                <img :src="this.odrzavanjeImg1" alt="">
                <img class="after" :src="this.odrzavanjeImg2" alt="">
            </div>
            <div class="beforeAfter">
                <img :src="this.odrzavanjeImg3" alt="">
                <img class="after" :src="this.odrzavanjeImg4" alt="">
            </div>
        </div>
        <div class="odrzavanjeTextWrapper">
            <p>Održavanje uključuje:</p>
            <ul class="odrzavanjeLista">
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Kontrolu kvaliteta vode (testiranje ph i nivoa hlora)</li>
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Doziranje hemijskih sredstava</li>
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Kontrolu celokupnog sistema</li>
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Čišćenje (usisavanje) bazena</li>
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Ispiranje filtera i kontrola svih filtera i opreme u sklopu bazenske opreme (rasveta, doziranje, pumpe
                    hidromasaže, turbojeta…) </li>
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Vodjenje dnevnika svih izmerenih vrednosti pri svakom dolasku (ph, hlor, temperatura vode, dozirana
                    sredstva …)</li>
                <li><FontAwesomeIcon class="checkIcon" icon="fa-solid fa-check"></FontAwesomeIcon>Ukoliko kupujete hemijska sredstva preko nas isporučićemo ih na vaš bazen besplatno.</li>
            </ul>
            <p>Zbog mnogo faktora kao što su lokacija bazena, veličina bazena, okolnosti korišćenja bazena kontaktirajte
                nas za cenu.</p>
        </div>
    </div>
<Footer/>
</template>

<style>
.renoviranjeNaslov,
.odrzavanjeNaslov {
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0.5em;
    position: relative;
}

.renoviranjeWrapper{
    display: flex;
    justify-content: space-evenly;
    font-family: Comfortaa;
    margin-bottom: 2em;
}
.renoviranjeWrapper p , .odrzavanjeTextWrapper p{
    margin-bottom: 1em;
    line-height: 1.5em;
}
.renoImgWrapper, .renoTextWrapper{
    flex-basis: 45%;
}
.renoImgWrapper img{
    width: 100%;
}
.odrzavanjeLista li{
    margin-bottom: 0.5em;
}
.odrzavanjeWrapper{
    width: 100vw;
    font-family: Comfortaa;
}
.odrzavanjeTextWrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1em auto 0;
    width: 95vw;
}
.odrzavanjeImgWrapper{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 95vw;
}

.beforeAfter{
    position: relative;
    flex-basis: 45%;
}
.beforeAfter img{
    width: 100%;
}
.after{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    animation: fade-in-out 7s infinite;
}

@keyframes fade-in-out {
    0% { opacity: 0; }
    33% { opacity: 1; }
    100% { opacity: 0; }
}

@media (max-width: 1024px) {
    .renoviranjeWrapper{
        flex-direction: column;
        align-items: center;
    }
    .renoImgWrapper{
        width: 50%;
        margin-bottom: 2em;
    }
    .renoTextWrapper p{
        width: 90%;
        margin: 0 auto 1em;
    }
    .beforeAfter{
        margin-bottom: 1em;
    }
}

@media (max-width: 800px) {
    .odrzavanjeImgWrapper{
        flex-direction: column;
    }
    .odrzavanjeNaslov{
        margin: 0.5em 0 0.5em;
    }
    .renoImgWrapper{
        width: 70%;
    }
}
</style>
