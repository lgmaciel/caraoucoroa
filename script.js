divMoeda = document.querySelector("#moeda");

//função que retorna 0="Cara" ou 1="Coroa"
function tirarCaraOuCoroa() {
    moeda = [
        "Cara",
        "Coroa"
    ]
    ladoSorteado = Math.floor(Math.random() * 2)
    return moeda[ladoSorteado]
}

function jogarMoeda() {
    resultado = tirarCaraOuCoroa()
    divMoeda.innerText = resultado
}


divMoeda.addEventListener("click", jogarMoeda)
