<script>
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'
import axios from 'axios'

export default{
    data() {
        return {
            selectedFile: "",
            setImage: "",
            javniS: "javniS",
            privatni:"privatni",
            fontane:"fontane",
            saune:"saune",
            akcijeSlika: "",
            akcijeText: "",
            akcijeText1: "",
            akcijeTip:"",
        }
    },
    methods: {
    ...mapActions(useBazeniStore, ['setLocalStorageSelection', 'getCookie']),
    onFileSelected(event) {
        this.akcijeSlika = event.target.files[0]
    },
    async onUpload($event) {
        this.akcijeTip = $event.target.id
        try {
            let sid = this.getCookie("sid")
            let fd = new FormData()
            if(this.akcijeTip == "akcije") {
                console.log('u if');
                fd.append('text', this.akcijeText)
                fd.append('picture', this.akcijeSlika)
                fd.append('tip', this.akcijeTip)
                fd.append('sid', sid)
            }
            else{
                fd.append('text', this.akcijeText1)
                fd.append('picture', this.akcijeSlika)
                fd.append('tip', this.akcijeTip)
                fd.append('sid', sid)
            }
            let res = await axios.post('https://091v123.mars2.mars-hosting.com/API/admin/admin', fd)
            location.reload()
        } catch (error) {
            console.log(error);
        }
    },
    logout() {
        try {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("sid=")) {
            document.cookie = `${cookie};expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        break;
        }
    }
    location.reload()
        } catch (error) {
            console.log(error);
        }
        },
    },
    computed: {
        ...mapState(useBazeniStore, ['isAdmin']),
    },
    mounted() {
        let sid = this.getCookie("sid")
        if(!sid){
            this.$router.push('/')
        }
    }
}
</script>

<template>
<div class="adminPanel">
    <div class="logout">
        <button class="logoutBtn" @click="logout">Log out</button>
    </div>
    <div class="akcijeNovostiWrapper">
        <div class="adminNav">
            <p class="adminHeaders">Slike</p>
            <ul>
                <li @click="setLocalStorageSelection(this.privatni); this.$router.push('/adminGalerija')">Privatni bazeni</li>
                <li @click="setLocalStorageSelection(this.javniS); this.$router.push('/adminGalerija')">Javni bazeni</li>
                <li @click="setLocalStorageSelection(this.fontane); this.$router.push('/adminGalerija')">Fontane</li>
                <li @click="setLocalStorageSelection(this.saune); this.$router.push('/adminGalerija')">Saune</li>
                <li @click="this.$router.push('/akcije')">Akcije</li>
            </ul>
        </div>
        <div class="akcijeNovosti">
            <p class="adminHeaders">Akcije</p>
            <input @change="onFileSelected($event)" type="file"/>
            <textarea class="textArea" type="text" v-model="akcijeText" placeholder="Tekst za akciju"></textarea>
            <button id="akcije" class="adminBtn" @click="onUpload($event)">Postavi akciju</button>
        </div>
        <div class="akcijeNovosti">
            <p class="adminHeaders">Novosti</p>
            <input @change="onFileSelected($event)" type="file"/>
            <textarea class="textArea" type="text" v-model="akcijeText1" placeholder="Tekst za novosti"></textarea>
            <button id="novosti" class="adminBtn" @click="onUpload($event)">Postavi novost</button>
        </div>
    </div>
</div>
</template>

<style>
.logout{
    width: 90vw;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
}
.logoutBtn{
    background-color: transparent;
    border: 2px solid rgb(206, 19, 19);
    padding: 10px;
    font-family: Quicksand;
    cursor: pointer;
}
.adminNav{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 2em 0;
}
.adminNav ul{
    display: flex;
    font-family: Quicksand;
}
.adminNav ul li{
    font-size: 1.3em;
    margin: 0 1em;
    text-decoration: underline;
    cursor: pointer;
}
.akcijeNovosti{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto 4em;
}
.adminHeaders{
    font-size: 2em;
    font-family: Quicksand;
    margin-bottom: 1em;
}
.textArea{
    width: 70%;
    height: 20em;
    margin-top: 1em;
    font-size: 1.3em;
}
.adminBtn{
    width: 10em;
    border: 2px solid #000;
    background-color: transparent;
    padding: 10px;
    font-size: 1.4em;
    margin: 1em auto;
    cursor: pointer;
}

@media (max-width: 800px) {
    .adminNav ul{
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
    .adminNav ul li{
        flex-basis: 38%;
        margin-bottom: 1em;
    }
}
</style>