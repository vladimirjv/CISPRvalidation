<script>
import { Line } from 'vue-chartjs';
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';

export default {
  extends: Line,
  // props: ['labels','data', 'options'],
  computed: {
    ...mapGetters({
      getFrq: types.FRECUENCIA,
      getPk: types.PK,
    })
  },
  mounted () {
    this.renderChart({
      labels: this.getFrq,
      datasets: [
        {
          label: 'Cámara Semianecoica',
          // backgroundColor: '#f87979',
          // backgroundColor: '#ffffff',
          borderColor: '#48a33c',
          fill: false,
          borderWidth: 1,
          pointBorderWidth:1,
          pointRadius:1,
          data:this.getPk
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>

<style>
</style>
