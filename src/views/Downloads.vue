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
    display: flex;
    margin-top: 7%;
    margin-bottom: 7%;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 90%;
   
    
}
.downloads {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%; /* Set the width of the container */
  }

  .downloads img {
    flex: 1;
    max-height: 100%; /* Set the maximum height of the image */
    object-fit: contain; /* Ensure the image maintains aspect ratio */
    width: 50%;
  }
  .downloads a {
    margin-top: 1em;
    font-family: Comfortaa;
    cursor: pointer;
  }
  .downloadIcon{
    font-size: 1.5em;
  }
  /* Set the aspect ratio of the image */
  @supports (aspect-ratio: 16/9) {
    .downloads img {
      aspect-ratio: 16/9;
    }
  }

  /* Fallback for browsers that don't support aspect-ratio property */
  @media (max-width: 768px) {
    .downloads img {
      height: auto;
      width: 100%;
    }
  }

</style>