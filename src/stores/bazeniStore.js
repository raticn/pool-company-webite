import { defineStore } from 'pinia'
import axios from 'axios'

export const useBazeniStore = defineStore('bazeni', {
  state: () => {
    return{
      galerijaSelection: [],
    }
  },
  actions: {
    async getImages(selectedImages) {
      try {
        let images = await axios.get('http://091v123.mars2.mars-hosting.com/API/pictures', {params: {
          fil_type: selectedImages
        }})
        this.galerijaSelection = images.data.q
      } catch (error) {
        console.log(error);
      }
    }
  }
})
