<template>
  <Header />
  <div class="container">
    <h1>Usuario</h1>
    <form>
      <input type="text" placeholder="Nome Completo: " v-model="nomecompleto" />
      <input type="text" placeholder="Documento de identificação: " v-model="doc" />
      <input
        type="text"
        placeholder="Data de nascimento: "
        v-model="datanascimento"
        onfocus="(this.type = 'date')"
      />
      <input type="text" placeholder="Celular: " v-model="celular" />
      <input type="email" placeholder="E-mail: " v-model="email" />
      <input type="password" style="width: 30%" placeholder="Senha: " v-model="senha" />
      <input
        type="password"
        style="width: 30%; margin-left: 9%"
        placeholder="Confirmação de senha: "
        v-model="senha_conf"
      />
      <input type="file" name="file" @change="onFileSelected" />

      <input type="button" v-on:click.prevent="sendForm" value="Cadastrar" />
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CadastroUsuarioView",
  components: {
    Header,
  },
  data() {
    return {
      nomecompleto: null,
      doc: null,
      datanascimento: null,
      email: null,
      celular: null,
      senha: null,
      senha_conf: null,
      imagem: null,
      nome_imagem: null,
    };
  },
  methods: {
    sendForm() {
     const dt = {
        nomecompleto: this.nomecompleto,
        doc: this.doc,
        datanascimento: this.datanascimento,
        email: this.email,
        celular: this.celular,
        senha: this.senha,
        imagem:null,
      };
      const URL_API = `${process.env.VUE_APP_API_URL}pessoa`;

      if((this.senha===this.senha_conf)&&(this.senha!==null ||this.senha_conf!==null)){
        this.onUpload();

        dt.imagem = this.nome_imagem;

        axios.post(URL_API, dt).then((res) => {
       this.loginUser();
      });
      }else{
        alert("Por favor, verifique a senha.")
      }

      
    },
    onFileSelected(event) {
      this.imagem = event.target.files[0];
      const extension =  event.target.files[0].name.split(".")[1];
      this.nome_imagem = uuidv4()+"."+extension;
    },
    onUpload() {
      const fd = new FormData();      

      fd.append("file", this.imagem, this.nome_imagem); //this.imagem.name
      axios.post(process.env.VUE_APP_API_URL + "file/upload", fd).then((res) => {
        console.log(res);
      });
    },
      loginUser() {
      const URL_API = `${process.env.VUE_APP_API_URL}pessoa/login`;
      axios
        .post(URL_API, { email: this.email, senha: this.senha })
        .then((res) => {
          this.$store.commit("storePessoa", res.data);
          this.$router.push("/");
        })
        .catch((res) => {});
    }
  },
};
</script>
<style scoped>
.container {
  text-align: center;
}
form input {
  font-size: large;
  width: 70%;
  margin-bottom: 20px;
}
h1 {
  text-align: center;
  margin: 100px 0 50px;
  font-size: 2em;
}
</style>
