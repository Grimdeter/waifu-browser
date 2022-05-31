// stores/counter.js
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("counter", {
  state: () => {
    return { loading: false };
  },

  actions: {
    startLoading() {
      this.loading = true;
    },
    stopLoading() {
      this.loading = false;
    },
    setLoading(val) {
      this.loading = val;
    },
  },
});
