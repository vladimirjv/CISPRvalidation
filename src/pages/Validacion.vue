<template>
  <q-page
    class="flex absolute-center items-center"
  >
    <!-- content -->


    <div class="flex column">
      <div>
        <!-- <p>Inserte los datos</p> -->
        <h2>Inserte sus datos</h2> <br>
      </div>

      <div>
        <q-input
          v-model="frecuencia"
          float-label="Frecuencia en MHz"
          placeholder="30, 53, 98, 123, 230, 290"
          color="green"
        />
      </div>

      <div>
        <q-input
          v-model="db"
          float-label="Valores en dBuV"
          placeholder="23,14,18,9,21"
          color="green"
        />
      </div>


      <div>
        <br><br>
        <q-btn class="full-width" label="Evaluar" color="green" :loading="loading" @click="progress"></q-btn>
        <!-- <q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" label="Button" /> -->
      </div>

    </div>

  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import * as types from '../store/types.js';
export default {
  // name: 'PageName',
  data(){
    return {
      frecuencia:'',
      db:'',
      width: 0,
      height:0,
      loading: false,
    }
  },methods:{
    progress(){
      this.loading=true;
      //split combierte el array separadon los valores por la ,
      //map function hace mappign sobre el array y transforma en number
      //de no ser un numero, se agreg como NaN
      var frq=this.frecuencia.split(",").map(Number)

      setTimeout(()=>{
        this.loading=false;
      },3000)
    },
    simulatedlist(){console.log([123,1231,123]);},
    ...mapActions({
      updateRuta: types.UPDATE_RUTA
    })
  },
  mounted () {
    this.updateRuta(this.$router.currentRoute.fullPath);
  }
}
</script>

<style>
</style>
