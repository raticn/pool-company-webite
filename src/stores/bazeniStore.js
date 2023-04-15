import { defineStore } from 'pinia'
// import axios from 'axios'

export const useBazeniStore = defineStore('bazeni', {
  state: () => {
    return{
      galerijaSelection: [],
      
    }
  },
  actions: {
    setLocalStorageSelection(selectedImages) {
      localStorage.setItem('selected',selectedImages);
      console.log(selectedImages);
    }
  }
})
