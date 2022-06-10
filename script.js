function selecionar() {
    let itens = document.querySelector(".itens");
    itens.classList.toggle("selecionado");
    let icone = document.querySelector(".icone");
    icone.classList.toggle("escondido");
}