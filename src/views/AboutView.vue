<template>
  <div class="about">
    <NavBar />
    <h1 id="title">This is a Collection character</h1>
    <Carnd
      v-for="characters in character"
      :key="characters.id"
      :characters="characters"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Carnd from "@/components/Carnd.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Carnd,
  },
  data() {
    return {
      character: [],
      active4: "primary",
    };
  },
  created() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        this.character = response.data.results;
        // console.log(response.data);
        // console.log(this.getpagesplus);
        // console.log(this.testingmppr);
        // console.log("klk data", this.character.response.data);
      })
      .catch((error) => {
        console.log("we got an error:" + error.response);
      });
  },
  computed: {
    ...mapGetters({
      getpagesplus: "getpagesplus",
      testingmppr: "testingmppr",
    }),
  },
};
</script>

<style scoped>
#title {
  color: #2146c7;
}
</style>
