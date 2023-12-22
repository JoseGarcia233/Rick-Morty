<template>
  <div>
    <vs-card type="2" id="card">
      <template #title>
        <h5 :color="active2" id="Nam">Name</h5>
        <p id="nam">{{ characters.name }}</p>
      </template>
      <template #img>
        <img :src="characters.image" alt="" />
      </template>
      <template #text>
        <p>Chaptes from Rick and Morty Original Series</p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class="bx bx-heart"></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class="bx bx-chat"></i>
          <span class="span"> {{ characters.id }} </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  name: "RickMortyCarnd",

  props: {
    characters: Object,
  },

  data: () => ({
    active: "guide",
    active2: "dark",
    active3: "success",
    active4: "primary",
  }),

  mounted() {},

  methods: {},
};
</script>

<style scoped>
#h {
  color: aqua;
}
#card {
  display: block;
  margin: 50px;
}
/* #nam {
  color: #628e90;
} */

#card {
  transition: transform 0.2s;
  border: 2%;
  border-color: navajowhite;
  background-color: #628e90;
  border-radius: 8%;
  float: left;
  margin: 45px;
  position: relative;
  left: 150px;
}
</style>
