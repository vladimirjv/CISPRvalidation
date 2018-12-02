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
          @input="validateFrq"
          :error="errorFrq"
        />
      </div>

      <div>
        <q-input
          v-model="db"
          float-label="Valores en dBuV"
          placeholder="23,14,18,9,21"
          color="green"
          @input="validatePk"
          :error="errorPk"
        />
      </div>


      <div>
        <br><br>
        <q-btn class="full-width" label="Evaluar" color="green" :loading="loading" @click="progress"></q-btn>
        <!-- <q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" label="Button" /> -->
      </div>

      <chart v-if="chartBool"></chart>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as types from '../store/types.js';
import Chart from '../components/chart.vue';

export default {
  // name: 'PageName',
  components: {
    Chart
  },
  data(){
    return {
      frecuencia:'',
      db:'',
      width: 0,
      height:0,
      loading: false,
      errorFrq:false,
      errorPk:false,
      chartBool: false,
      dataFrq:[30,45,80,110 ],
      dataPk:[13,14,16,12],
    }
  },
  methods:{
    progress(){
      this.loading=true;
      //split combierte el array separadon los valores por la ,
      //map function hace mappign sobre el array y transforma en number
      //de no ser un numero, se agreg como NaN
      // var frq=this.frecuencia.split(",").map(Number)
      // console.log(this.validateArray(frq))
      this.dataFrq=this.getFrecuencia;
      this.dataPk=this.getPk;

      setTimeout(()=>{
        this.loading=false
        this.chartBool=true
      }
        ,2000)
    },
    validateFrq(){
      this.errorPk=!this.validateArray(pk)
      var frq=this.frecuencia.split(",").map(Number)
      this.errorFrq=!this.validateArray(frq)
    },
    validatePk(){
      var pk=this.db.split(",").map(Number)
    },
    validateArray(array){
      var validated=array.find((val,index)=>{
        return isNaN(val)
      })
      console.log(typeof validated)
      switch (typeof(validated)) {
        case "undefined":
          return true
          break;
        case "number":
          return false
          break;
      }
    },
    ...mapActions({
      updateRuta: types.UPDATE_RUTA,
      setFrecuencia: types.UPDATE_FRECUENCIA,
      setPk : types.UPDATE_PK,
    })
  },
  computed: {
    ...mapGetters({
      getFrecuencia: types.FRECUENCIA,
      getPk: types.PK,
    })
  },
  mounted () {
    this.updateRuta(this.$router.currentRoute.fullPath);
    this.$axios.get('https://floating-sea-76017.herokuapp.com/datasf').
    // this.$axios.get('http://127.0.0.1:5000//datasf').
    then((response) => {
      this.setFrecuencia=response.data['frecuencia']
      this.setPk=response.data['pk']
      console.log(this.setPk)
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style>
</style>
