<script>

</script>

<template>
    <div class="footer_wrapper">
        <div class="footer_info">
            <!-- <img class="footer_logo" src="../assets/logo.png" alt="MMD logo"> -->
            <p>MMD d.o.o. bazeni, fontane i saune Šumadijska 2, 11080 Zemun, Beograd, Srbija</p>
            <p>+381 11 2105719</p>
            <p>mmdbazeni@gmail.com</p>
        </div>
        <div class="footer_links">
            <p>Mapa sajta</p>
            <ul class="quicklinks">
                <li>Početna</li>
                <li>Galerija</li>
                <li>Oprema za bazene</li>
                <li>Hemijska sredstva za bazene</li>
                <li>Novosti</li>
                <li>Kotakt</li>
                <li>Projektovanje i izgradnja</li>
                <li>Renoviranje i održavanje</li>
                <li>Asortiman</li>
            </ul>

        </div>
    </div>
</template>

<style>
.footer_wrapper{
    color:#fff;
    font-family: Comfortaa;
    font-weight: bold;
    display: flex;
    justify-content: flex-start ;
    width: 100vw;
    height: 30em;
    background-color:grey;
    /* background-image: url('../assets/voda.jpg');
    background-repeat: no-repeat ;
    background-size: cover; */
}
.footer_info{
    font-size: 1.2em;
    color:#fff;
    width: 16em;
    margin: 2em;
    flex-basis: 33%;
}
.footer_logo{
    width: 7em;
}
.quicklinks{
    color:#fff;
    display: flex;
    flex-basis: 33%;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

}

</style>