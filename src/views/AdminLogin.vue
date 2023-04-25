<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import { useBazeniStore } from '../stores/bazeniStore'

export default{
    data() {
        return {
            username: "",
            password: "",
        }
    },
    computed: {
        ...mapState(useBazeniStore, ['sid', 'isAdmin', 'wrongInfo']),
    },
    methods: {
        ...mapActions(useBazeniStore, ['login']),
        async adminLogin() {
            await this.login(this.username, this.password)
            let wrongInfo = this.wrongInfo
            console.log('usao', wrongInfo);
            console.log('isadmin', this.isAdmin);
            if(wrongInfo ){
                alert('Username ili lozinka nisu tačni!')
                return
            }
            else{
                if(this.isAdmin == 1) {
                this.$router.push('/adminPanel')
                }
                else{
                console.log("Nije admin");
                }
            }
        },
    //     async login(username, password) {
    //         console.log("nesto");
    //   this.wrongInfo = null
    //   try {
    //   let res = await axios.get('http://091v123.mars2.mars-hosting.com/API/auth/login' , {params: {
    //     username: username,
    //     password: password
    //   }})
    //   console.log('res',res);
    //   console.log('res',username, password);
    //   this.sid = res.data.sid
    //   document.cookie = `sid=${this.sid};expires=1200000;`
    //   this.isAdmin = res.data.sessionUser.isAdmin
    //   console.log(res);
    //   console.log(this.sid);
    //   } catch (error) {
    //     console.log(error);
        // if(error.response.data.error == 'User login details are incorrect'){
        //   this.wrongInfo = error.response.data.error
        // }
        // this.wrongInfo = error.response.data.error
        // console.log(this.wrongInfo);
    //   }
    },
        
    }
// }
</script>

<template>
<div class="login">
    <p>Username:</p>
    <input v-model="username" class="adminLogin" type="text">
    <p>Lozinka:</p>
    <input v-model="password" class="adminLogin" type="password">
    <button class="loginBtn" @click="adminLogin">Log in</button>
</div>
</template>

<style>
.login{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 20% auto 0;
}
.login p {
    font-size: 1.3em;
    font-family: Quicksand;
}
.adminLogin{
    font-size: 2em;
    font-family: Quicksand;
}
.loginBtn{
    width: 5em;
    border: 2px solid #000;
    background-color: transparent;
    padding: 10px;
    font-size: 1.4em;
    margin: 1em auto;
    cursor: pointer;
}
</style>