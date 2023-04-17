<script>
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';

export default {
    components: {
        Nav,
        Footer
    }
}
</script>

<template>
    <Nav/>
    
<div class="bazenskaOpremaWrapper">
    <div class="sideBar">
        <p>Oprema za privatne bazene</p>
        <ul>
            <li>Pumpa</li>
            <li>Filter</li>
            <li>njxan</li>
            <li>axasx</li>
            <li>asxasx</li>
        </ul>
        <p>Oprema za javne bazene</p>
        <ul>
            <li>Pumpa</li>
            <li>Filter</li>
            <li>njxan</li>
            <li>axasx</li>
            <li>asxasx</li>
        </ul>
    </div>
    <div class="bazenskaOprema">
        <div class="opremaText">
            <p>U ponudi imamo opremu proizvodjača AstralPool - Fluidra. Kao najveći svetski proizvodjač i prodavac bazenske opreme sa tradicijom dugom preko 50 godina,oprema Astrala se pokazala kao bazenska oprema sa najbolji odnosom cene i kvaliteta.</p>
            <p>Sa minimalnim brojem reklamacija , obezbedjenim servisom i ponudom celokupne bazenske opreme AstralPool se probio do samog svetskog vrha.</p>
            <p>Sedište firme se nalazi u Barseloni u Španiji a proizvodni pogoni koji snabdevaju Evropu se takodje nalaze u EU.</p>
            <p>U ponudi imamo opremu za privatne bazene i za javne bazene. U zavisnosti šta Vam je potrebno možemo Vam ponuduti:</p>
        </div>
        <div class="oprema">
            <img src="../assets/pumpa.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum doloremque voluptatibus dolore? Neque voluptates debitis voluptatum nisi labore voluptate.</p>
        </div>
        <div class="oprema">
            <img src="../assets/filter.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum doloremque voluptatibus dolore? Neque voluptates debitis voluptatum nisi labore voluptate.</p>
        </div>
    </div>
</div>
<!-- <Footer/> -->
</template>

<style>
.opremaText{
    margin-top: 7%;
}
.bazenskaOpremaWrapper{
    display: flex;
}
.sideBar{
    flex-basis: 30%;
    margin-top: 7%;
}
.sideBar li{
    margin: 1em 0 0 2em;
    cursor: pointer;
}
/* .bazenskaOprema{

} */
.oprema{
    display: flex;
    align-items: center;
}
.oprema img{
    width: 300px;
}
</style>