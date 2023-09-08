let nome = "Mario";
let idade = 15;
idade +=1;

let mensagem = `Olá ${nome}. Sua idade é ${idade} anos.`;

console.log(mensagem)

if (idade >= 18) {
    console.log("Você tem 18 ou mais! Seja bem-vindo!")
}
else {
    console.log("Você tem menos de 18 anos, desculpe-me!")
}

let pessoa = {nome : "Luigi", idade: 25}; /* {} serve para marcar objetos */
console.log(pessoa);
pessoa.nome="Mario";
pessoa.idade=15;
console.log(pessoa.nome);
console.log(pessoa.idade); /* forma mais rápida e limpa */
console.log(pessoa["idade"]); /* forma mais poderosa */

let listaDesejos = ["Carro", "Apartamento", "Videogame"]; /* [] serve para marcar arrays (lista) */
console.log(listaDesejos);
console.log(listaDesejos[0]); /* Imprime apenas a posição 0 do array. */

let paragrafo = document.querySelector("#para1"); /* retorna o id para1 dentro da variavel, poderia
buscar também "para" o primeiro que encontrar */

paragrafo.addEventListener("click",mudaVerde);
paragrafo.addEventListener("mouseover", mudaVermelho);

function mudaVerde(){
     paragrafo.style.background="green";
}
function mudaVermelho() {
    paragrafo.style.background="red";
}