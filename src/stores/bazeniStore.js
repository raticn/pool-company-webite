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
      // console.log(selectedImages);
      let selectedText;
      switch (selectedImages){
        
        case 'javniS' :
        selectedText = 'Javni bazeni'
        // console.log('Selected tekst: ' + selectedText);
        break;
        case 'privatni' :
        selectedText = 'Privatni bazeni'
        // console.log('Selected tekst: ' + selectedText);
        break;
        case 'fontane' :
        selectedText = 'Fontane'
        break;
        case 'saune' :
        selectedText = 'Saune'
        break;
        

    }  
    localStorage.setItem('selectedText',selectedText);
    }
  }
})
