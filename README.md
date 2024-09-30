# A Taverna

Um simulador de aventuras narrativas dinâmicas e supreendentes

![image](https://github.com/user-attachments/assets/f8beb36e-2a0d-40cc-ad59-6be321e1840c)

Demo disponível em: https://ataverna.vercel.app/

Em 5 aulas aprendemos a implementar um sistema simples com uma barra de busca, realizando filtragem de itens previamente registrados.

Isso somente usando HTML + JS + CSS, sempre com o apoio da IA Gemini dando dica e facilitando atividades.

Com base nisso fiz um desenvolvimento similar ao apresentado em aulas, mas não consegui parar por ai, fui buscar como integrar com a API do Gemini.

Com alguns feedbacks que recebi em sala do Gui ao testar minha aplicação fiz diversas melhorias.

Segue descrição da A Taverna:

Aventura e Imersão

"Mergulhe em um mundo de fantasia épica em A Taverna! Você é o protagonista de uma história intrigante, onde cada decisão molda o seu destino. Explore tavernas escuras, enfrente criaturas perigosas e desvende mistérios ancestrais. Suas escolhas definirão o rumo da aventura. Prepare-se para viver uma experiência única e inesquecível!"

Mistério e Intriga

"Um segredo obscuro se esconde nas sombras da taverna... Desvende mistérios, desvende conspirações e tome decisões cruciais em um jogo de RPG interativo. Cada escolha te levará mais perto da verdade, ou te afundará em um abismo de perdição. O que você irá descobrir?"

Liberdade e Criatividade

"Crie sua própria história em A Taverna! Com infinitas possibilidades, você decide o caminho a seguir. Seja um herói corajoso, um vilão astuto ou um negociante sagaz. As escolhas são suas, e as consequências também. Liberte sua imaginação e embarque nessa jornada épica!"

Desafio e Recompensa

"Aceite o desafio e mostre suas habilidades! A Taverna é um jogo que exige estratégia, raciocínio e coragem. Supere obstáculos, enfrente inimigos poderosos e conquiste a glória. Cada vitória te aproximará do objetivo final. Você está pronto?"

Emoção e Aventura

"Sinta a adrenalina de uma aventura épica! A Taverna é muito mais do que um jogo, é uma experiência imersiva que te fará sentir como um verdadeiro herói. Viva momentos emocionantes, faça amigos e inimigos, e construa sua própria lenda."

Começar Pré-Criada (Sem API Gemini)

![image](https://github.com/user-attachments/assets/c76e8afa-4967-40a5-a54b-78fd90248df7)

![image](https://github.com/user-attachments/assets/62dd701f-8436-444a-9edd-da6d54f472d7)

Criar (Com API Gemini)

![image](https://github.com/user-attachments/assets/44178988-8338-479e-8dc9-b32665e2c683)

![image](https://github.com/user-attachments/assets/f97ffe9a-efba-4bbf-b06d-5b385e7b886d)

![image](https://github.com/user-attachments/assets/d4239a82-cb4a-42cf-9e4d-f2553949ae34)

![image](https://github.com/user-attachments/assets/b7fd9ec7-de26-4461-8763-f2d61c3d2ae0)

Algumas coisas que o Gemini me ajudou a implantar:

1 - Loader
![image](https://github.com/user-attachments/assets/64f61848-1bcc-48f9-9cd7-edbacbf267f7)

2 - Audio
![image](https://github.com/user-attachments/assets/279690bd-4454-491e-90e6-e63d0286f42e)

3 - API Gemini

Ideia:

Aventura de rpg com seleção 

	- Solicitar um cenário
	- Validar se é possível usar a aventura ou se precisa de mais informações
	- Solicitar o nome do personagem e descrição se desejar
	- Introduzir a aventura com um objetivo
	- Exibir 4 opções
	- Processar e verificar se o objetivo foi cumprido, se não exibir novas 4 opções
