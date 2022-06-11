let escolhaprato;
let escolhabebida;
let escolhasobremesa;
let valorprato;
let valorbebida;
let valorsobremesa;

function selecionarprato(elemento) {
    valorprato = document.querySelector("span").innerHTML;
    escolhaprato = document.querySelector(".cardapiocomida .selecionado");   
    if (escolhaprato !== null) {
        escolhaprato.classList.remove("selecionado");
    }
    valorprato = Number(valorprato);
    elemento.classList.add("selecionado");
    liberarbotao();
}
function selecionarbebida(elemento) {
    valorbebida = document.querySelector("span").innerHTML;
    escolhabebida = document.querySelector(".cardapiobebida .selecionado");   
    if (escolhabebida !== null) {
        escolhabebida.classList.remove("selecionado");
    }
    valorbebida = Number(valorbebida);
    elemento.classList.add("selecionado");
    liberarbotao();
}
function selecionarsobremesa(elemento) {
    valorsobremesa = document.querySelector("span").innerHTML;
    escolhasobremesa = document.querySelector(".cardapiosobremesa .selecionado");   
    if (escolhasobremesa !== null) {
        escolhasobremesa.classList.remove("selecionado");
    }
    valorsobremesa = Number(valorsobremesa);
    elemento.classList.add("selecionado");
    liberarbotao();  
}
function checkprato(elemento){
    let icone = elemento.querySelector(".cardapiocomida .icone");
    let check = icone.querySelector(".cardapiocomida .escondido")
    if (check) {
        check.classList.add("escondido");
    }
        icone.classList.remove("escondido");
}
function liberarbotao(){
    if (valorprato && valorbebida && valorsobremesa){
        let botao = document.querySelector(".finalizar");
        botao.classList.add("finalizado");
        botao.innerHTML = "Finalizar Pedido";
    }
}
function finalizar(){
    if (valorprato && valorbebida && valorsobremesa){
        alert("Você está sendo redirecionado ao nosso Whatsapp.");
        window.location = `https://wa.me/5581997459919?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A-%20Prato%3A%20Frango%20Yin%20Yang-%20Bebida%3A%20Coquinha%20Gelada-%20Sobremesa%3A%20PudimTotal%3A%20R%24%2027.70`;        
    }
}
