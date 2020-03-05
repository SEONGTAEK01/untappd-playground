<template>
  <apexchart width="700" height="500" type="donut" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
  import {bus} from '../main';

  export default {
    name: "Graph",
    legend: {
      horizontalAlign: 'center',
    },
    data: function () {
      return {
        chartOptions: {
          labels: []
        },
        series: [],
      }
    },
    created() {
      bus.$on('updateDonut', (data) => {
        this.chartOptions = {
          labels: Object.keys(data)
        };
        this.series = Object.values(data);
      })
    },
  };
</script>

<style scoped>

</style>
