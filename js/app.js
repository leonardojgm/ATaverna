
const resultadosPesquisa = document.getElementById('resultados-pesquisa');
const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisa = document.getElementById('botao-pesquisa');

campoPesquisa.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    exibirPassoAPasso();
  }
});

botaoPesquisa.addEventListener('click', () => {
  exibirPassoAPasso();
});

async function exibirPassoAPasso() {
  const itemResultado = document.createElement('div');

  document.getElementById('loader').style.display = 'block';

  // Construindo o prompt
  let prompt = `
    Você é o mestre de uma aventura de RPG, a aventura começa assim:
    ${campoPesquisa.value}.
    Você precisa pegar essa narrativa e introduzir a história.
    Na sequencia farei outra solicitação pedindo 4 opções para tomada de decisão do jogador.
    A resposta tem que vir formatada para HTML.`;
  
  // Criando o objeto a ser enviado no corpo da requisição
  const body = {
    prompt: prompt
  };

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

    const inicio = await response.json();

    document.getElementById('loader').style.display = 'none';

    itemResultado.innerHTML = `
    <div>
      ${inicio}
    </div>`;

    itemResultado.classList.add('item-resultado');

    document.getElementById('main').classList.remove('centro');
    
    campoPesquisa.style.display = 'none';
  
    resultadosPesquisa.appendChild(itemResultado);

    botaoPesquisa.remove();
  } catch (error) {
    console.error('Erro:', error);

    await new Promise(resolve => setTimeout(resolve, 10000));

    return exibirPassoAPasso();
  }
}