<script>
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'

export default{
    data() {
        return {
            selectedFile: "",
            setImage: "",
            akcijaText: "",
            novostiText: "",
            javniS: "javniS",
            privatni:"privatni"
        }
    },
    methods: {
    ...mapActions(useBazeniStore, ['setLocalStorageSelection']),
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
    }
}
</script>

<template>
<div class="adminPanel">
    <div class="akcijeNovostiWrapper">
        <div class="adminNav">
            <p class="adminHeaders">Slike</p>
            <ul>
                <li @click="setLocalStorageSelection(this.privatni); this.$router.push('/adminGalerija')">Privatni bazeni</li>
                <li @click="setLocalStorageSelection(this.javniS); this.$router.push('/adminGalerija')">Javni bazeni</li>
                <li>Fontane</li>
                <li>Saune</li>
            </ul>
        </div>
        <div class="akcijeNovosti">
            <p class="adminHeaders">Akcije</p>
            <input @change="onFileSelected($event)" type="file"/>
            <textarea class="textArea" type="text" v-model="akcijaText" placeholder="Tekst za akciju"></textarea>
            <button class="adminBtn" @click="onUpload">Postavi akciju</button>
        </div>
        <div class="akcijeNovosti">
            <p class="adminHeaders">Novosti</p>
            <input @change="onFileSelected($event)" type="file"/>
            <textarea class="textArea" type="text" v-model="novostiText" placeholder="Tekst za novosti"></textarea>
            <button class="adminBtn" @click="onUpload">Postavi novost</button>
        </div>
    </div>
</div>
</template>

<style>
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
    width: 40%;
    margin: 0 auto 4em;
}
.adminHeaders{
    font-size: 2em;
    font-family: Quicksand;
    margin-bottom: 1em;
}
.textArea{
    width: 50%;
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
</style>