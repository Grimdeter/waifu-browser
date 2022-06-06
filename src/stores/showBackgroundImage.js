import { defineStore } from "pinia";

export const toggleBackgroundImage = defineStore("BGImageState", {
  state: () => {
    return { state: true };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggle() {
      this.state = !this.state;
    },
  },
});
