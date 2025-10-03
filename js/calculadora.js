let resposta = document.getElementById('resposta')

function principal(){

    let kwh = 45
    let qtkwh = Number(document.getElementById('qtkwh').value)
    let kwhFinal = qtkwh / 45

    resposta.innerHTML = ``
    resposta.innerHTML += `Se você quer usar ${qtkwh} Kwh no mês, você irá precisar de ${kwhFinal.toFixed(0)} placas`
}
