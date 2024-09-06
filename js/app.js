
const resultadosPesquisa = document.getElementById('resultados-pesquisa');
const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisa = document.getElementById('botao-pesquisa');
const acoes = document.getElementById('acoes');
const audio = document.getElementById("myAudio");
const playPauseButton = document.getElementById("playPauseButton");
let historia = "";

playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
      audio.play();
      
      playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
      audio.pause();

      playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
 });

campoPesquisa.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    criarAventura();
  }
});

botaoPesquisa.addEventListener('click', () => {
  criarAventura();
});

async function criarAventura() {
  document.getElementById('loader').style.display = 'block';

  campoPesquisa.remove();
  botaoPesquisa.remove();

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
    ${campoPesquisa.value}.
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

    return atualizarResultado();
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

  resultadosPesquisa.appendChild(itemResultado);

  if (!texto.includes("FIM DE JOGO")) {
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
  buttonA.addEventListener('click', function() { 
    avancarAventura(`A`);
  });

  acoes.appendChild(buttonA);
  
  const buttonB = document.createElement('button');

  buttonB.id = 'button-b';
  buttonB.innerHTML = 'B';
  buttonB.addEventListener('click', function() { 
    avancarAventura(`B`);
  });

  acoes.appendChild(buttonB);
  
  const buttonC = document.createElement('button');

  buttonC.id = 'button-c';
  buttonC.innerHTML = 'C';
  buttonC.addEventListener('click', function() { 
    avancarAventura(`C`);
  });

  acoes.appendChild(buttonC);

  const buttonD = document.createElement('button');

  buttonD.id = 'button-d';
  buttonD.innerHTML = 'D';
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
