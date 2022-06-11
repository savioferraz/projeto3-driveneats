function selecionarprato(item) {
    let escolha = document.querySelector(".cardapiocomida .selecionado");   
    if (escolha !== null) {
        escolha.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
}
function selecionarbebida(item) {
    let escolha = document.querySelector(".cardapiobebida .selecionado");   
    if (escolha !== null) {
        escolha.classList.remove("selecionado");
    }
    item.classList.add("selecionado");
}
function selecionarsobremesa(item) {
    let escolha = document.querySelector(".cardapiosobremesa .selecionado");   
    if (escolha !== null) {
        escolha.classList.remove("selecionado");
    }
    item.classList.add("selecionado");  
}
function checkprato(item){
    let icone = item.querySelector(".cardapiocomida .icone");
    let check = document.querySelector(".cardapiocomida .escondido")
    if (check !== null) {
        icone.classList.add("escondido");
    }
        icone.classList.remove("escondido");
}