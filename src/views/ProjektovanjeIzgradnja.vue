<script>
import axios from 'axios';
import Nav from './Nav.vue';

export default{
    data() {
        return {
            izgradnjaBefore: "",
            izgradnjaAfter: "",
        }
    },
    components:{
        Nav,
    },
    async mounted() {
        try {
            let izgradnja = await axios.get('http://091v123.mars2.mars-hosting.com/API/oprema', {
                params: {
                    fil_type: "izgradnja"
                }
            })
            this.izgradnjaBefore = izgradnja.data.q[0].files_imageURL
            this.izgradnjaAfter = izgradnja.data.q[1].files_imageURL
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<template>
    <Nav/>
    <div class="projektovanjeNaslovWrapper">
        <p class="projektovanjeNaslov">Projektovanje</p>
    </div>
    <div class="projektovanjeWrapper">
        <div class="projImgWrapper">
            <img src="../assets/slika-projektovanje.jpg" alt="Slika projekta">
        </div>
        <div class="projTextWrapper">
            <p>Sa preko 100 uspešno projektovanih bazena iza nas, garantujemo vam vrhunsku stručnost i kvalitetno rešenje za vaš bazen. Naši projektanti su pažljivo odabrani stručnjaci sa bogatim znanjem u oblasti hidrotehnike, arhitekture, građevinarstva i drugih relevantnih disciplina, što nam omogućava da pružimo sveobuhvatne usluge projektovanja bazena, od ideje do realizacije.</p>
            <p>Sarađujemo sa vama tokom celokupnog procesa, slušajući vaše želje i zahteve, i pružajući vam stručne savete kako biste dobili bazen koji savršeno odgovara vašim potrebama i stilu. Naši projektanti su upoznati sa najnovijim trendovima i tehnologijama u svetu bazena, što nam omogućava da vam pružimo inovativna rešenja i da vaš bazen bude jedinstven i atraktivan.</p>
            <p>Pored našeg bogatog iskustva i stručnosti, vodimo računa o vašim potrebama i budžetu. Naši projekti su prilagođeni vašim finansijskim mogućnostima, uz transparentnost u vezi sa cenama i troškovima projekta.</p>
            <p>Ako želite da vaš bazen bude pravi dragulj u vašem dvorištu, sa visokim standardima kvaliteta i dizajna, naš projektni biro je pravi izbor. Kontaktirajte nas danas i dozvolite nam da vam pomognemo u stvaranju vašeg savršenog bazena sa našim licenciranim projektantima i bogatim iskustvom u industriji bazena!</p>
        </div>
        
    </div>
    <div class="izgradnjaNaslovWrapper">
        <p class="izgradnjaNaslov">Izgradnja</p>
    </div>
    <div class="izgradnjaWrapper">
        <div class="izgradnjaTextWrapper">
            <p>Sa ponosom ističemo da smo već izgradili preko 300 bazena širom regiona, stekavši bogato iskustvo i reputaciju kao lideri u ovoj industriji.</p>
            <p>Naš tim stručnjaka sa dugogodišnjim iskustvom u izgradnji bazena, jakuzija i fontana je uvek spreman da prema vašim željama i potrebama kreira vrhunske vodene oaze koje će zadovoljiti sva vaša očekivanja. Bez obzira da li želite klasičan bazen, luksuzan jakuzi ili impresivnu fontanu, mi vam pružamo sveobuhvatne usluge, od planiranja i projektovanja, do izgradnje i održavanja.</p>
            <p>Naša firma se ponosi svojim velikim brojem uspešno završenih projekata, što potvrđuje našu posvećenost kvalitetu i profesionalizmu. Naši inženjeri i graditelji su stručno osposobljeni i up-to-date sa najnovijim trendovima i tehnologijama u industriji, koristeći najbolje materijale i metode kako bismo osigurali dugotrajnost i pouzdanost naših objekata.</p>
            <p>Kao MMD d.o.o., takođe smo specijalizovani za pružanje personaliziranih rešenja prema vašim željama i budžetu. Naši projekti su prilagođeni vašim specifičnim zahtevima i finansijskim mogućnostima, uz transparentnost u vezi sa cenama i troškovima. Naš cilj je da vam pružimo najbolju vrednost za vaš novac i da vam isporučimo vrhunski objekat koji će vas zadovoljiti dugi niz godina.</p>
            <p>Ako želite profesionalnu, pouzdanu i iskusnu kompaniju za izgradnju bazena, jakuzija i fontana, MMD d.o.o. je vaš idealan izbor. Kontaktirajte nas danas i dozvolite nam da vaše vodene snove pretvorimo u stvarnost sa našim bogatim iskustvom, stručnošću i pažnjom prema detaljima!</p>
        </div>
        <div class="izgradnjaImgWrapper">
            <div class="beforeAfter">
                <img :src="this.izgradnjaBefore" alt="">
                <img class="after" :src="this.izgradnjaAfter" alt="">
            </div>
        </div>
    </div>
</template>

<style>
.projektovanjeNaslovWrapper, .izgradnjaNaslovWrapper{
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0.5em;
}
.projektovanjeWrapper, .izgradnjaWrapper{
    display: flex;
    justify-content: space-evenly;
    width: 95vw;
    margin: 0 auto 2em;
    font-family: Comfortaa;
}
.projektovanjeWrapper p, .izgradnjaWrapper p{
    margin-bottom: 1em;
    line-height: 1.5em;
}
.projImgWrapper, .izgradnjaImgWrapper, .izgradnjaTextWrapper, .projTextWrapper{
    flex-basis: 45%;
}
.projImgWrapper img{
    width: 100%;
}
</style>
