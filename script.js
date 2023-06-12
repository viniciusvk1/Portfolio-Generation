let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#txtNome");
  if (nome.value.lenght < 3) {
    txtNome.innerHTML = "Nome Valido!";
    txtNome.style.color = "green";
  } else {
    txtNome.innerHTML = "Nome invalido!";
    txtNome.style.color = "red";
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#email");
  if (email.value.indexOf("@") == -1) {
    txtEmail.innerHTML = "E-mail invalido!";
    txtEmail.style.color = "red";
  }
}
