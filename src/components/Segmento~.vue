<template>
    <div>
    <section class="flex">
      <div>
        <img src="../assets/pedreiro.jpg">
        <p>Pedreiro</p>
      </div>
      <div>
        <img src="../assets/eletricista.jpg">
        <p>Eletricista</p>
      </div>
      <div>
        <img src="../assets/transporte.jpg">
        <p>Locomoção</p>
      </div>
      <div>
        <img src="../assets/hidraulica.png">
        <p>Hidraulica</p>
      </div>
      <div>
        <img src="../assets/baba.png">
        <p>Babá</p>
      </div>
      <div>
        <img src="../assets/professor.jpg">
        <p>Professor</p>
      </div>
      <div>
        <img src="../assets/marceneiro.jpg">
        <p>Marceneiro</p>
      </div>
      <div>
        <img src="../assets/mecanico.jpg" alt="Mecanico">
        <p>Mecanico</p>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  name: 'Segmento',
  props: {
    msg: String
  }
}
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

.container-pesquisa{
  width: 1000px;
  margin: 0 auto;
}

.container-pesquisa input{
  width: 780px;
  height: 25px;
  font-size: large;
  margin-top: 15px;
  background:url("../assets/icons8-pesquisar-24.png") no-repeat scroll 7px 7px;
  padding-left: 28px;
  margin-bottom: 25px;
  
}
.flex div:hover{
    transform: scale(1.2);
    cursor:pointer;
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