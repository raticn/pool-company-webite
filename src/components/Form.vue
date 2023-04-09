<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
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
        },
    },
};
</script>

<template>
    <div class="form_wrap">
        <form @submit.prevent="submitForm">
            <div class="form_field">
                <label for="name" style="display: block; margin-bottom: 0.5rem;">Ime:</label>
                <input type="text" id="name" v-model="form.name" required />
            </div>
            <div class="form_field">
                <label for="email" style="display: block; margin-bottom: 0.5rem;">Email:</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="form_field">
                <label for="message" style="display: block; margin-bottom: 0.5rem;">Poruka:</label>
                <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button class="form_btn" type="submit">Pošalji</button>
        </form>
    </div>
</template>

<style>
.form_wrap{
    display: flex;
    align-content: center;
    padding: 100px;
    color: rgb(46, 94, 154);
    font-size: 1.2em;
    font-weight: 900;
    font-family: Comfortaa;
}
.form_field {
    margin-bottom: 1rem;
    
}
.form_btn{
    padding: auto;
    color: rgb(46, 94, 154);
    font-size: 1em;
    font-weight: 900;
    font-family: Comfortaa;
}
</style>
