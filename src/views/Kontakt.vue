<script>
import Nav from './Nav.vue';

export default {
    components: {
        Nav,
        
    },
    data(){
        return{
            
        }
    },
}
    
</script>

<template>
    <Nav/>
    <div class="wrap">
        <div class="map_holder">

        </div>
        <div class="text_holder">

        </div>
    </div>

</template>

<style>
.wrap{
    display: flex;
    justify-content: center;
}
</style>