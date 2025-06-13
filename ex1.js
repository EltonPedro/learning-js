"use strict";

const rosePrice = 8;
let roseQuantity = 50;

const lilyPrice = 10;
let lilyQuantity = 10;

const tulipPrice = 2;
let tulipQuantity = 120;

const totalRose = rosePrice *  roseQuantity;
const totalLily = lilyPrice * lilyQuantity;
const totalTulip = tulipPrice * tulipQuantity;

console.log(`Rose - unit price: ${rosePrice}, quantity: ${roseQuantity}, value: ${totalRose}`);
console.log(`Lily - unit price: ${lilyPrice}, quantity: ${lilyQuantity}, value: ${totalLily}`);
console.log(`Tulip - unit price: ${tulipPrice}, quantity: ${tulipQuantity}, value: ${tulipQuantity}`)
console.log("Total: "+(totalRose + totalLily + totalTulip))


// var - É global independente do escopo, caso ele seja ordinário. Se torna local no escopo de uma função | Torna possível de redeclarar uma variável, que por acidente pode causar complicações no código
// let - Inpede o re-declarar de uma variável | É limitado ao escopo aonde foi definido, caso não esteja dentro de um bloco de código é global. Dentro de um se torna local
// const - Impossibilita a re-inicialização do valor de uma constante

// Todos são untyped, ou seja, não são limitados a um tipo e a definição do mesmo é dinâmica
// "use strict" - Usado para dizer ao interpretador que deve impossibilitar a declaração de uma variável sem inicialização

// Pode se criar bloco de códigos usando chavetar{} sem estar atrelado a uma palavra reservada(if, while...), mas não é uma boa prática.

// Shadowing - Re-declarar uma variável global com o mesmo nome em escopo local

// Hoisting - Ocorre quando o interpretador lê o código e move as declarações de variáveis e funções para o topo do escopo atual, antes de executar qualquer outro código.
// O interpretador passa a conhecer essas variáveis mesmos antes de chegar no código em si que pode se encontrar no fundo, ele sabe que ela está disponível para uso, mas ainda não sabe qual é o valor dela.
// Só funciona com declarações e a variável "var"


