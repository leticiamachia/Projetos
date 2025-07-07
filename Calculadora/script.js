var escolha, resultado;

function AdicionarNaTela(valor){
    document.getElementById("tela").value += valor;
}

function LimparTela(){
    document.getElementById("tela").value = " ";
}

function EscolhaOperacao(opc){
    escolha=opc;
    if(opc==1 || opc==2 || opc==3 || opc==4){
        num1 = parseFloat(document.getElementById("tela").value);
        LimparTela();
    }
}

function igual(){
    if(escolha==1){
        resultado = num1 + parseFloat(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado; 
    }

    if(escolha==2){
        resultado = num1 - parseFloat(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado; 
    }

    if(escolha==3){
        resultado = num1 * parseFloat(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado; 
    }

    if(escolha==4){
        resultado = num1 / parseFloat(document.getElementById("tela").value);
        document.getElementById("tela").value = resultado; 
    }
}


