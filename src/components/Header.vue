<template>
  <header class="header">
    <router-link to="/">PI3</router-link>
    <span @click=" this.$router.push('/')" style="color:white;font-weight:bold;cursor:pointer;">Divulgação e Contratação de Serviços Autônomos Através de Aplicativo Centralizador
</span>
    <nav>
      <ul class="menu">
        <span v-if="this.$store.state.pessoa !== null">
          <li><button  @click=" this.$router.push('/cadastro-servico')">Serviços</button></li>
        </span>
        <li><button @click=" this.$router.push('/sobre')">Sobre</button></li>
        <span v-if="this.$store.state.pessoa !== null">
          <li>
            <button v-on:click="logoffPessoa">{{this.$store.state.pessoa.email}} logoff</button>
          </li>
        </span>
        <span v-else>
          <li><router-link to="/login">Login</router-link></li>
        </span>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  methods: {
    logoffPessoa() {
      this.$store.commit("logoffPessoa");
    },
  },
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
<style scoped>
a:visited{
color:white;
}
a{
  text-decoration:none;
}
.header {
  background: #1d1e20;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-size: 1.2rem;
  margin-bottom: 30px;
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
  text-decoration:none;
}
.menu li a:visited{
  color:white;
}

button {
  background-color: transparent;
  color: white;
  border: none;
  width: 145px;
  height: 40px;
  font-size: 16px;
}
button:hover{
  cursor:pointer;

}
</style>
