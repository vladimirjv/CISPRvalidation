<template>
  <table>
    <thead class="highlight responsive-table">
      <tr>
          <th v-for="(name, index) in heads" :key="index">
            {{name.name}}
          </th>
          <!-- <th>Name</th>
          <th>Item Name</th>
          <th>Item Price</th> -->
      </tr>
    </thead>
      <tbody>
        <tr v-for="(val, index) in getFrq" :key="index">
          <td>{{getFrq[index]}}</td>
          <td>{{getPk[index]}}</td>
          <td>{{getDiff[index]}}</td>
          <td>{{getRealVal[index]}}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td style="color:red">{{getMape}}</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import {mapGetters} from 'vuex';
import *as types from '../store/types.js';

export default {
  // name: 'ComponentName',
  data () {
    return {
      heads:[
        { name: 'Frq MHz'},
        { name:'Readed Data'},
        {name:'Difference'},
        {name:'Real Data'}
      ],
    }
  },
  computed: {
    // this.frq = this.getRealVal
    // this.diff = this.getDiff,
    ...mapGetters({
      getFrq: types.EVAL_FRQ,
      getPk: types.EVAL_PK,
      getRealVal: types.REAL_VALUE,
      getDiff: types.DIFFERENCE,
      getMape: types.MAPE,
    })
  },
}
</script>



<style scoped>
@import '../assets/css/table.css';

</style>


