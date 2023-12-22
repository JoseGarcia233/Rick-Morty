<template>
  <div>
    <NavBar />
    <img
      alt="Vue logo"
      id="logo"
      src="https://www.latercera.com/resizer/oStaaBjKjrTK8rrWE2MFitEba_g=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FIN7ZFLY2VF7ZIO3F4VAH7DJ5I.jpg"
    />
    <router-link to="/about">
      <el-button :color="active4" id="button" round>Full Chapters</el-button>
    </router-link>
    <div class="grafi">
      <!-- <template>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
          </el-carousel-item>
        </el-carousel>
      </template> -->
      <!-- <BarChart /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
// import BarChart from "@/components/grafi.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    // BarChart,
  },
  // props: {
  //   character: array,
  // },

  data: () => ({
    active: "guide",
    active2: "dark",
    active3: "success",
    active4: "primary",
    value2: "",
  }),

  methods: () => {
    // console.log("klk value", this.value2);
  },
};
</script>

<style>
#logo {
  width: 500px;
  border: 115px;
  border-radius: 15%;
  position: relative;
  top: 100px;
  left: 50px;
}
#button {
  position: relative;
  top: 140px;
  right: 265px;
}
.grafi {
  width: 400px;
  height: 350px;
  position: relative;
  top: 200px;
  left: 450px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
