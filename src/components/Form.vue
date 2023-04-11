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
            <form @submit.prevent="submitForm">
                <div class="form_field">
                    <label for="name">Ime:</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>
                <div class="form_field">
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="form.email" required />
                </div>
                <div class="form_field">
                    <label for="phone">Telefon:</label>
                    <input type="number" id="phone" v-model="form.phone" required />
                </div>
                <div class="form_field">
                    <label for="message">Poruka:</label>
                    <textarea id="message" v-model="form.message" required></textarea>
                </div>
                <button class="form_btn" type="submit">Pošalji</button>
            </form>
        </div>
    </div>
</template>

<style>
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
}
input{
    align-self: center;
}
.formLogo{
    width: 20em;
}
.form p{
    font-family: Quicksand;
    font-size: 2em;
}
.form_field {
    margin: 2rem 0;
}
.form_btn{
    padding: auto;
    color: rgb(46, 94, 154);
    font-size: 1em;
    font-weight: 900;
    font-family: Comfortaa;
}
</style>
