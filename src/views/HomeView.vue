<template>
  <Header/>
  <Segmento/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Segmento from '@/components/Segmento.vue'

export default {
  name: 'HomeView',
  components: {
    Header,Segmento
  }
}
</script>
