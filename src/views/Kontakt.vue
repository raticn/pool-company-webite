<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Nav from './Nav.vue';
import Form from '../components/Form.vue';
export default {
    components: {
        Nav,
        Form,
        FontAwesomeIcon,
    },
    data(){
        return{
            
        }
    },
    mounted() {
    window.scrollTo(0, 0);
    },
    created() {
        library.add(faLocationDot, faPhone, faEnvelope, faClock)
    }
}
    
</script>

<template>
    <Nav/>
    <div class="kontakt">
        <div class="map_holder">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5656.573898576536!2d20.379310247281605!3d44.856452833266246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d31e4ececf%3A0xda2a3bdf3b438749!2sMMD%20bazeni!5e0!3m2!1ssr!2srs!4v1681301340047!5m2!1ssr!2srs" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="text_holder">
            <p><FontAwesomeIcon  class="kontaktIcons" icon="fa-solid fa-location-dot"></FontAwesomeIcon>ŠUMADIJSKA 2, ZEMUN , BEOGRAD </p>
            <p><FontAwesomeIcon  class="kontaktIcons" icon="fa-solid fa-phone"></FontAwesomeIcon>TELEFON: 011 2105719</p>
            <p><FontAwesomeIcon  class="kontaktIcons" icon="fa-solid fa-envelope"></FontAwesomeIcon>E-MAIL: mmdbazeni@gmail.com</p> 
            <p><FontAwesomeIcon  class="kontaktIcons" icon="fa-solid fa-clock"></FontAwesomeIcon>RADNO VREME: Ponedeljak - Petak 08:00-17:00</p>
        </div>
    </div>
    
    <div class="form">
        <Form/>
    </div>

</template>

<style>
.kontakt{
    margin-top: 4em;
    display: flex;
    justify-content: center;
}
.text_holder{
    margin: 20px;
    padding: 1em;
    color: rgb(46, 94, 154);
    font-size: 1.2em;
    font-weight: 900;
    font-family: Comfortaa;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.map_holder{
    margin: 20px;
    padding: 1em;
}
.kontaktIcons{
    padding-right: 0.7em;
}
</style>