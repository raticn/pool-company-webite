<script>
import Nav from './Nav.vue';
import Footer from '../components/Footer.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default{
    components:{
        Nav,
        Footer,
        FontAwesomeIcon,
    },
    created(){
        library.add(faFileArrowDown)
    }

    
}


</script>

<template>
    <Nav/>
    <div class="downloadsWrapper">
        <div class="downloads">
            <img src="../assets/uputstvo-hemija.jpg" alt="Uputstvo">
            <a href="../assets/UPUTSTVO-HEMIJA.rtf" download> <FontAwesomeIcon class="downloadIcon" icon="fa-solid fa-file-arrow-down"></FontAwesomeIcon> Uputstvo za hemijska sredstva</a>
        </div>
        <div class="downloads">
            <img src="../assets/tabela-hemija.jpg" alt="Tabela">
            <a href="../assets/TABELA-HEMIJA.rtf" download> <FontAwesomeIcon class="downloadIcon" icon="fa-solid fa-file-arrow-down"></FontAwesomeIcon> Tabela za hemijska sredstva</a>
        </div> 
    </div>
    <Footer/>

</template>


<style>
.downloadsWrapper{
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 80px 0 2em;
}
.downloads{
  flex-basis: 22%;
  margin: 2em 0;
}
.downloads img{
  width: 100%;
}
  @supports (aspect-ratio: 16/9) {
    .downloads img {
      aspect-ratio: 16/9;
    }
  }

@media (max-width: 800px) {
  .downloads{
    flex-basis: 30%;
  }
}
@media (max-width: 550px) {
  .downloads{
    flex-basis: 40%;
  }
}

</style>