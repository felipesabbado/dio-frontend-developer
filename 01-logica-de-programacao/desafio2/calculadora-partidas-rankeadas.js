exibirPosicaoRanking(80, 3)

function exibirPosicaoRanking(numeroVitorias, numeroDerrotas) {
    let saldoVitorias = calcularSaldoVitorias(numeroVitorias, numeroDerrotas)
    let nivel = calcularRanking(saldoVitorias)
    console.log(`O jogador tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`)
}

function calcularSaldoVitorias(numeroVitorias, numeroDerrotas) {
    return numeroVitorias - numeroDerrotas
}

function calcularRanking(saldoVitorias) {
    if(saldoVitorias < 10){
        return "Ferro"
    } else if(saldoVitorias < 20) {
        return "Bronze"
    } else if(saldoVitorias < 50) {
        return "Prata"
    } else if(saldoVitorias < 80) {
        return "Ouro"
    } else if(saldoVitorias < 90) {
        return "Diamante"
    } else if(saldoVitorias < 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}
