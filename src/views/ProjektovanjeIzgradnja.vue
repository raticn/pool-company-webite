<script>
import axios from 'axios';
import Nav from './Nav.vue';

export default{
    data() {
        return {
            izgradnjaBefore: "",
            izgradnjaAfter: "",
        }
    },
    components:{
        Nav,
    },
    async mounted() {
        try {
            let izgradnja = await axios.get('http://091v123.mars2.mars-hosting.com/API/oprema', {
                params: {
                    fil_type: "izgradnja"
                }
            })
            this.izgradnjaBefore = izgradnja.data.q[0].files_imageURL
            this.izgradnjaAfter = izgradnja.data.q[1].files_imageURL
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<template>
    <Nav/>
    <div class="projektovanjeNaslovWrapper">
        <p class="projektovanjeNaslov">Projektovanje</p>
    </div>
    <div class="projektovanjeWrapper">
        <div class="projImgWrapper">
            <img src="../assets/slika-projektovanje.jpg" alt="Slika projekta">
        </div>
        <div class="projTextWrapper">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

        </div>
        
    </div>
    <div class="izgradnjaNaslovWrapper">
        <p class="izgradnjaNaslov">Izgradnja</p>
    </div>
    <div class="izgradnjaWrapper">
        <div class="izgradnjaTextWrapper">

        </div>
        <div class="odrzavanjeImgWrapper">
            <div class="beforeAfter">
                <img :src="this.izgradnjaBefore" alt="">
                <img class="after" :src="this.izgradnjaAfter" alt="">
            </div>
        </div>
    </div>
</template>

<style>
.projektovanjeNaslovWrapper{
    font-family: Quicksand;
    font-size: 3em;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5em 0 0.5em;
}
.projektovanjeWrapper{
    display: flex;
    justify-content: space-evenly;
    font-family: Comfortaa;
    margin-bottom: 2em;
}
.projImgWrapper img{
    width: 40%;
}
</style>
