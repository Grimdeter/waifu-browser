// stores/counter.js
import { defineStore } from "pinia";

export const useWaifusStore = defineStore("waifusStoreArray", {
  state: () => {
    return { waifus: [], firebaseWaifus: [] };
  },

  actions: {
    setNewWaifus(newWaifusArray) {
      this.waifus = newWaifusArray;
    },
    setNewFirebaseWaifus(newWaifusArray) {
      this.firebaseWaifus = newWaifusArray;
    },
    pushNewWaifu(newWaifuToPush) {
      this.waifus.push(newWaifuToPush);
    },
    pushNewWaifusArray(newWaifusArray) {
      this.waifus = [...this.waifus, ...newWaifusArray];
    },
  },
});
