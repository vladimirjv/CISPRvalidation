<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-sticky position="top-left" :offset="[18, 18]">
          <q-btn
            fab-mini
            color="green-9"
            icon="keyboard_arrow_left"
            class="animate-pop"
          />
    </q-page-sticky>


    <q-page-container>

      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
  },
  computed:{
    ruta: function () {
      (this.$route!=='/')?true:false
    }
  }
}
</script>

<style>
</style>
