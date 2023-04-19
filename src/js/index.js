const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

nome.addEventListener("focus", () => {
  nome.style.backgroundColor = "rgb(193, 191, 191)";
});
nome.addEventListener("blur", () => {
  nome.style.backgroundColor = "#fff";
});

email.addEventListener("focus", () => {
  email.style.backgroundColor = "rgb(193, 191, 191)";
});
email.addEventListener("blur", () => {
  email.style.backgroundColor = "#fff";
});

telefone.addEventListener("focus", () => {
  telefone.style.backgroundColor = "rgb(193, 191, 191)";
});
telefone.addEventListener("blur", () => {
  telefone.style.backgroundColor = "#fff";
});

mensagem.addEventListener("focus", () => {
  mensagem.style.backgroundColor = "rgb(193, 191, 191)";
});
mensagem.addEventListener("blur", () => {
  mensagem.style.backgroundColor = "#fff";
});
