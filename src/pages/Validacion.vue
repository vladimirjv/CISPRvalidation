<template>
  <q-page
    class="flex flex-center items-center"
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
          color="primary"
          @input="validateFrq"
          :error="errorFrq"
        />
      </div>

      <div>
        <q-input
          v-model="db"
          float-label="Valores en dBuV"
          placeholder="23,14,18,9,21"
          color="primary"
          @input="validatePk"
          :error="errorPk"
        />
      </div>

      <div>
        <br>
        <q-radio v-model="camara" val="semi" label="Semianecoica" color="green" style="margin-right: 15px"/>
        <q-radio v-model="camara" val="blind" label="Blindada" color="green"/>
      </div>
      <div>
        <br>
        <q-radio v-model="position" val="far" label="Far" color="green" style="margin-right: 15px"/>
        <q-radio v-model="position" val="middle" label="Middle" color="green" style="margin-right: 15px"/>
        <q-radio v-model="position" val="close" label="Close" color="green"/>
      </div>

      <div>
        <br>
        <!-- <q-btn :loading="loading1" color="secondary" @click="simulateProgress(1)" label="Button" /> -->
        <q-btn class="full-width" label="Evaluar" color="primary" :loading="loading" @click="progress"></q-btn>
        <br>
      </div>


      <div>
        <my-table v-if="tableShow"></my-table>
      </div>
      <chart v-if="chartShow"></chart>
    </div>

  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from 'axios';
import * as types from '../store/types.js';
import Chart from '../components/chart.vue';
import MyTable from '../components/table.vue';

export default {
  // name: 'PageName',
  components: {
    Chart,
    MyTable
  },
    width: 0,
  data(){
    return {
      frecuencia:'',
      db:'',
      camara:'',
      position:'',
      loading: false,
      errorFrq:false,
      errorPk:false,
      chartShow: false,
      tableShow: false,
      dataFrq:[30,45,80,110 ],
      dataPk:[13,14,16,12],
      datosIncorrectosNotification:{
        message:'Hey estás escribiendo algo mal',
        timeout:2000,
        type: 'warning',
        position: 'top'
      },
      errorRequestNotification:{
        message:'Algo malo sucedió',
        timeout:2000,
        type: 'negative',
        position: 'top'
      }
    }
  },
  methods:{
    progress(){
      this.loading=true;
      if (this.errorFrq==false  &&this.errorPk===false&&this.getEvalFrq.length===this.getEvalPk.length) {
        this.$axios.put('http://127.0.0.1:5000/compararpksemi', {lista:this.frecuencia,db:this.db})
        .then(
          (response)=>{
              console.log(response.data);
              this.setDiff(response.data['diff']);
              this.setReal(response.data['realPk']);
              this.setMape(response.data['mape']);
              this.loading=false;
              this.chartShow=true;
              this.tableShow=true;
            }
        )
        .catch((err)=>{
          console.log('Tus datos son incorrectos')
          console.log(err)
          this.showNotification(this.errorRequestNotification)
          this.loading=false
        });
        console.log('ok lets go')
      } else {
        this.loading=false
        this.showNotification(this.datosIncorrectosNotification)
      }
    },
    validateRB(){
      switch (this.camara) {
        case "semi":
          switch (this.position) {
            case "close":
              return "SC"
              break;
            case "middle":
              return "SM"
              break;
            case "far":
              return "SF"
              break;
          }
          break;
        case "blind":
          switch (this.position) {
            case "close":
              return "BC"
              break;
            case "middle":
              return "BM"
              break;
            case "far":
              return "BF"
              break;
          }
        default:
          return "SF"
          break;
      }
    },
    showNotification(notification){
      this.$q.notify(notification)
    },
    validateFrq(){
      var frq=this.frecuencia.split(",").map(Number);
      if(this.validateArray(frq)&&this.checkLimits(frq)===true){
        this.errorFrq=false
        this.setEvalFrq(frq);
      }else{
        this.errorFrq=true
      }
      (this.frecuencia==="")?this.errorFrq=false:"";
    },
    validatePk(){
      var pk=this.db.split(",").map(Number);
      this.setEvalPk(pk);
      this.errorPk=!this.validateArray(pk);
      (this.frecuencia==="")?this.errorFrq=false:"";
    },
    checkLimits(array){
      if (Math.max(...array)<=300&&Math.min(...array)>=30) {
        return true
      }else{
        return false
      }
    },
    validateArray(array){
      var validated=array.find((val,index)=>{
        return isNaN(val)
      })
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
      setEvalFrq: types.UPDATE_EVAL_FRQ,
      setEvalPk: types.UPDATE_EVAL_PK,
      setReal: types.UPDATE_REAL_VALUE,
      setDiff: types.UPDATE_DIFFERENCE,
      setMape:types.UPDATE_MAPE,
    })
  },
  computed: {
    ...mapGetters({
      getFrecuencia: types.FRECUENCIA,
      getPk: types.PK,
      getEvalFrq: types.EVAL_FRQ,
      getEvalPk: types.EVAL_PK,
      getReal: types.REAL_VALUE,
      getDiff: types.DIFFERENCE,
    })
  },
  mounted () {
    this.updateRuta(this.$router.currentRoute.fullPath);
    // this.$axios.get('https://floating-sea-76017.herokuapp.com/datasf').
    this.$axios.get('http://127.0.0.1:5000/datasf').
    then((response) => {
      this.setFrecuencia(response.data['frecuencia'])
      this.setPk(response.data['pk'])
      console.log(this.getFrecuencia)
    }).catch((err) => {
      console.log(err)
    });
  }
}
</script>

<style>
</style>
