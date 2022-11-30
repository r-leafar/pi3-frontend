<template>
  <Header />
  <div v-if="servico !== null" class="servico">
    <img :src="servico.imagem" />
    <div>
      <h2>Especialidade: {{ servico.especialidade }}</h2>
      <p>
        {{ servico.descricao }} <span>({{ servico.pessoa.email }})</span>
      </p>

      <p>
        <span>Atendimento:</span> Hora Inicio:{{ servico.horaInicio }} / Hora Fim:{{
          servico.horaFim
        }}
      </p>
      <p><span>Forma pagamento: </span>{{ servico.formaPagamento }}</p>
      <span>Valor: {{ servico.valorServico }}</span>
    </div>
  </div>
  <div class="servico">
    <button :class="class_name[0]" class="star" @click="toglleCss(0)"></button>
    <button :class="class_name[1]" class="star" @click="toglleCss(1)"></button>
    <button :class="class_name[2]" class="star" @click="toglleCss(2)"></button>
    <button :class="class_name[3]" class="star" @click="toglleCss(3)"></button>
    <button :class="class_name[4]" class="star" @click="toglleCss(4)"></button>
  </div>
  <div class="servico">
    <div>
      <h1>Comentario</h1>
      <textarea v-model="comentario"></textarea>
      <button @click="sendComentario">Comentar</button>
    </div>
  </div>
  <div style="display:block;" class="servico">
    <div v-for="obj in avaliacoes">
      <span>[{{ obj.avaliador.email }}] </span>
      <ul style="margin-top: 15px">
        <li style="display: inline-block" v-for="n in obj.nota">⭐</li>
      </ul>
      <p style="margin-top: 15px">"{{ obj.comentario }}"</p>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
export default {
  name: "ServicoAvaliacaoView",
  components: {
    Header,
  },
  data() {
    return {
      servico: null,
      class_name: [
        "estrela_simple",
        "estrela_simple",
        "estrela_simple",
        "estrela_simple",
        "estrela_simple",
      ],
      avaliacoes: null,
      comentario: null,
    };
  },
  methods: {
    getaValiacoes() {
      const URL_API = `${process.env.VUE_APP_API_URL}avaliacao-servico/${this.$route.params.idservico}/servico  `;
      axios.get(URL_API).then((res) => {
        this.avaliacoes = res.data;
      /* Busca as procura a nota que foi dado pelo usuario e muda a quantidade de estrelas na tela*/
      this.avaliacoes.forEach(obj=>{
          if(obj.avaliador.idpessoa ===this.$store.state.pessoa.idpessoa){
            this.toglleCss(obj.nota);
          }
        });
      });
    },
    toglleCss(num) {
      for (let i = 0; i <= 5; i++) {
        this.class_name[i] = "estrela_simple";
      }
      for (let i = 0; i <=num; i++) {
        this.class_name[i] = "estrela_amarela";
      }
    },
    sendComentario() {
      if (this.$store.state.pessoa === null) {
        alert("Por favor, faça login para poder fazer o comentário!!");
      } else {
        const URL_API = `${process.env.VUE_APP_API_URL}avaliacao-servico`;
        /*Percorre o arrays [class_name] e conta a quantidade de ocorrencia da classe 'estrela_amarela' */
        const avaliacao_num_estrelas = this.class_name.filter((obj) => {
          return obj === "estrela_amarela" ? true : false;
        }).length;

        const data = {
          servico: { idservico: this.$route.params.idservico },
          avaliador: { idpessoa: this.$store.state.pessoa.idpessoa },
          comentario: this.comentario,
          nota: avaliacao_num_estrelas,
        };
        axios.post(URL_API, data).then((res) => {
          this.comentario = null;
          this.getaValiacoes();
        });
      }
    },
    loadServico() {
      const URL_API = `${process.env.VUE_APP_API_URL}servico/${this.$route.params.idservico}`;
      console.log(URL_API);
      axios.get(URL_API).then((res) => {
        this.servico = res.data;
      });
    },
  },
  created() {
    /*
    if (this.$store.state.pessoa === null) {
      this.$router.push("/login");
    } else {
     
    }*/
    this.loadServico();
    this.getaValiacoes();
  },
};
</script>
<style>
.estrela_amarela {
  background: url("../assets/star_color.png") transparent no-repeat;
}
.estrela_simple {
  background: url("../assets/star_simple.png") transparent no-repeat;
}
textarea {
  width: 980px;
  height: 100px;
  font-size: 20px;
}
button.star {
  height: 48px;
  width: 45px;
  border: none;
  cursor: pointer;
  margin-left: 15px;
}
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
}
</style>
