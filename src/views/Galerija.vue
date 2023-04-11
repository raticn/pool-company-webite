<script>

</script>

<template>
  <div id="images_wrapper">
    <img class="image" src="../assets/Privatni/MMDPrivatni01.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni02.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni03.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni04.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni05.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni06.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni07.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni08.jpg"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni09.jpg"/>
  </div>
</template>

<style>
body{
  height:100vh;
  width: 100vw;
  background-color: black;
  margin: 0rem;
  overflow: hidden;
}
  #images_wrapper > .image{
    width:40vmin;
    height:56vmin;
    object-fit: cover;
    object-position: center;
  }
  #images_wrapper{
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%,-50%);
  }
</style>