const divMoeda = document.querySelector("#moeda");
const btCara = document.querySelector("#btCara")
const btCoroa = document.querySelector("#btCoroa")
const txPontos = document.querySelector("#txPontos")
const txAposta = document.querySelector("#txAposta")

//função que retorna 0="Cara" ou 1="Coroa"
function tirarCaraOuCoroa() {
    moeda = [
        "Cara",
        "Coroa"
    ]
    ladoSorteado = Math.floor(Math.random() * 2)
    return moeda[ladoSorteado]
}


divMoeda.addEventListener("click", () => {
    resultado = tirarCaraOuCoroa()
    divMoeda.innerText = resultado
})

btCara.addEventListener("click", ()=>{
    valorAposta = Number(txAposta.value)
    
    resultado = tirarCaraOuCoroa()
    divMoeda.innerText = resultado
    // pontuação
    if (resultado === "Cara") {
        txPontos.value = "💰" + (Number(txPontos.value.slice(2)) + valorAposta)
    } else {
        txPontos.value = "💰" + (Number(txPontos.value.slice(2)) - valorAposta)
    }
})

btCoroa.addEventListener("click", ()=>{
    valorAposta = Number(txAposta.value)

    resultado = tirarCaraOuCoroa()
    divMoeda.innerText = resultado
    // pontuação
    if (resultado === "Coroa") {        
        txPontos.value = "💰" + (Number(txPontos.value.slice(2)) + valorAposta)
    } else {
        txPontos.value = "💰" + (Number(txPontos.value.slice(2)) - valorAposta)
    }
})


txAposta.addEventListener("change", () => {
    // o valor da aposta que está sendo feita
    // ultrapassa os pontos que ganhei?
    if(
        Number(txAposta.value) >= Number(txPontos.value.slice(2))
    ) {
        txAposta.value = txPontos.value.slice(2)
    }
})