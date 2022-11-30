<template>
  <Header />
  <div class="servico">
    <p>
      Diante do crescente número de trabalhadores autônomos informais, da dificuldade de
      divulgação dos serviços por parte desses trabalhadores e da dificuldade da
      comunidade em encontrar e contatar esses prestadores de serviços, notou-se a
      necessidade de desenvolver uma aplicação web de cadastro e oferta de serviços de
      trabalhadores autônomos, fazendo uma ponte entre prestadores de serviços e clientes.
    </p>
    <p>
      O sistema foi desenvolvido em Java, utilizará o banco de dados PostgreSQL, framework
      VueJs e Spring Boot, além de script web, nuvem, acessibilidade, controle de versão e
      testes. O resultado da implementação desenvolvida foi um website intuitivo, com
      informações objetivas, capaz de oferecer aos usuários facilidade de acesso,
      usabilidade e segurança, atendendo num primeiro momento as demandas e sugestões
      previamente levantadas junto a comunidade externa.
    </p>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "AboutView",
  components: {
    Header,
  },
};
</script>
<style scoped>
.servico {
  display: flex;
  width: 980px;
  margin: 0 auto;
  margin-bottom: 30px;
  font-size: 25px;
flex-wrap: wrap;
}
</style>
