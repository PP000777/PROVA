const usuarios = [];

let nome = "Pedro";
let idade = 12;
let email = "pedrolegal@gmail.com";

function validarUsuarios() {
  if (nome === "") return false;
  if (idade <= 0) return false;
  if (email === "") return false;
  return true;
}

function addUsuario() {
  if (validarUsuarios()) {
    usuarios.push({ nome, idade, email });
    console.log("Você está cadastrado :)");
    mostrarUsuarios();
  }
}

function mostrarUsuarios() {
  console.log("Lista de Usuários:");
  usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
  });
}

addUsuario();
