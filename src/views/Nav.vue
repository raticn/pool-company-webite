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
                <li class="link"><RouterLink to="/"> Početna </RouterLink></li>
                <li class="link"><RouterLink to="/galerija"> Galerija </RouterLink></li>
                <li class="link">Bazenska oprema</li>
                <li class="link">Hemijska sredstva</li>
                <li class="link">Novosti</li>
                <li class="link"><RouterLink to="/kontakt"> Kontakt </RouterLink></li>

            </ul>
        </div>
    </nav>
</template>

<style>
.nav{
    width: 100%;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255,255,255, 0.8);
    z-index: 10;
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
}
.link:hover{
    border-bottom: 2px solid rgb(46, 94, 154);
}
a:link, a:visited, a:hover, a:active{
    color: rgb(46, 94, 154);
    text-decoration: none;
}
</style>