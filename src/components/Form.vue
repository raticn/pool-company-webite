<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
                phone: '',
            },
        };
    },
    methods: {
        submitForm() {
            // Submit the form data to your server here
            console.log(this.form);
            // Clear the form
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
            this.form.phone = '';
        },
    },
};
</script>

<template>
    <div class="form_wrap">
        <img class="formLogo" src="../assets/transpLogo.jpg" alt="">
        <div class="form">
            <p>Kontaktirajte nas</p>
            <form id="form" @submit.prevent="submitForm">
                <div class="form_info">
                    <div class="form_field">
                        <input type="text" id="name" v-model="form.name" required />
                        <label class="label" for="name">Ime:</label>
                    </div>
                    <div class="form_field">
                        <input type="email" id="email" v-model="form.email" required />
                        <label class="label" for="email">Email:</label>
                    </div>
                    <div class="form_field">
                        <input type="text" id="phone" v-model="form.phone" required />
                        <label class="label" for="phone">Telefon:</label>
                    </div>
                </div>
                <div class="form_message">
                    <div class="form_field">
                        <textarea id="message" v-model="form.message" required placeholder="Poruka"></textarea>
                        <button class="form_btn" type="submit">Pošalji</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style>
#form{
    display: flex;
}
.form_wrap{
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
    margin: 2em 0;
}
.form{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: rgb(46, 94, 154);
    font-size: 1.2em;
    font-family: Comfortaa;
    flex-basis: 50%;
}
input{
    align-self: center;
}
.form_field{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 15px 0;
}

.label{
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    color: #1d1c1c;
    font-family: Comfortaa;
    font-size: 0.8em;
}
input{
    margin: 15px 0;
    height: 30px;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom:1px solid #1d1c1c ;
    color: #1d1c1c;
    font-family: Comfortaa;
    font-weight: bold;
    font-size: 1em;
}
input:focus ~ .label {
    top: -3px;
    font-size: 0.5em;
    color: rgb(24, 116, 205);
}
input:focus{
    border-bottom:1px solid rgb(24, 116, 205) ;
}
.formLogo{
    width: 20em;
}
.form p{
    font-family: Quicksand;
    font-size: 2em;
}
.form_btn{
    border: none;
    background-color: rgb(46, 94, 154);
    padding: 10px;
    width: 5em;
    color: #fff;
    font-size: 1em;
    font-weight: 900;
    font-family: Comfortaa;
    margin-top: 1em;
    cursor: pointer;
}

.form_message .form_field{
    width: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#message{
    width: 20em;
    height: 12em;
}
</style>
