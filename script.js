let escolhaprato;
let escolhabebida;
let escolhasobremesa;
let pratoselecionado;
let bebidaselecionada;
let sobremesaselecionada;
let valorprato;
let valorbebida;
let valorsobremesa;
let total;

function selecionarprato(elemento) {
    valorprato = elemento.querySelector("span").innerHTML;
    escolhaprato = document.querySelector(".cardapiocomida .selecionado");
    pratoselecionado = elemento.querySelector("h2").innerHTML;   
    icone = elemento.querySelector(".icone");
    check = elemento.querySelector(".escondido");
    if (escolhaprato !== null) {
        escolhaprato.classList.remove("selecionado");
    }
    if (check !== null) {
        icone.classList.add("escondido");
        let check = null;
    }
    icone.classList.remove("escondido");
    valorprato = Number(valorprato);
    elemento.classList.add("selecionado");
    liberarbotao();
}
function selecionarbebida(elemento) {
    valorbebida = elemento.querySelector("span").innerHTML;
    escolhabebida = document.querySelector(".cardapiobebida .selecionado");
    bebidaselecionada = elemento.querySelector("h2").innerHTML;
    icone = elemento.querySelector(".icone");
    check = elemento.querySelector(".escondido");
    if (escolhabebida !== null) {
        escolhabebida.classList.remove("selecionado");
    }
    if (check !== null) {
        icone.classList.add("escondido");
        let check = null;
    }
    icone.classList.remove("escondido");
    valorbebida = Number(valorbebida);
    elemento.classList.add("selecionado");
    liberarbotao();
}
function selecionarsobremesa(elemento) {
    valorsobremesa = elemento.querySelector("span").innerHTML;
    escolhasobremesa = document.querySelector(".cardapiosobremesa .selecionado");
    sobremesaselecionada = elemento.querySelector("h2").innerHTML;
    icone = elemento.querySelector(".icone");
    check = elemento.querySelector(".escondido");   
    if (escolhasobremesa !== null) {
        escolhasobremesa.classList.remove("selecionado");
    }
    if (check !== null) {
        icone.classList.add("escondido");
        let check = null;
    }
    icone.classList.remove("escondido");
    valorsobremesa = Number(valorsobremesa);
    elemento.classList.add("selecionado");
    liberarbotao();  
}
function checkprato(elemento){
  
}
function liberarbotao(){
    if (valorprato && valorbebida && valorsobremesa){
        let botao = document.querySelector(".finalizar");
        botao.classList.add("finalizado");
        botao.innerHTML = "Finalizar Pedido";
    }
}
function finalizar() {
    telaconfirm = document.querySelector(".telaconfirmar");
    telaconfirm.classList.remove("escondido");
    textoprato = document.querySelector(".pratoconfirmar");
    textoprato.innerHTML = pratoselecionado;
    textobebida = document.querySelector(".bebidaconfirmar");
    textobebida.innerHTML = bebidaselecionada;
    textosobremesa = document.querySelector(".sobremesaconfirmar");
    textosobremesa.innerHTML = sobremesaselecionada;
    precoprato = document.querySelector(".precoprato");
    precoprato.innerHTML = `R$ ${valorprato}0`;
    precobebida = document.querySelector(".precobebida");
    precobebida.innerHTML = `R$ ${valorbebida}0`;
    precosobremesa = document.querySelector(".precosobremesa");
    precosobremesa.innerHTML = `R$ ${valorsobremesa}0`;
    total = (valorprato + valorbebida + valorsobremesa);
    total = total.toFixed(2);
    precototal = document.querySelector(".precototal");
    precototal.innerHTML = `R$ ${total}`;    
}
function confirmar(){        
        let msgfinal = (`Você escolheu: 
        - ${pratoselecionado} (R$ ${valorprato}) 
        - ${bebidaselecionada} (R$ ${valorbebida}) 
        - ${sobremesaselecionada} (R$ ${valorsobremesa})
        Total: R$ ${total} 
        
        Nome:
        Endereço:`);
        let msgencript = encodeURI(msgfinal);
        window.location = `https://wa.me/5581999999999?text=${msgencript}`;
}
function cancelar(){
    let cancelamento = document.querySelector(".telaconfirmar");
    cancelamento.classList.add("escondido");
}
