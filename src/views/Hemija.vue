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
                <p class="hemijaProizvodjac">AstralPool</p>
                <p class="hemijaProizvodjacText">MALI TEXT ASTRAL Lorem ipsum, dolor sit amet consectetur dnsclksncksdl sdnckjsncsk sjdbncksjcbnksjd adipisicing elit. Fugit, porro?</p>
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
                <p class="hemijaProizvodjac">Dinotec</p>
                <p class="hemijaProizvodjacText">MALI TEXT DINOTEC Lorem ipsum, dolor sit amet consectetur adipisicing  ndsjkbc sbdcjskdcb sjkbcsjb s dcsk.cn skc ksncsknc sdelit. Fugit, porro?</p>
                <div class="sredstvaWrapper">
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
    </div>
    <Footer />
</template>

<style>
.hemijaHeaderWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 8%;
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
</style>