//! CONSTANTES numeros
const cero = document.getElementById("n0");
const uno = document.getElementById("n1");
const dos = document.getElementById("n2");
const tres = document.getElementById("n3");
const cuatro = document.getElementById("n4");
const cinco = document.getElementById("n5");
const seis = document.getElementById("n6");
const siete = document.getElementById("n7");
const ocho = document.getElementById("n8");
const nueve = document.getElementById("n9");
export const nummatriz = [
  cero,
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis,
  siete,
  ocho,
  nueve,
];
//! CONSTANTES operadores
const operadores = {
  mas: document.getElementById("s+"),
  menos: document.getElementById("s-"),
  multiplicacion: document.getElementById("s*"),
  division: document.getElementById("s/"),
};
//! CONSTANTES programa
let numero = "";

/**
 * Guarda en memoria el valor del numero seleccionado
 * @param {HTMLElement} element
 * @returns {string}
 */

export function numberMemory(element) {
  element.addEventListener("click", () => {
    return (numero = numero + element.value);
  });
}

/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */

export function operacion(a, b) {
  let stna = parseFloat(a);
  let stnb = parseFloat(b);
  if (condition) {
  }
}
