<template>
  <Header />
  <section class="flex">
    <div class="container">
      <h1>Serviço</h1>
      <form>
        <select v-model="segmento">
          <option disabled value="">Área de Atuação</option>
          <option v-for="s in segmentos" :key="s.idsegmento" :value="s.idsegmento">
            {{ s.nome }}
          </option>
        </select>
        <input type="text" placeholder="Especialidade: " v-model="especialidade" />
        <textarea
          v-model="descricao"
          name="servico"
          id=""
          cols="97"
          rows="6"
          placeholder="Descrição do serviço oferecido"
        ></textarea>
        <input
          type="text"
          v-model="horaInicio"
          style="width: 45%"
          placeholder="Começa às "
          onfocus="(this.type = 'time')"
        />
        <input
          type="text"
          v-model="horaFim"
          style="width: 45%; margin-left: 8%"
          placeholder="Até às "
          onfocus="(this.type = 'time')"
        />
        <input
          v-model="valorServico"
          type="text"
          placeholder="Valor do serviço"
          name=""
          id=""
        />
        <input
          v-model="formaPagamento"
          type="text"
          placeholder="Formas de Pagamento. (Separado por ';' )"
          name=""
        />

        <input type="file" name="file" @change="onFileSelected" />

        <input type="button" v-on:click.prevent="sendForm" value="Cadastrar" />
      </form>
    </div>
  </section>
</template>
<script>
import Header from "../components/Header.vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CadastroServicoView",
  components: {
    Header,
  },
  data() {
    return {
      segmentos: null,
      segmento: null,
      especialidade: null,
      descricao: null,
      horaInicio: null,
      horaFim: null,
      valorServico: null,
      formaPagamento: null,
      imagem: null,
      nome_imagem: null,
    };
  },
  methods: {
    sendForm() {
      const data = {
        pessoa: {
          idpessoa: this.$store.state.pessoa.idpessoa,
        },
        segmento: {
          idsegmento: this.segmento,
        },
        especialidade: this.especialidade,
        descricao: this.descricao,
        horaInicio: this.horaInicio,
        horaFim: this.horaFim,
        valorServico: this.valorServico.replace(",", "."),
        formaPagamento: this.formaPagamento,
        imagem: this.nome_imagem,
      };
      console.log(data);

      const URL_API = `${process.env.VUE_APP_API_URL}servico`;

      data.imagem = this.nome_imagem;

      axios.post(URL_API, data).then((res) => {
        this.onUpload();
        this.$router.push(`/servicos/${this.segmento}/segmento`);
      });
    },
    onFileSelected() {
      this.imagem = event.target.files[0];
      const extension = event.target.files[0].name.split(".")[1];
      this.nome_imagem = uuidv4() + "." + extension;
    },
    onUpload() {
      const fd = new FormData();

      fd.append("file", this.imagem, this.nome_imagem); //this.imagem.name
      axios.post(process.env.VUE_APP_API_URL + "file/upload", fd).then((res) => {
        console.log(res);
      });
    },
    loadSegmento() {
      const URL_API = `${process.env.VUE_APP_API_URL}segmento`;
      axios.get(URL_API).then((res) => {
        this.segmentos = res.data;
      });
    },
  },
  created() {
    if (this.$store.state.pessoa === null) {
      this.$router.push("/login");
    } else {
      this.loadSegmento();
    }
  },
};
</script>
<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
  font-size: 24px;
  font-weight: bold;
}
form input {
  font-size: large;
  width: 100%;
  margin-bottom: 20px;
}
label {
  font-size: 20px;
}
select {
  font-size: large;
  width: 100%;
  margin-bottom: 20px;
}
textarea {
  font-family: arial;
  font-size: large;
  width: 100%;
  margin-bottom: 15px;
}
/* CSS FLEXBOX 1 */

.flex {
  display: flex;
  flex-wrap: wrap;
  max-width: 980px;
  margin: 0 auto;
}

.flex > div {
  flex: 1 1 250px;
  margin: 10px;
}

.flex p {
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  color: white;
  align-self: end;
}
</style>
