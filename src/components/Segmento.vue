<template>
  <div>
    <section class="flex">
      <div v-for="s in segmentos">
       <img @click="goServicoBySegmento(s.idsegmento)" :src=s.imagem />
        <p>{{s.nome}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Segmento",
  data() {
    return {
      segmentos: null,
    };
  },
  methods: {
    loadSegmento() {
      const URL_API = `${process.env.VUE_APP_API_URL}segmento`;
      axios.get(URL_API).then((res) => {
        this.segmentos = res.data;
      });
    },
    goServicoBySegmento(idsegmento){
       this.$router.push(`/servicos/${idsegmento}/segmento`);
    }

  },
  created() {
    this.loadSegmento();
  },
};
</script>

<style scoped>
body,
ul,
li,
p {
  margin: 0px;
  padding: 0px;
  list-style: none;
  font-size: 1.2rem;
  font-family: Arial;
}

body {
  margin-bottom: 100px;
}

a {
  text-decoration: none;
  color: white;
}

h1 {
  text-align: center;
  margin-top: 100px;
}

img {
  max-width: 100%;
  display: block;
}

.container-pesquisa {
  width: 1000px;
  margin: 0 auto;
}

.container-pesquisa input {
  width: 780px;
  height: 25px;
  font-size: large;
  margin-top: 15px;
  background: url("../assets/icons8-pesquisar-24.png") no-repeat scroll 7px 7px;
  padding-left: 28px;
  margin-bottom: 25px;
}
.flex div:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.header {
  background: #1d1e20;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.menu {
  display: flex;
}

.menu li {
  margin-left: 10px;
}

.menu li a {
  display: block;
  padding: 10px;
}

/* CSS FLEXBOX 1 */

.flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
}

.flex > div {
  flex: 1 1 250px;
  margin: 10px;
}

.flex p {
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  color: white;
  align-self: end;
}
</style>
