<template>
  <q-page class="flex flex-center">
    <div :style="css">
      <q-window-resize-observable @resize="onResize" />
      <chart></chart>
    </div>
  </q-page>
</template>

<script>
import Chart from '../components/chart.vue';
export default {
  // name: 'PageName',
  components: {
    Chart,
  },
  data(){
    return {
      width:'width:800px',
      css:'max-width: 600px;',
    }
  },
  methods: {
    onResize(size){
      console.log(size.width)
      this.css ='width:'+size.width+'px;'
      console.log('width: '+size.width +' px')
    }
  }
}
</script>

<style>
</style>
