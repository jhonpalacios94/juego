let numSecreto = 0;
let intento = 1;

function generarNumero() {
  return Math.floor(Math.random() * 10) + 1;
}
function asignarTexto(elemento, texto) {
  let elementohtml = document.querySelector(elemento);
  elementohtml.innerHTML = texto;
  return;
}

function verificaIntento() {
  let numeroUsuario = parseInt(document.getElementById("numUsuario").value);
  if (numeroUsuario == numSecreto) {
    asignarTexto("p",`lo lograste en : ${intento} ${intento == 1 ? "vez" : "veces"}`);
  } else {
    if (numeroUsuario > numSecreto) {
      asignarTexto("p", "el numero secreto es menor");
    } else {
      asignarTexto("p", "el numero secreto es mayor");
    }
    intento++;
    limpiar();
  }
  return;
}
function limpiar() {
  document.getElementById("numUsuario").value = "";
}

function reiniciarJuego() {
  limpiar();
  inical();
 
}
function inical() {
  asignarTexto("h1", "el juego del numero secreto");
  asignarTexto("p", "indica un numero del 1 al 10");
  numSecreto = generarNumero();
  intento = 1;
}
inical();
