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
          label: 'Data One',
          backgroundColor: '#f87979',
          data:this.getPk
        }
      ]
    }, {responsive: false, maintainAspectRatio: false})
  }
}
</script>

<style>
</style>
