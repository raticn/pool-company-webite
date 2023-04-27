<script>
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmarkCircle, faArrowCircleLeft, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import Nav from './Nav.vue'

export default {
    data() {
        return {
            url: "",
            galerijaSelection:[],
            naslov:"",
            openPopup: false,
        }
    },
    components: {
        FontAwesomeIcon,
    },
    methods: {
        getUrl(image) {
            this.url = image.files_imageURL
            this.openPopup = !this.openPopup
            document.querySelector(".top").style.display = "none"
            document.querySelector(".galerijaWrapper").style.filter = "blur(20px)"
            document.querySelector(".galerijaHeader").style.filter = "blur(10px)"
            document.querySelector(".panelLink").style.filter = "blur(10px)"
        },
        noBlur() {
            document.querySelector(".galerijaWrapper").style.filter = "none"
            document.querySelector(".galerijaHeader").style.filter = "none"
            document.querySelector(".panelLink").style.filter = "none"
            document.querySelector(".top").style.display = "block"
        },
        async priprema() {
            let selectedImages = localStorage.getItem('selected');
            let selectedText = localStorage.getItem('selectedText');
            this.naslov=selectedText;

            try {
                let images = await axios.get('http://091v123.mars2.mars-hosting.com/API/pictures', {
                    params: {
                        fil_type: selectedImages
                    }
                })
                console.log(images);
                this.galerijaSelection = images.data.q
            } catch (error) {
                console.log(error);
            }
        },
        onFileSelected(event) {
        this.selectedFile = event.target.files[0]
        this.setImage = !this.setImage
        },
        async onUpload() {
            try {
                let sid = this.getCookie("sid")
                let fd = new FormData()
                let sidData = new FormData()
                fd.append('fil_picture', this.selectedFile)
                fd.append('sid', sid)
                sidData.append('sid', sid)
                let res = await axios.post('http://071m123.e2.mars-hosting.com/api/auth/profile',sidData)
                let res1 = await axios.put('http://071m123.e2.mars-hosting.com/api/auth/profile', fd)
                this.setImage =!this.setImage
                window.location.reload()
                
            } catch (error) {
                console.log(error);
            }
        },
        
    },
    mounted() {
        window.addEventListener("scroll", function () {
            let scrollHeight = this.window.pageYOffset
            if (this.document.querySelector(".toTop")!=null){
            if (!this.openPopup) {
                if (scrollHeight > 50) {
                    // console.log(this.document.querySelector(".toTop"));
                this.document.querySelector(".toTop").style.display = "block"
            }
            else {
                this.document.querySelector(".toTop").style.display = "none"
            }
            }
        }
        })
        this.priprema();
    },
    created() {
        library.add(faXmarkCircle, faArrowCircleLeft, faCircleArrowUp)
    }
}
</script>

<template>
    <div id="top">
        <div class="panelLink">
            <p @click="this.$router.push('/adminPanel')">Početna</p>
        </div>
        <div class="galerijaHeader">
            <p>{{naslov}}</p>
        </div>
        <div class="addImg">
            <input @change="onFileSelected($event)" type="file"/>
            <button class="addImgBtn" @click="onUpload">+Dodaj novu sliku</button>
        </div>
        <div class="galerijaWrapper">
            <div v-for="image in this.galerijaSelection" class="galerijaSekcija">
                <img class="galerijaImg" :src="image.files_imageURL" alt="slike" loading="lazy">
                <button class="deleteImg" @click="getUrl(image);">Obrisi sliku</button>
            </div>
        </div>
        <div v-if="this.openPopup"  class="galerijaPopup">
            <FontAwesomeIcon class="xmark" icon="fa-solid fa-xmark-circle"
            @click="noBlur(); this.openPopup = !this.openPopup"></FontAwesomeIcon>
            <img class="adminImgPopup" :src="this.url" alt="slike">
            <p>Da li ste sigurni da želite da obrišete ovu sliku?</p>
            <div class="popupBtns">
                <button class="yesBtn" @click="deletePicture(image.fil_id)">Da</button>
                <button class="noBtn" @click="noBlur();this.openPopup = !this.openPopup">Ne</button>
            </div>
        </div>
        <a  class="top" href="#top">
            <FontAwesomeIcon class="toTop" icon="fa-solid fa-circle-arrow-up"></FontAwesomeIcon>
        </a>
    </div>
</template>

<style>
* {
    scroll-behavior: smooth;
}
.panelLink{
    font-size: 2em;
    font-family: Quicksand;
    display: flex;
    justify-content: center;
    width: 100vw;
    margin: 1em auto 0;
    text-decoration: underline;
    cursor: pointer;
}
.addImg{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 2em auto;
}
.addImgBtn{
    width: 10em;
    border: 2px solid #000;
    background-color: transparent;
    padding: 10px;
    font-size: 1.4em;
    cursor: pointer;
}
.addImgBtn:hover{
    border-color: rgb(46, 191, 46);
    color: rgb(46, 191, 46);
}
.galerijaSekcija {
    flex-basis: 31%;
    margin: 1em 0;
    text-align: center;
}
.adminImgPopup {
    width: 60%;
    border-radius: 20px;
}
.galerijaPopup p{
    font-size: 2em;
    margin: 1em 0;
    font-family: Quicksand;
}
.popupBtns{
    display: flex;
}
.yesBtn, .noBtn{
    border: none;
    color: #fff;
    padding: 10px 20px;
    font-family: Quicksand;
    font-size: 1.2em;
    cursor: pointer;
    margin: 0 1em;
}
.yesBtn{
    background-color: rgb(46, 191, 46);
}
.noBtn{
    background-color: rgb(206, 19, 19);
}
.deleteImg{
    border: none;
    background-color: rgb(206, 19, 19);
    color: #fff;
    padding: 10px;
    font-family: Quicksand;
    font-size: 1.2em;
    cursor: pointer;
    margin-bottom: 1em;
}

@media (max-width: 800px) {
    .adminImgPopup{
        width: 90%;
    }
    .galerijaPopup p{
        text-align: center;
    }
}
</style>