<template>
    <Header/>
    <ServicoBySegmento/>
</template>
<script>
import Header from "../components/Header.vue";
import ServicoBySegmento from "../components/ServicoBySegmento.vue";
export default {
  name: 'ServicoBySegmentoView',
  components:{
    Header,ServicoBySegmento
  }

  ,created(){
    console.log(this.idsegmento)
  }
}

</script>
<style scoped>
</style>