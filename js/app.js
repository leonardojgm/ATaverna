
const resultadosPesquisa = document.getElementById("resultados-pesquisa");
const campoNovaHistoria = document.getElementById("campo-nova-historia");
const botaoNovaHistoria = document.getElementById("botao-nova-historia");
const acoes = document.getElementById("acoes");
const audio = document.getElementById("meu-audio");
const playPauseButton = document.getElementById("botao-play-pause");
const novoButton = document.getElementById("botao-criar");
const usarButton = document.getElementById("botao-usar");
const campoPesquisa = document.getElementById('campo-pesquisa');
let historia = "";

novoButton.addEventListener("click", () => {      
  novoButton.style.display = 'none';
  usarButton.style.display = 'none';
  campoNovaHistoria.style.display = 'block';
  botaoNovaHistoria.style.display = 'block';
});

usarButton.addEventListener("click", () => {      
  novoButton.style.display = 'none';
  usarButton.style.display = 'none';
  campoPesquisa.style.display = 'block';
});

campoPesquisa.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    pesquisar();
  }
});

campoPesquisa.addEventListener('input', () => {
  pesquisar();
});

function pesquisar() {  
  const termoMinusculo = campoPesquisa.value.toLowerCase();
  
  document.getElementById('main').classList.remove('centro');

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let prompt = "";
  let inicio = "";

  // Itera sobre cada dado e constrói o HTML para cada resultado
  for (let dado of dados) {
    prompt = dado.prompt.toLowerCase();
    inicio = dado.inicio.toLowerCase();

    // Se titulo ou inicio inclui termoMinusculo
    if (prompt.includes(termoMinusculo) || inicio.includes(termoMinusculo)) {
      resultados +=`
        <div class="item-resultado">
          <img src="img/${dado.foto}" class="foto" alt="${dado.prompt}" />
          <div class="info">
            <div class="info-meta">
              <div class="info-meta-titulo">
                <h2>${dado.prompt} </h2>
              </div>
              <button class="botao-comecar-pre-criado" title="Começar">
                <label>Começar</label>
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
            <div class="descricao-meta">${dado.inicio}</div>
          </div>
        </div>`;
    }
  };  

  if (!resultados) {
    resultados =`<h1>Nada foi encontrado</h1>`
  }

  resultadosPesquisa.innerHTML = "";

  exibirItens(resultados);
  prepararBotaoComecarPreCriado();
}

function exibirItens(resultados) {
  const itemResultado = document.createElement('div');
  
  itemResultado.innerHTML = resultados;
  
  resultadosPesquisa.appendChild(itemResultado);
}

function prepararBotaoComecarPreCriado() {
  const botaoComecarPreCriado = document.querySelectorAll('.botao-comecar-pre-criado');

  botaoComecarPreCriado.forEach(botao => {
    botao.addEventListener('click', async () => {
      const prompt = botao.parentElement.querySelector('h2').textContent.trim(); 
      const texto = dados.find(x => x.prompt.includes(prompt)).inicio;

      campoPesquisa.style.display = 'none';

      await atualizarResultado(texto);
    });
  });
}

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
      audio.play();

      playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
      audio.pause();

      playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

campoNovaHistoria.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    criarAventura();
  }
});

botaoNovaHistoria.addEventListener('click', () => {
  criarAventura();
});

async function criarAventura() {
  document.getElementById('loader').style.display = 'block';

  campoNovaHistoria.remove();
  botaoNovaHistoria.remove();

  await criarHistoria();
}

async function avancarAventura(resposta) {
  resultadosPesquisa.innerHTML = "";
  acoes.innerHTML = "";
  document.getElementById('main').classList.add('centro');
  document.getElementById('loader').style.display = 'block';

  await avancarHistoria(resposta);
}

async function criarHistoria() {
  // Construindo o prompt
  let prompt = `
    Você é o mestre de uma aventura de RPG, a aventura começa assim:
    ${campoNovaHistoria.value}.
    Você precisa pegar essa narrativa e introduzir a história.
    O ponto de partida da aventura sempre é a Taverna, mas a palavra Taverna não pode ser usada no título.
    A aventura deve possuir um objetivo claro na introdução.
    A resposta tem que vir formatada para HTML.
    Não utilize Markdown.
    Pode usar emoticons.
    Na sequencia exiba 4 opções usando tag <table></table> para tomada de decisão do jogador, exemplo:
    <table>
      <tbody>
      <tr>
        <td>A) Descrição.</td>
      </tr>
      <tr>
        <td>B) Descrição.</td>
      </tr>
      <tr>
        <td>C) Descrição.</td>
      </tr>
      <tr>
        <td>D) Descrição.</td>
      </tr>
    </tbody></table>`;
  
  // Criando o objeto a ser enviado no corpo da requisição
  const body = {
    prompt: prompt
  };  

  const texto = await consultarGemini(body)

  await atualizarResultado(texto);
}

async function avancarHistoria(resposta) {
  // Construindo o prompt
  let prompt = `
    Continue a história do ponto onde parou: 
    "${historia}".
    O usuario escolheu a opção ${resposta}.
    A resposta tem que vir formatada para HTML.
    Não utilize Markdown.
    Pode usar emoticons.
    Você deve incluir no final do texto a frase "FIM DE JOGO" caso o jogador tenha chegado a uma das situações:
    1. Morreu
    2. Concluiu seu objetivo principal
    3. Venceu o jogo
    4. Derrotou o chefão final
    5. Se perdeu
    6. O vilão alcançou seu objetivo
    Se não você deve exibir novas 4 opções usando tag <table></table> para tomada de decisão do jogador, exemplo:
    <table>
      <tbody>
      <tr>
        <td>A) Descrição.</td>
      </tr>
      <tr>
        <td>B) Descrição.</td>
      </tr>
      <tr>
        <td>C) Descrição.</td>
      </tr>
      <tr>
        <td>D) Descrição.</td>
      </tr>
    </tbody></table>`;
  
  // Criando o objeto a ser enviado no corpo da requisição
  const body = {
    prompt: prompt
  };

  const texto = await consultarGemini(body);

  await atualizarResultado(texto);
}  

async function consultarGemini(body) {
  try {
    // Fazendo a requisição POST
    const response = await fetch('https://mini-integracao-api-gemini.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Erro ao fazer a requisição: ${response.statusText}`);
    }

    const resposta = await response.json();

    if (!resposta || resposta === "undefined" || resposta.length === 0 || resposta === "" || resposta === " ") {
      throw new Error('Resposta vazia');
    }

    return resposta;
  } catch (error) {
    console.error('Erro:', error);

    await new Promise(resolve => setTimeout(resolve, 10000));

    return consultarGemini(body);
  }
}

async function atualizarResultado(texto) {
  const itemResultado = document.createElement('div');
  
  document.getElementById('main').classList.remove('centro');
  document.getElementById('loader').style.display = 'none';

  historia = texto;

  itemResultado.innerHTML = `
  <div>
    ${texto}
  </div>`;

  itemResultado.classList.add('item-resultado');

  resultadosPesquisa.innerHTML = "";

  resultadosPesquisa.appendChild(itemResultado);

  console.log(texto);

  if (texto && !texto.includes("FIM DE JOGO")) {
    await exibirBotoesOpcoes()
  }
  else {    
    await exibirBotaoReiniciar()
  }
}

async function exibirBotoesOpcoes() {
  const buttonA = document.createElement('button');

  buttonA.id = 'button-a';
  buttonA.innerHTML = 'A';
  buttonA.classList.add('botao-acao');
  buttonA.addEventListener('click', function() { 
    avancarAventura(`A`);
  });

  acoes.appendChild(buttonA);
  
  const buttonB = document.createElement('button');

  buttonB.id = 'button-b';
  buttonB.innerHTML = 'B';
  buttonB.classList.add('botao-acao');
  buttonB.addEventListener('click', function() { 
    avancarAventura(`B`);
  });

  acoes.appendChild(buttonB);
  
  const buttonC = document.createElement('button');

  buttonC.id = 'button-c';
  buttonC.innerHTML = 'C';
  buttonC.classList.add('botao-acao');
  buttonC.addEventListener('click', function() { 
    avancarAventura(`C`);
  });

  acoes.appendChild(buttonC);

  const buttonD = document.createElement('button');

  buttonD.id = 'button-d';
  buttonD.innerHTML = '<b>D</b>';
  buttonD.classList.add('botao-acao');
  buttonD.addEventListener('click', function() { 
    avancarAventura(`D`);
  });

  acoes.appendChild(buttonD);
}

async function exibirBotaoReiniciar() {
  const reiniciar = document.createElement('button');

  reiniciar.id = 'reiniciar';
  reiniciar.innerHTML = 'Recomeçar!';
  reiniciar.addEventListener('click', function() { 
      window.location.reload();
  });

  acoes.appendChild(reiniciar);
}
