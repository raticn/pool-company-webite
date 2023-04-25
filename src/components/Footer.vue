<script>
import { RouterLink, RouterView } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
    components: {
        FontAwesomeIcon,
    },
    created() {
        library.add(faLocationDot, faPhone, faEnvelope)
    }
}
</script>

<template>
    <div class="footer">
        <div class="footer_wrapper">
            <div class="footer_info">
                <!-- <img class="footer_logo" src="../assets/logo.png" alt="MMD logo"> -->
                <p><FontAwesomeIcon class="footerIcons" icon="fa-solid fa-location-dot"></FontAwesomeIcon> MMD d.o.o. bazeni, fontane i saune Šumadijska 2, 11080 Zemun, Beograd, Srbija</p>
                <p><FontAwesomeIcon class="footerIcons" icon="fa-solid fa-phone"></FontAwesomeIcon>+381 11 2105719</p>
                <p><FontAwesomeIcon class="footerIcons" icon="fa-solid fa-envelope"></FontAwesomeIcon>mmdbazeni@gmail.com</p>
            </div>
            <div class="footer_links">
                <p>Mapa sajta</p>
                <ul class="quicklinks">
                    <RouterLink to="/"> <li>Početna</li> </RouterLink>
                    <RouterLink to="/galerija"> <li>Galerija</li> </RouterLink>
                    <RouterLink to="/bazenskaOprema"><li>Bazenska oprema</li></RouterLink> 
                    <RouterLink to="/hemijskaSredstva"><li>Hemijska sredstva za bazene</li></RouterLink>
                    <RouterLink to="/akcije"><li>Akcije</li></RouterLink>
                    <RouterLink to="/kontakt"> <li>Kontakt</li> </RouterLink>
                    <RouterLink to="/projektovanjeIzgradnja"><li>Projektovanje i izgradnja bazena</li></RouterLink>
                    <RouterLink to="/renoviranjeOdrzavanje"><li>Renoviranje i održavanje</li></RouterLink>
                    <RouterLink to="/reference"><li>Reference</li></RouterLink>
                </ul>
            </div>
        </div>
        <div class="copyright">
            &copy; 2023 MMD d.o.o
        </div>
    </div>
</template>

<style>
.footer{
    width: 100vw;
    background-color:rgb(63, 63, 63);
}
.footer_wrapper{
    color:#fff;
    font-family: Comfortaa;
    display: flex;
    justify-content: flex-start ;
    align-items: center;
    
}
.footer_info{
    font-size: 1.2em;
    color:#fff;
    width: 16em;
    margin: 2em;
    flex-basis: 33%;
    font-weight: bold;
}
.footer_info p{
    margin: 1em 0;
    line-height: 1.5em;
}
.footer_logo{
    width: 7em;
}
.footer_links{
    color:#fff;
    display: flex;
    flex-basis: 60%;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content: space-between;
}
.footer_links p{
    font-weight: bold;
    font-size: 1.2em;
    margin: 1em 0;
}
.quicklinks{
    display: flex;
    height: 15em;
    flex-direction: column;
    flex-wrap:wrap;
    justify-content: space-between;
    
}
.quicklinks li{
    margin: 1em 0;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
}
.copyright{
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
    font-family: Comfortaa;
}
.footerIcons{
    margin-right: 0.5em;
}
.footer a:link{
    color:#fff;
}
.footer a:visited{
    color: antiquewhite;
}
.footer a:hover, a:active{
    color: #fff;
}
</style>