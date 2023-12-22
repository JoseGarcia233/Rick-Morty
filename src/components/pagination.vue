<template>
  <div class="center con-pagination">
    <vs-pagination not-margin v-model="page" :length="20" />
  </div>
</template>
<script lang="ts">
export default {
  name: "RickMortyPagination",

  data() {
    return {
      page: 1,
    };
  },

  mounted() {},

  methods: {},
};
</script>
