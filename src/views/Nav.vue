<script>

export default {

}
</script>

<template>
    <nav>
        <div class="nav">
            <img class="logo" src="../assets/logo.png" alt="">
            <ul class="linkovi">
                <li class="link">Početna</li>
                <li class="link">Galerija</li>
                <li class="link">Bazenska oprema</li>
                <li class="link">Novosti</li>
                <li class="link">Kontakt</li>
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
    background-color: rgba(255,255,255, 0.5);
    z-index: 10;
}
.logo{
    width: 6em;
    margin-left: 2em;
}
.linkovi{
    display: flex;
    
}
.link{
    list-style: none;
    margin:1em 2em 1em 0;
    color: rgb(46, 94, 154);
    font-size: 1.2em;
    font-weight: 900;
    font-family: Comfortaa;
}
</style>