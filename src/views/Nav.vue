<script>
import {RouterLink, RouterView} from "vue-router"

export default {

}
</script>

<template>
    <nav>
        <div class="nav">
            <RouterLink to="/"> <img class="logo" src="../assets/logo.png" alt=""></RouterLink>
            <ul class="linkovi">
                <RouterLink to="/"><li class="link">Početna </li></RouterLink>
                <RouterLink to="/galerija"><li class="link"> Galerija </li></RouterLink>
                <RouterLink to="/bazenskaOprema"><li class="link">Bazenska oprema</li></RouterLink> 
                <RouterLink to="/hemijskaSredstva"><li class="link">Hemijska sredstva</li></RouterLink> 
                <li class="link">Novosti</li>
                <RouterLink to="/kontakt"><li class="link"> Kontakt </li></RouterLink>

            </ul>
        </div>
    </nav>
</template>

<style>
.nav{
    width: 100%;
    height: 60px;
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
.logo{
    width: 6em;
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
    border-bottom: 2px solid transparent;
}
.link:hover{
    border-bottom-color: rgb(46, 94, 154);
}
.nav a:link,.nav a:visited,.nav a:hover,.nav a:active{
    color: rgb(46, 94, 154);
    text-decoration: none;
}
</style>