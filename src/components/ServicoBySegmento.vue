<template>
  <h1>{{ this.segmento }}</h1>
  <div v-for="s in servicos" class="servico">
    <img @click="goServico(s.idservico)" :src="s.imagem" />
    <div>
      <h2>Especialidade: {{ s.especialidade }}</h2>
      <p>
        {{ s.descricao }} <span>({{ s.pessoa.email }})</span>
      </p>

      <p>
        <span>Atendimento:</span> Hora Inicio:{{ s.horaInicio }} / Hora Fim:{{
          s.horaFim
        }}
      </p>
      <p><span>Forma pagamento: </span>{{ s.formaPagamento }}</p>
      <span>Valor: {{ s.valorServico }}</span>
      <p v-if="s.media!==0">
        <span v-if="s.media!==''"> Nota do servico: {{ s.media }} / 5 </span>
      </p>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import axios from "axios";

export default {
  name: "ServicoBySegmento",
  components: {
    Header,
  },
  data() {
    return {
      servicos: null,
      segmento: null,
    };
  },
  methods: {
    goServico(idservico) {
      this.$router.push(`/servicos/${idservico}/detalhe`);
    },
    getMediaServico() {
      // requisição para pegar a media das avaliações de cada serviço e adicionado ao objeto da requisição anterior
      this.servicos.forEach((obj) => {
        let URL_API = `${process.env.VUE_APP_API_URL}avaliacao-servico/${obj.idservico}/avaliacao`;
        axios.get(URL_API).then((res2) => {
          if(res2.data !==''){
          obj["media"]=res2.data.toFixed(2);
          }else{
            obj["media"]=0;
          }
        });
      });
    },
    loadServicoBySegmento() {
      let URL_API = `${process.env.VUE_APP_API_URL}servico/${this.$route.params.idsegmento}/segmento`;
      // Requisição para pegar os servicos que pertencem a um determinado segmento
      axios.get(URL_API).then((res1) => {
        res1.data.forEach((obj) => {
          this.servicos = res1.data;
        });

        this.segmento = this.servicos[0].segmento.nome;

        this.getMediaServico();
      });
    },
  },
  created() {
    this.loadServicoBySegmento();
  },
};
</script>
<style scoped>
h1 {
  font-size: 30px;
  margin: 0 auto;
  width: 980px;
  text-align: center;
  margin-bottom: 30px;
}
.servico {
  display: flex;
  width: 980px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.servico div {
  margin: 0px 15px 0 15px;
}
.servico p {
  margin-bottom: 15px;
}
.servico span {
  font-weight: Bold;
}
.servico h2 {
  font-size: 20px;
  font-weight: Bold;
  margin-bottom: 15px;
}

.servico img {
  width: 400px;
  display: inline-block;
  cursor: pointer;
}
</style>
