const dados = [
    {
        'prompt': "Orcs estão atacando a vila",
        'inicio': `<h1>Uma Aventura Épica Aguarda!</h1>
            O sol ainda luzia fraco no horizonte quando um cavaleiro ensanguentado irrompeu na pequena vila. Seu cavalo, ofegante, arrastava-se, e o homem, com a armadura amassada e o rosto marcado pela batalha, mal conseguia se manter na sela.
            'Orcs! Centenas deles! Estão a caminho da vila!' - gritou ele, sua voz rouca pela exaustão.
            A notícia se espalhou como fogo em palha. O pânico tomou conta dos moradores, que se aglomeraram nas ruas, seus rostos pálidos de medo. A vila, que até então vivia em paz, agora se encontrava à beira do caos.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Procurar o líder da milícia local para obter informações mais precisas sobre os orcs.</td>
            </tr>
            <tr>
            <td><b>B)</b> Investigar os arredores da vila em busca de vestígios da passagem dos orcs.</td>
            </tr>
            <tr>
            <td><b>C)</b> Reunir os aldeões para organizar a defesa da vila.</td>
            </tr>
            <tr>
            <td><b>D)</b> Buscar refúgio em um local seguro e aguardar que a ameaça passe.</td>
            </tr>
            </tbody></table>`,
        'foto': "orcs.jpg"
    },
    {
        'prompt': "A princesa foi raptada",
        'inicio': `<h1>Uma Sombra sobre o Reino</h1>
            Um manto de tristeza paira sobre o reino. A princesa, a joia da coroa, desapareceu sem deixar rastros. Seus aposentos foram encontrados vazios, a cama desarrumada e uma janela aberta para a noite fria. A notícia se espalhou rapidamente, deixando a todos perplexos e angustiados.
            Você se encontra em uma hospedaria movimentada, um local onde viajantes e aventureiros de todas as origens se reúnem. As paredes de madeira escura são adornadas com mapas antigos e espadas ornamentadas, e o ar está carregado com o aroma de cerveja e comida caseira. É o lugar perfeito para buscar informações e aliados.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Procurar o mestre-espião da corte, um homem conhecido por suas habilidades em descobrir segredos.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Visitar a biblioteca real para estudar antigas lendas sobre sequestros e resgates.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Investigar o estábulo real em busca de pistas sobre um possível cavalo desaparecido.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Consultar uma cartomante local para obter uma visão sobre o paradeiro da princesa.</td>
            </tr>
            </tbody></table>`,
        'foto': "princesa.jpg"
    },
    {
        'prompt': "Uma doença misteriosa está se espalhando pela vila",
        'inicio': `<h1>A Praga Silenciosa</h1>
            A vila, outrora um lugar vibrante e cheio de vida, agora é assombrada por uma sombra sinistra. Uma doença misteriosa, de origem desconhecida, tem aterrorizado os moradores. Febres altas, tosse persistente e manchas estranhas na pele são os sintomas que a acompanham. A cada dia, mais e mais pessoas sucumbem a essa praga silenciosa.
            Vocês se encontram em uma hospedaria local, um lugar onde os moradores se reúnem para trocar histórias e buscar conforto. O ar está pesado, carregado de medo e incerteza. Os olhares dos aldeões são fixos em vocês, como se esperassem que vocês tivessem as respostas que eles tanto buscam.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Consultar o curandeiro da vila, um velho sábio conhecido por seus conhecimentos sobre ervas medicinais.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Investigar os arredores da vila em busca de alguma fonte de contaminação, como um poço ou um rio.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Visitar a biblioteca da vila para pesquisar sobre doenças semelhantes em livros antigos.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Interrogar os poucos moradores que parecem imunes à doença para descobrir algum segredo.</td>
            </tr>
            </tbody></table>`,
        'foto': "doenca.jpg"
    },
    {
        'prompt': "O Rei quer te contratar para matar o dragão que atacou a cidade",
        'inicio': `<h1>O Dragão e a Cidade em Chamas</h1>
            Um emissário real, com o rosto marcado pela preocupação, irrompeu na hospedaria e interrompeu a animada conversa dos aventureiros. Sua voz ecoou pelas paredes de madeira, carregada de urgência: "Um dragão! Uma fera colossal, com escamas de fogo e garras afiadas como navalhas, atacou a cidade! O rei oferece uma recompensa sem igual a quem ousar enfrentá-lo e pôr fim a esse terror!"
            A notícia se espalhou como um incêndio, acendendo a chama da aventura nos corações dos presentes. A oportunidade de fama e fortuna era tentadora, mas o desafio era imenso.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Procurar o ferreiro da cidade para forjar uma arma capaz de ferir o dragão.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Visitar a biblioteca da cidade para estudar as lendas sobre dragões e descobrir suas fraquezas.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Reunir um grupo de aventureiros experientes para enfrentar essa ameaça juntos.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Ir diretamente ao palácio real para obter mais informações sobre o dragão e a recompensa.</td>
            </tr>
            </tbody></table>`,
        'foto': "dragao.jpg"
    },
    {
        'prompt': "Há uma serie de assassinatos ocorrendo pela cidade",
        'inicio': `<h1>Uma Sombra nos Becos</h1>
            Um clima de tensão paira sobre a cidade. A cada amanhecer, um novo corpo é encontrado, marcado por uma assinatura peculiar: uma rosa negra cravada no peito. Os assassinatos, cada vez mais ousados, desafiam as autoridades e aterrorizam a população.
            Você se encontra em uma hospedaria movimentada, um local onde viajantes e aventureiros se reúnem para trocar histórias e informações. A conversa, normalmente animada, agora é marcada por sussurros e olhares nervosos. A notícia dos assassinatos é o assunto principal, e todos buscam respostas para esse enigma.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Procurar o guarda-noturno da cidade, um homem conhecido por sua habilidade em observar os detalhes.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Visitar a biblioteca da cidade para pesquisar sobre assassinatos semelhantes em livros antigos.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Consultar uma médium local, famosa por suas visões e premonições.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Infiltrar-se em um dos becos mais perigosos da cidade para tentar encontrar pistas.</td>
            </tr>
            </tbody></table>`,
        'foto': "assassino.jpg"
    },
    {
        'prompt': "Era uma vez uma menina branca que morava com pessoas de baixa estatura",
        'inicio': `<h1>O Mistério da Moça Branca</h1>
            Em uma pequena aldeia, perdida entre montanhas e florestas, vivia uma jovem singular. Ana, como era conhecida, era alta e pálida, em contraste com os habitantes da vila, baixos e de pele bronzeada. A diferença física a tornava objeto de curiosidade e, por vezes, de zombaria.
            Você se encontra na hospedaria local, um lugar rústico e aconchegante onde os aldeões se reúnem para compartilhar histórias e notícias. A notícia sobre a estranha moça branca é o assunto principal da noite. Muitos tecem teorias sobre sua origem, alguns mais fantasiosas do que outros.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Procurar a curandeira da aldeia, uma mulher sábia e respeitada por seus conhecimentos sobre antigas lendas.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Investigar as ruínas antigas localizadas nas proximidades da aldeia, em busca de pistas sobre o passado.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Conversar com os aldeões mais velhos, que podem ter histórias sobre eventos estranhos ocorridos no passado.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Seguir Ana discretamente e tentar descobrir mais sobre seus hábitos e seus segredos.</td>
            </tr>
            </tbody></table>`,
        'foto': "branca.jpg"
    },
    {
        'prompt': "O país está em guerra Vermelhos vs Verde e Amarelos",
        'inicio': `<h1>O Reino Dividido</h1>
            O reino, outrora unido e próspero, agora está mergulhado em uma guerra civil brutal. Duas facções rivais, os Vermelhos e os Verde-Amarelos, disputam o poder, semeando o caos e a destruição por onde passam. Cidades foram saqueadas, campos arrasados e famílias despedaçadas.
            Você se encontra em uma hospedaria localizada em uma cidade fronteiriça, um local onde soldados, refugiados e aventureiros se misturam. A tensão é palpável e o ar está carregado com o cheiro de pólvora e medo. As conversas giram em torno da guerra, e cada um tem sua própria versão dos fatos.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Infiltrar-se em um acampamento inimigo para obter informações sobre os planos de guerra.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Procurar um líder religioso influente para tentar mediar o conflito.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Reunir um grupo de aventureiros para formar uma milícia e defender os civis.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Investigar a origem do conflito para descobrir as verdadeiras razões por trás da guerra.</td>
            </tr>
            </tbody></table>`,
        'foto': "politica.jpg"
    },
    {
        'prompt': "O Mercador Rei Rato comprou varios outros mercadores e agora está destruindo sonhos",
        'inicio': `<h1>O Império dos Sonhos Quebrados</h1>
            Um rumor sinistro tem assombrado os sonhos dos aventureiros: o poderoso Rei Rato, um mercador implacável e ambicioso, tem adquirido outros mercadores e, com eles, o poder de manipular as vidas de muitos. Dizem que ele está quebrando sonhos, sabotando negócios e espalhando a miséria por onde passa.
            Você se encontra em uma hospedaria movimentada, um local onde comerciantes e viajantes se reúnem para trocar histórias e fechar negócios. A conversa, normalmente animada, agora é marcada por um clima de apreensão. A figura do Rei Rato paira sobre todos como uma sombra, e a cada nova história, a imagem dele se torna mais sombria.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Infiltrar-se em um dos mercados controlados pelo Rei Rato para coletar informações sobre suas operações.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Procurar um antigo rival do Rei Rato que possa fornecer informações valiosas sobre suas fraquezas.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Consultar um adivinho ou vidente para ter uma visão sobre os planos do Rei Rato.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Reunir um grupo de mercadores honestos para formar uma resistência contra o Rei Rato.</td>
            </tr>
            </tbody></table>`,
        'foto': "mouse.jpg"
    },
    {
        'prompt': "Um grupo de nobres combatentes da arte digitais enfrenta um virus de computador",
        'inicio': `<h1>O Labirinto Digital</h1>
            Um grupo de nobres guerreiros digitais, hábeis em manusear códigos e algoritmos como espadas, embarca em uma jornada épica. Seu destino? Um mundo digital místico, governado pelas poderosas entidades digitais. A lenda diz que quem conseguir superar os desafios propostos por essas entidades, emergirá como um verdadeiro mestre da arte digital.
            Você se encontra em um espaço de coworking futurista, um lugar onde a criatividade e a inovação se encontram. O ambiente é vibrante, com telas gigantes exibindo códigos em constante mutação e estações de trabalho equipadas com a mais alta tecnologia. A conversa, normalmente animada, agora é marcada por uma expectativa crescente, pois a imersão digital está prestes a começar.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Mergulhar diretamente no mundo digital, explorando seus domínios de programação e desenvolvimento web.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Buscar a sabedoria de um mestre, aprofundando-se nos mistérios da inteligência artificial e aprendizado de máquina.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Explorar a biblioteca digital, buscando conhecimentos sobre as lendas digitais e os desafios que os aguardam.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Interagir com outros guerreiros digitais, compartilhando experiências e estratégias para a imersão.</td>
            </tr>
            </tbody></table>`,
        'foto': "imersao.jpg"
    },
    {
        'prompt': "Está ocorrendo uma olimpiada medieval na cidade",
        'inicio': `<h1>Os Jogos da Cidade Medieval</h1>️
            <b>Um Festival de Força e Habilidade</b>️
            A cidade está em festa! Uma vibrante atmosfera medieval toma conta de tudo e todos, com ruas adornadas com bandeiras coloridas, mercados lotados e o constante som de risadas e música. A razão para tamanha euforia? Os Jogos da Cidade, um evento que reúne os mais valentes e habilidosos de todo o reino, em uma celebração de força, agilidade e estratégia.
            Você se encontra em uma hospedaria movimentada, um local onde viajantes e competidores se reúnem para trocar histórias e estratégias. A expectativa é palpável, e a cada nova história, a adrenalina aumenta.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Visitar o mestre de armas para aprimorar suas habilidades em combate.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Explorar o mercado em busca de equipamentos e poções mágicas que possam dar uma vantagem nos jogos.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Procurar por aliados entre os outros competidores, formando uma equipe forte para enfrentar os desafios.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Investigar os rumores sobre uma antiga profecia que diz que o vencedor dos Jogos será o futuro rei.</td>
            </tr>
            </tbody></table>`,
        'foto': "olimpiada.jpg"
    },
    {
        'prompt': "Sábado de sol aluguei um caminhão para levar a galera para comer feijão",
        'inicio': `<h1>O Banquete que Deu Errado</h1>️
            Sábado chegou, o sol brilhava e a galera estava animada para um dia de aventura. Um caminhão foi alugado, a comida preparada e a promessa de um dia de descontração e muita comida era o plano. Mas, como toda boa aventura, algo inesperado estava prestes a acontecer.
            Você se encontra em um bar movimentado, um local onde amigos se reúnem para celebrar o início do fim de semana. A animação é contagiante, mas um certo nervosismo paira no ar, afinal, organizar um banquete improvisado nunca é tarefa fácil.
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Verificar o caminhão e a comida, garantindo que tudo esteja em ordem para a viagem.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Consultar o mapa e traçar a rota mais segura para o local do banquete, evitando estradas perigosas.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Convidar mais amigos para a aventura, aumentando a diversão e a força do grupo.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Contar histórias e lendas para animar a galera e criar um clima de aventura antes da viagem.</td>
            </tr>
            </tbody></table>`,
        'foto': "sabado.jpg"
    },
    {
        'prompt': "Um grupo composto de um arqueiro, um barbaro, um mago, uma amazona, uma ladra e um cara do escudo estão reunidos perto de um velhinho",
        'inicio': `<h1>O Mistério do Velho Sábio</h1>️
            Em uma pequena hospedaria no fim de uma longa estrada, um grupo eclético se reúne: um arqueiro ágil, um bárbaro imponente, um mago enigmático, uma amazona feroz, uma ladra astuta e um guerreiro escudo, forte e confiável. A razão para tamanha diversidade em um só lugar? Um velho sábio, com olhos que parecem ter visto mil anos de história, os convocou.
            O velho, com voz rouca e cheia de sabedoria, os olha com um brilho intenso nos olhos. "Vocês foram escolhidos por uma razão", ele anuncia, "um grande mal se aproxima e apenas vocês possuem as habilidades necessárias para detê-lo."
            <table>
            <tbody>
            <tr>
            <td><b>A)</b>️ Perguntar ao velho sábio sobre a natureza do mal que se aproxima e como eles podem se preparar para enfrentá-lo.</td>
            </tr>
            <tr>
            <td><b>B)</b>️ Investigar a história do velho sábio e descobrir por que ele os escolheu para essa missão.</td>
            </tr>
            <tr>
            <td><b>C)</b>️ Explorar a hospedaria em busca de pistas ou mensagens secretas que possam indicar o próximo passo.</td>
            </tr>
            <tr>
            <td><b>D)</b>️ Discutir entre o grupo sobre suas habilidades e como podem trabalhar em equipe para superar os desafios que virão.</td>
            </tr>
            </tbody></table>`,
        'foto': "caverna.jpg"
    }
]