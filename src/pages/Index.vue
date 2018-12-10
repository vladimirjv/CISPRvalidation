<template>
  <q-page class="flex column">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >

    <div class="absolute-center gutter-xs">
      <!-- <div class="row"> -->
        <div class="flex col-12 flex-center">
          <!-- <img  alt="Quasar logo" src="~assets/quasar-logo-full.svg"> -->
          <!-- <img  alt="Quasar logo" src="~assets/mabe.svg"> -->
        </div>
        <br>
      <!-- </div> -->
      <!-- <div class="row"> -->
        <div class="flex col-10 text-center">
          <p>Bienvenido, para realizar la homologación de la prueba por favor de click en Verificar</p>
        </div>
      <!-- </div> -->
        <div class="col-10">
          <q-btn
            wait-for-ripple
            class="full-width"
            label="Evaluar"
            to="/validacion"
            color="primary"
          >
          </q-btn>
        </div>
      <!-- <div class="row"> -->
        <div class="col-10">
          <q-btn
            class="full-width"
            label="click"
            color="primary"
          >
          </q-btn>
        </div>
      <!-- </div> -->
    </div>

    </transition>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions } from "vuex";
import * as types from '../store/types.js';
export default {
  name: 'PageIndex',
  methods:{
    ...mapActions({
      updateRuta: types.UPDATE_RUTA
    })
  },
  computed: {
  },
  mounted () {
    this.updateRuta(this.$router.currentRoute.fullPath)
  },
  beforeDestroy(){

  }

}
</script>
