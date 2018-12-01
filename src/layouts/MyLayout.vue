<template>
  <q-layout view="lHh Lpr lFf">

    <!-- <div v-if="rutaActual!=='/'"> -->
      <q-page-sticky
        v-if="button"
        position="top-left"
        :offset="[18, 18]"
      >
          <q-btn
            fab-mini
            @click="goBack"
            color="green-9"
            icon="keyboard_arrow_left"
            class="animate-pop"
          />
    </q-page-sticky>
    <!-- </div> -->

    <q-page-container>

      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types.js';
export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  methods: {
    goBack: function () {
      this.$router.push('/');
    }
  },
  computed:{
    button(){
      if (this.rutaActual==='/') {
        return false
      } else {
        return true
      }
    },
    ...mapGetters({
      rutaActual: types.RUTA_ACTUAL
    })
  },
}
</script>

<style>
</style>
