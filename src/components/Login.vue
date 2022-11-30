<template>
  <div class="container">
    <h1>Login</h1>
    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Senha" v-model="senha" />
      <input type="button" value="Entrar" v-on:click="loginUser" />
      <input
        type="button"
        value="Criar uma conta"
        v-on:click="this.$router.push('/cadastro-usuario')"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  methods: {
    loginUser() {
      const URL_API = `${process.env.VUE_APP_API_URL}pessoa/login`;
      axios
        .post(URL_API, { email: this.email, senha: this.senha })
        .then((res) => {
          this.$store.commit("storePessoa", res.data);
          this.$router.push("/");
        })
        .catch((res) => {});
    },
  },
};
</script>

<style scoped>
.container {
  width: 90vw;
  margin: 0 auto;
  text-align: center;
}
h1 {
  text-align: center;
  margin-top: 100px;
  font-size: 3em;
  font-weight: bold;
  margin-bottom: 50px;
}

form input {
  font-size: large;
  width: 70%;
  margin-bottom: 20px;
}
</style>
