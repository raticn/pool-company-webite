<script>

import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Nav,
        Footer,

    },
}
</script>

<template>
    <Nav />
    <div class="renoviranjeNaslov">
        <p>Renoviranje</p>
    </div>
    <div class="renoviranjeWrapper">
        <div class="renoImgWrapper">
            <img src="https://placehold.co/600x600" alt="Slika renoviranje">
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
                vašeg bazena . Održavanje uključuje:</p>
            <ul class="odrzavanjeLista">
                <li>Kontrola kvaliteta vode (testiranje ph i nivoa hlora)</li>
                <li>Doziranje hemijskih sredstava</li>
                <li>Kontrolu celokupnog sistema</li>
                <li>Čišćenje(usisavanje) bazena</li>
                <li>Ispiranje filtera i kontrola svih filtera i opreme u sklopu bazenske opreme(rasveta, doziranje, pumpe
                    hidromasaže , turbojeta…) </li>
                <li>Vodjenje dnevnika svih izmerenih vrednosti pri svakom dolasku (ph,hlor, temperatura vode , dozirana
                    sredstva …)</li>
                <li>Ukoliko kupujete hemijska sredstva preko nas isporučićemo ih na vaš bazen besplatno.</li>
            </ul>
            <p>Zbog mnogo faktora kao što su lokacija bazena, veličina bazena , okolnosti korišćenja bazena kontaktirajte
                nas za cenu.</p>
        </div>
        <div class="odrzavanjeimgWrapper">
            <img src="https://placehold.co/600x600" alt="Slika odrzavanje">
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
    margin: 1em 0 0.5em;
    position: relative;
}

.renoviranjeWrapper , .odrzavanjeWrapper{
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    font-family: Comfortaa;
    margin-bottom: 2em;
}

.renoviranjeWrapper p , .odrzavanjeTextWrapper p{
    margin-bottom: 1em;
    line-height: 1.3em;
}

.renoImgWrapper, .renoTextWrapper, .odrzavanjeTextWrapper,.odrzavanjeimgWrapper {
    flex-basis: 45%;
}
ul.odrzavanjeLista {
  list-style-type: disc;
}





</style>
