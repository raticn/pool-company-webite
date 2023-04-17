<script>
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';

export default{
    components: {
    Nav,
    Footer
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
                    <div class="sredstvo">
                        <img src="../assets/astralpool.jpg" alt="">
                        <p class="sredstvoIme">Ime Proizvoda</p>
                    </div>
                    <div class="sredstvo">
                        <img src="../assets/astralpool.jpg" alt="">
                        <p class="sredstvoIme">Ime Proizvoda</p>
                    </div>
                    <div class="sredstvo">
                        <img src="../assets/astralpool.jpg" alt="">
                        <p class="sredstvoIme">Ime Proizvoda</p>
                    </div>
                    <div class="sredstvo">
                        <img src="../assets/astralpool.jpg" alt="">
                        <p class="sredstvoIme">Ime Proizvoda</p>
                    </div>
                </div>
            </div>
            <div class="hemijskaSredstva">
                <div class="dinotecLogo">
                    <img src="../assets/dinotec_sigl.jpg" alt="">
                </div>
                <p class="hemijaProizvodjacText">Iz Dinotec asortimana izdvajamo najčešće tražena sredstva za obaranje Ph vrednosti vode i hlorisanje vode.</p>
                <div class="sredstvaWrapper">
                    <div class="sredstvo">
                        <img src="../assets/dinochlorine-tecnost.jpg" alt="">
                        <p class="sredstvoIme">Dinochlorine 28 kg</p>
                    
                    </div>
                    <div class="sredstvo">
                        <img src="../assets/dinominus-fluessig.jpg" alt="">
                        <p class="sredstvoIme">DinoMinus 28 kg</p>
                    </div>
                </div>
            </div>
    </div>
    <Footer />
</template>

<style>
.hemijaHeaderWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 6%;
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
}
.sredstvo img{
    width: 100%;
}
.sredstvo:hover{
    border-color:rgb(46, 94, 154);
}
.sredstvoIme{
    padding-bottom: 1em;
}
.astralLogo{
    width: 100vw;
}
.astralLogo img , .dinotecLogo img {
    width: 30%;
    margin: 2em auto;
}
</style>