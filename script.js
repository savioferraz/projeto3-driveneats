let escolhaprato;
let escolhabebida;
let escolhasobremesa;
let pratoselecionado;
let bebidaselecionada;
let sobremesaselecionada;
let valorprato;
let valorbebida;
let valorsobremesa;

function selecionarprato(elemento) {
    valorprato = document.querySelector("span").innerHTML;
    escolhaprato = document.querySelector(".cardapiocomida .selecionado");
    pratoselecionado = document.querySelector("h2").innerHTML;   
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
    bebidaselecionada = document.querySelector("h2").innerHTML;
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
    sobremesaselecionada = document.querySelector("h2").innerHTML;   
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
        valorprato = Number(valorprato);
        valorbebida = Number(valorbebida);
        valorsobremesa = Number(valorsobremesa);
        let total = (valorprato + valorbebida + valorsobremesa);
        let msgfinal = (`Você escolheu: 
        - ${pratoselecionado} (R$ ${valorprato}) 
        - ${bebidaselecionada} (R$ ${valorbebida}) 
        - ${sobremesaselecionada} (R$ ${valorsobremesa})
        
        
        - Total: R$ ${total} 
        
        Qual a forma de pagamento?`);
        alert (msgfinal);
        let msgencript = encodeURI(msgfinal);
        alert (msgencript);
        window.location = `https://wa.me/5581997459919?text=${msgencript}`;        
    }
}
