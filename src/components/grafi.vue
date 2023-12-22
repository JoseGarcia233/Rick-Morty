<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="container">
    <Bar v-if="loaded" :data="chartData" :style="myStyles" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import axios from "axios";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
  },
  data() {
    return {
      hig: 500,
      etiquetas: [],
      valores: [],
      chartData: null,
      loaded: false,
      chartOptions: {
        responsive: true,
      },
    };
  },
  async mounted() {
    this.loaded = false;
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      products.data.map(
        (row) => (
          this.etiquetas.push(row.category), this.valores.push(row.price)
        )
      );
      // console.log("klk data", products.data);
      this.chartData = {
        labels: this.etiquetas,
        datasets: [
          {
            label: ["amaount"],
            data: this.valores,
            backgroundColor: ["#f87979", "#0E8388", "#E384FF"],
          },
        ],
      };
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
  myStyles() {
    return {
      height: `${this.hig}px`,
      position: "relative",
    };
  },
};
</script>

<style>
#container {
  width: 500px;
  height: 350px;
  background-color: antiquewhite;
}
</style>
