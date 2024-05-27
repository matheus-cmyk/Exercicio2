function obterInfo (){
    const casa = prompt("Qual o nome do time da casa: ")
    const visita = prompt("Qual o nome time dos visitantes : ")

    const placarCasa = parseInt(prompt(`Qual o placar do time da casa ${casa}? `),10)
    const placarVisita = parseInt(prompt(`Qual o placar do time dos visitantes ${visita}? `),10)


    let resultado
    if (casa>visita){
        resultado = `o time ${casa} é vencedor`
    }else if (visita>placar){
        resultado = `o time ${visita} é vencedor`
    }else{
        resultado = `o jogo terminou em empate`
    }

    alert(resultado);

 
}   
obterInfo();