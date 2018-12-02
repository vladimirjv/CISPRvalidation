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
      errorFrq:false,
      errorPk:false,
      dataG:{},
    }
  },
  methods:{
    progress(){
      this.loading=true;
      //split combierte el array separadon los valores por la ,
      //map function hace mappign sobre el array y transforma en number
      //de no ser un numero, se agreg como NaN
      var frq=this.frecuencia.split(",").map(Number)
      console.log(this.validateArray(frq))
      // this.$axios.put()
    },
    validateFrq(){
      var frq=this.frecuencia.split(",").map(Number)
      this.errorFrq=!this.validateArray(frq)
    },
    validatePk(){
      var pk=this.db.split(",").map(Number)
      this.errorPk=!this.validateArray(pk)
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
      updateRuta: types.UPDATE_RUTA
    })
  },
  computed: {
  },
  mounted () {
    this.updateRuta(this.$router.currentRoute.fullPath);
    this.$axios.get('https://floating-sea-76017.herokuapp.com/datasf').
    then((response) => {
      this.dataG=response.data
      console.log(dataG)
    }).catch((err) => {
      console.log('something wrong hapend')
    });
  }
}
</script>

<style>
</style>
