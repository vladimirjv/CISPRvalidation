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
          v-model="frecuecia"
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
        <q-btn class="full-width" label="Evaluar" color="green"></q-btn>
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
      frecuecia:'',
      db:'',
      width: 0,
      height:0,
    }
  },methods:{
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
