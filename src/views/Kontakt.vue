<script>
import Nav from './Nav.vue';

export default {
    components: {
        Nav,
        
    },
    data(){
        return{
            
        }
    },
}
    
</script>

<template>
    <Nav/>
    <div class="wrap">
        <div class="map_holder">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11313.14320641218!2d20.3826455!3d44.8564762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d31e4ececf%3A0xda2a3bdf3b438749!2sMMD%20bazeni!5e0!3m2!1ssr!2srs!4v1681041950859!5m2!1ssr!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="text_holder">
            <p>ŠUMADIJSKA 2, ZEMUN , BEOGRAD </p>
            <p>TELEFON 011 2105719</p>
            <p>E-MAIL: mmdbazeni@gmail.com</p> 
            <p>RADNO VREME : ponedeljak - petak 08:00-17:00</p>
        </div>
    </div>

</template>

<style>
.wrap{
    margin-top: 4em;
    display: flex;
    justify-content: center;
}
.text_holder{
    margin: 20 px;
    padding: 1em;
    color: rgb(46, 94, 154);
    font-size: 1.2em;
    font-weight: 900;
    font-family: Comfortaa;
}
.map_holder{
    margin: 20 px;
    padding: 1em;
}
</style>