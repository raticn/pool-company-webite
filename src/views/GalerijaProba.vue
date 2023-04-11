<!-- <script>
import Nav from './Nav.vue';
export default {
  components: {
        Nav,
        
    },
  mounted() {
    const track = this.$refs.imageWrapper;

    const handleOnDown = e => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = e => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage =
        (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };


    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);
  }
};
</script>

<template>
  <Nav/>
  
  <div id="images_wrapper" ref="imageWrapper" data-mouse-down-at="0" data-prev-percentage="0">
    <img class="image" src="../assets/Privatni/MMDPrivatni01.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni02.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni03.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni04.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni05.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni06.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni07.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni08.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni09.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni10.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni11.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni12.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni13.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni14.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni15.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni16.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni17.jpg" draggable="false"/>
    <img class="image" src="../assets/Privatni/MMDPrivatni18.jpg" draggable="false"/>
  </div>
</template>

<style>
body{
  height:100vh;
  width: 100vw;
  background-color: white;
  margin: 0rem;
  overflow: hidden;
}
  #images_wrapper > .image{
    width:40vmin;
    height:56vmin;
    object-fit: cover;
    object-position: center;
    user-select: none;
  }
  #images_wrapper{
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%,-50%);
  }
</style> -->