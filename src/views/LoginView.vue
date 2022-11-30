<template>
  <Header/>
  <Login/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'LoginView',
  components: {
    Header,Login
  }

}
</script>
