<template>
  <div class="center examplex">
    <vs-navbar
      target-scroll="#padding-scroll-content"
      padding-scroll
      center-collapsed
      v-model="active"
      :color="active2"
      text-white
    >
      <template #left>
        <img src="/logo2.png" alt="" />
      </template>
      <router-link to="/">
        <vs-navbar-item :color="active3" :active="active == 'guide'" id="guide">
          Home
        </vs-navbar-item>
      </router-link>
      <router-link to="/about">
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Chapters
        </vs-navbar-item>
      </router-link>
      <template #right>
        <vs-button :color="active4">Get Started</vs-button>
      </template>
    </vs-navbar>
    <div id="padding-scroll-content" class="square"></div>
  </div>
</template>
>

<script>
export default {
  data: () => ({
    active: "guide",
    active2: "dark",
    active3: "success",
    active4: "primary",
  }),
};
</script>

<style></style>
