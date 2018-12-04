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
        <tr v-for="(val, index) in evalPk" :key="index">
          <td>{{evalPk[index]}}</td>
          <td>{{diff[index]}}</td>
          <td>{{real[index]}}</td>
        </tr>
        <!-- <tr> -->
          <!-- <td>Alvin</td>
          <td>Eclair</td>
          <td>$0.87</td> -->
        <!-- </tr> -->
    </tbody>
  </table>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      heads:[
        { name:'Readed Data'},
        {name:'Difference'},
        {name:'Real Data'}
      ],
      evalPk:[13,23,16,14],
      diff:[-1.4,-3.1,2,-1.3],
      real:[14.4,20,14,15.4]
    }
  }
}
</script>



<style scoped>
@import '../assets/css/table.css';

</style>


