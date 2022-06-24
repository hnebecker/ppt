//constantes (pegando do html)
let vocePlacar = 0;
let computadorPlacar = 0;
const placarVoceSpan = document.getElementById("placarVoce");
const placarPCSpan = document.getElementById("placarPC");
const placarClass = document.querySelector(".placar");
const resultadoP = document.getElementById("resultadoP");
const empateP = document.getElementById("empate")
const pedra = document.getElementById("pedraA");
const papel = document.getElementById("papelL");
const tesoura = document.getElementById("tesouraA");


function escolhaPC(){
    const escolhas = ['pedra', 'papel', 'tesoura']
    const aleatorio = Math.floor(Math.random()*3);
    return escolhas[aleatorio];
}

function pcganhou(voce,pc){
    computadorPlacar++;
    placarPCSpan.innerText = computadorPlacar;
    placarVoceSpan.innerText = vocePlacar;

    switch (pc){
    case "pedra" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x1F5FF);
    break
    case "papel" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x1F4DC);
    break
    case "tesoura" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x2702);
    break
}
}


function empate(voce,pc){
    empateP.innerText = "Empatou";
    setTimeout(() => {
        empateP.innerText = ""
    },500);
   
    switch (pc){
        case "pedra" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x1F5FF);
        break
        case "papel" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x1F4DC);
        break
        case  "tesoura": resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x2702);
        break
    }

}
function voceganhou(voce,pc){
    vocePlacar++;
    placarVoceSpan.innerHTML = vocePlacar;
    placarPCSpan.innerHTML = computadorPlacar;

    switch (pc){
        case "pedra" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x1F5FF);
        break
        case "papel" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x1F4DC);
        break
        case "tesoura" : resultadoP.innerText = "O computador escolheu: " + String.fromCodePoint(0x2702);
        break
    }
}




//regras game
function game(escolhaHumana){
    const escolhaPCA = escolhaPC();
switch (escolhaHumana + escolhaPCA){
    case "pedratesoura": 
    case "tesourapapel":
    case "papelpedra":
    voceganhou(escolhaHumana, escolhaPCA)
    break
    case "pedrapedra":
    case "tesouratesoura":
    case "papelpapel":
    empate(escolhaHumana, escolhaPCA)
    break;
    case "pedrapapel":
    case "papeltesoura":
    case "tesourapedra":        
    pcganhou(escolhaHumana, escolhaPCA)
    break
}


}

function main(){
pedra.addEventListener('click', function(){
    game("pedra");
})
papel.addEventListener('click', function(){
    game("papel")
})
tesoura.addEventListener('click', function(){
    game("tesoura")
})
}
main()