<script>
import {RouterLink, RouterView} from "vue-router"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default{
    data() {
        return {
            bars: false,
        }
    },
    components: {
        FontAwesomeIcon,
    },
    created() {
        library.add(faBars)
    }
}
</script>

<template>
    <nav>
        <div class="nav1">
            <RouterLink to="/"> <img class="navLogo" src="../assets/logo-no-background-cut.png" alt=""></RouterLink>
            <ul class="linkovi">
                <!-- <RouterLink to="/adminLogin"><li class="link">Login</li></RouterLink> -->
                <RouterLink to="/"><li class="link">Početna</li></RouterLink>
                <RouterLink to="/galerija"><li class="link"> Galerija </li></RouterLink>
                <RouterLink to="/bazenskaOprema"><li class="link">Bazenska oprema</li></RouterLink> 
                <RouterLink to="/hemijskaSredstva"><li class="link">Hemijska sredstva</li></RouterLink> 
                <RouterLink to="/akcije"><li class="link">Akcije</li></RouterLink> 
                <RouterLink to="/kontakt"><li class="link"> Kontakt </li></RouterLink>
            </ul>
        </div>
        <div class="nav2">
            <div class="menu">
                <FontAwesomeIcon @click="this.bars = !this.bars" class="bars" icon="fa-solid fa-bars"></FontAwesomeIcon>
                <RouterLink to="/"> <img class="navLogo" src="../assets/logo-no-background-cut.png" alt=""></RouterLink>
            </div>
            <ul v-if="bars" class="menuLinks">
                <RouterLink to="/"><li class="menuLink">Početna</li></RouterLink>
                <RouterLink to="/galerija"><li class="menuLink"> Galerija </li></RouterLink>
                <RouterLink to="/bazenskaOprema"><li class="menuLink">Bazenska oprema</li></RouterLink> 
                <RouterLink to="/hemijskaSredstva"><li class="menuLink">Hemijska sredstva</li></RouterLink> 
                <RouterLink to="/akcije"><li class="menuLink">Akcije</li></RouterLink> 
                <RouterLink to="/kontakt"><li class="menuLink"> Kontakt </li></RouterLink>
            </ul>
        </div>
    </nav>
</template>

<style>
.nav1{
    width: 100%;
    overflow-y: hidden;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255,255,255, 0.8);
    z-index: 100;
    border-bottom: 1px solid rgb(46, 94, 154);
    box-shadow: 0 0 10px rgb(46, 94, 154);
}
.navLogo{
    width: 8em;
    margin-left: 2em;
}
.linkovi{
    display: flex;
    justify-content: center;
}
.link{
    list-style: none;
    padding:1em ;
    color: rgb(46, 94, 154);
    font-size: 1.2em;
    font-weight: 900;
    font-family: Comfortaa;
    cursor: pointer;
    box-sizing: border-box;
}
nav a{
    text-decoration: none;
}
a.router-link-active .link, a.router-link-active .menuLink{
    background-color: rgb(46, 94, 154);
    border-bottom: 3px solid rgb(46, 94, 154);    
}
a.router-link-active li{
    color: #fff;
}

.nav2{
    display: none;
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;
}
.menu{
    display: flex;
    align-items: center;
    padding: 0.5em 0;
}
.bars{
    color: rgb(46, 94, 154);
    margin-left: 1em;
    font-size: 1.5em;
}
.menuLink{
    list-style: none;
    padding: 0.7em ;
    color: rgb(46, 94, 154);
    font-size: 1em;
    font-weight: 900;
    font-family: Comfortaa;
    cursor: pointer;
    box-sizing: border-box;
}

@media (min-width: 900px) and (max-width: 1200px) {
    .link{
        font-size: 1em;
        padding: 0.8em;
    }
}

@media (max-width: 899px) {
    .nav1{
        display: none;
    }
    .nav2{
        display: block;
    }
}
</style>