

const numeroSorte = Number(prompt("Selecione um numero da sorte, voce terá 3 tentativas....."))
const numeroRandom = Math.floor(Math.random() * 10)
console.log(numeroRandom)

if(numeroSorte == numeroRandom) {
    alert ("Parabens Voce acertou")
}else if(numeroSorte > numeroRandom){
alert ("Voce tem mais uma tentativa, tente um numero menor")
}else{
    
    alert (prompt("Voce tem mais duas tentativas, tente um numero maior"))
}









/* console.log(Math.random())  */
/* console.log(1 + Math.floor(Math.random() * 10)) */
/*(Math.Random) gerado numero de 1 - 10 o (Prompt)usuario vai tentar acertar o numero caso o usuario erre informe mensagem de menos ou mais até que o mesmo acerte 
Dica: para o usuario, caso o numero que o usuario digitou for menor fale que é maior, caso menor fale que é maior

 

Desafio:contagem de tentativas (Incremento ++) - maximo de 3 tentativas, caso ultrapasse exploda (game over)*/