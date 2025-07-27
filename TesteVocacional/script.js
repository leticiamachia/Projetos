var qntA = 0, qntB = 0, qntC = 0, qntD = 0, qntE = 0;

function ContarOpcao(select) {
    if (select.value == 'A') {
        qntA++;
    }
    else if (select.value == 'B') {
        qntB++;
    }
    else if (select.value == 'C') {
        qntC++;
    }
    else if (select.value == 'D') {
        qntD++;
    }
    else if (select.value == 'E') {
        qntE++;
    }
}

function LerSelect() {
    qntA = 0;
    qntB = 0;
    qntC = 0;
    qntD = 0;
    qntE = 0;
    // Pega todos os <select> da página e guarda em uma variavel
    const selects = document.querySelectorAll('select');
    // Percorre cada select usando forEach (parecido com loop)
    selects.forEach(ContarOpcao);
    // Mostra o resultado no console depois de rodar "todo o loop"
    atualizarPorcentagem();
    document.getElementById('resultado').style.display = 'block';

    // Mostrar o resultado textual
    const mensagemDiv = document.getElementById('mensagemResultado');
    mensagemDiv.style.display = 'block';

    // Cria um mapa de áreas
    const areas = {
      'Ciências Exatas ou Tecnologia': qntA,
      'Artes e Comunicação': qntB,
      'Saúde e Ciências Humanas': qntC,
      'Meio Ambiente e Ciências Naturais': qntD,
      'Negócios e Gestão': qntE
    };

    // Encontra o maior valor
    const maiorPontuacao = Math.max(qntA, qntB, qntC, qntD, qntE);

    // Filtra todas as áreas que têm essa pontuação
    const areasComMaiorPontuacao = Object.keys(areas).filter(area => areas[area] === maiorPontuacao);

    // Gera o texto da resposta
    let texto = '';
    if (areasComMaiorPontuacao.length === 1) {
      texto = `Você demonstrou maior afinidade com a área de <strong>${areasComMaiorPontuacao[0]}</strong>.`;
    } else {
      const lista = areasComMaiorPontuacao.map(area => `<strong>${area}</strong>`).join(', ');
      texto = `Você demonstrou afinidade com as seguintes áreas: ${lista}.`;
    }

    mensagemDiv.innerHTML = `
      <h4 class="text-center">Resultado:</h4>
      <p class="text-center">${texto}</p>
    `;
}

// Mostrando com barra de porcentagem
function atualizarPorcentagem() {
    const barraExatas = document.getElementById('exatas');
    barraExatas.style.width = qntA * 10 + '%';
    barraExatas.innerHTML = qntA * 10 + '%';

    const barraArtes = document.getElementById('artes');
    barraArtes.style.width = qntB * 10 + '%';
    barraArtes.innerHTML = qntB * 10 + '%';

    const barraSaude = document.getElementById('saude');
    barraSaude.style.width = qntC * 10 + '%';
    barraSaude.innerHTML = qntC * 10 + '%';

    const barraAmbientais = document.getElementById('ambientais');
    barraAmbientais.style.width = qntD * 10 + '%';
    barraAmbientais.innerHTML = qntD * 10 + '%';

    const barraNegocios = document.getElementById('negocios');
    barraNegocios.style.width = qntE * 10 + '%';
    barraNegocios.innerHTML = qntE * 10 + '%';
}