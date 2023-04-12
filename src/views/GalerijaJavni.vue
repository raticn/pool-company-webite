<template>
    <div class="gallery">
      <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="row">
        <img v-for="(picture, pictureIndex) in row" :key="pictureIndex" :src="picture" alt="Picture" class="picture" @click="showPicture(pictureIndex, rowIndex)">
      </div>
  
      <div v-if="showPopup" class="popup">
        <img :src="popupPicture" alt="Picture" class="popup-picture">
        <button class="popup-prev" @click="showPrevPicture">&lt;</button>
        <button class="popup-next" @click="showNextPicture">&gt;</button>
        <button class="popup-close" @click="closePopup">&times;</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        rows: [
          ['picture1.jpg', 'picture2.jpg', 'picture3.jpg', 'picture4.jpg', 'picture5.jpg'],
          ['picture6.jpg', 'picture7.jpg', 'picture8.jpg', 'picture9.jpg', 'picture10.jpg'],
          ['picture11.jpg', 'picture12.jpg', 'picture13.jpg', 'picture14.jpg', 'picture15.jpg'],
          ['picture16.jpg', 'picture17.jpg', 'picture18.jpg', 'picture19.jpg', 'picture20.jpg']
        ],
        showPopup: false,
        popupPictureIndex: null,
        popupRowIndex: null
      }
    },
    computed: {
      popupPicture() {
        if (this.popupPictureIndex !== null && this.popupRowIndex !== null) {
          return this.rows[this.popupRowIndex][this.popupPictureIndex]
        } else {
          return ''
        }
      }
    },
    methods: {
      showPicture(pictureIndex, rowIndex) {
        this.popupPictureIndex = pictureIndex
        this.popupRowIndex = rowIndex
        this.showPopup = true
      },
      closePopup() {
        this.popupPictureIndex = null
        this.popupRowIndex = null
        this.showPopup = false
      },
      showNextPicture() {
        if (this.popupPictureIndex !== null && this.popupRowIndex !== null) {
          const row = this.rows[this.popupRowIndex]
          const nextIndex = (this.popupPictureIndex + 1) % row.length
          this.popupPictureIndex = nextIndex
        }
      },
      showPrevPicture() {
        if (this.popupPictureIndex !== null && this.popupRowIndex !== null) {
          const row = this.rows[this.popupRowIndex]
          const prevIndex = (this.popupPictureIndex - 1 + row.length) % row.length
          this.popupPictureIndex = prevIndex
        }
      }
    }
  }
  </script>
  
  <style>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .row {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .picture {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 5px;
    cursor: pointer;
  }
  
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center
  }
  
  
  