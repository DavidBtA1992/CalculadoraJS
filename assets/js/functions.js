//! CONTANSTE pantalla
const pantalla = document.getElementById("screen");
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

const clear = document.getElementById("clear");

const point = document.getElementById("s.");
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
let buffer = undefined;

/**
 * Guarda en memoria el valor del numero seleccionado
 * @param {HTMLElement} element
 * @returns {string}
 */

export function numberMemory(element) {
  element.addEventListener("click", () => {
    if ((numero[0] == 0) & (numero.length == 1) & (element.value == 0)) {
      return;
    }
    numero = numero + element.value;
    pantalla.innerText = numero;
  });
}



//TODO: PENDIENTE DEFINIR FUNCIONES PARA OPERADORES DE CALDULADORA

/**
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */

export function suma(a, b) {
  buffer = parseFloat(numero);
  numero = "";
  pantalla.innerText = numero;

  let stna = parseFloat(a);
  let stnb = parseFloat(b);

}

/////////////////////////////////////////////


point.addEventListener("click", () => {
  let existePunto = numero.indexOf(".");
  if (existePunto == -1) {
    numero = numero + point.value;
    pantalla.innerText = numero;
  }
});

clear.addEventListener("click", () => {
  numero = "";
  pantalla.innerText = numero;
});
