import Vue from "vue";
import axios from "axios";
import Vuex from "vuex";

Vue.use(Vuex);
const state = {
  pages: 0,
};
const getters = {
  getchapterspg: (state) => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((Response) => {
        state.pages = Response.data.info.pages;
        // console.log("pages data getchap", state.pages);
      })
      .catch((err) => {
        console.log("we got an error", err.Response);
      });
  },

  getpagesplus: (state) => {
    return state.pages++;
  },

  testingmppr: () => {
    let pg = 50;
    return pg;
  },
};

export default new Vuex.Store({
  getters,
  state,
});
