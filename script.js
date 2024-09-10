document.addEventListener('DOMContentLoaded', () => {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");

    const perguntas = [
        {
            enunciado: "Uma menina precisa decidir qual curso seguir na faculdade. Qual ela escolhe?",
            alternativas: [
                {
                    texto: "Ela decide estudar cinema.",
                    afirmacao: "Ela escolheu cinema, atraída pela ideia de contar histórias e criar filmes impactantes."
                },
                {
                    texto: "Ela decide seguir carreira em enfermagem.",
                    afirmacao: "Ela escolheu enfermagem, motivada pelo desejo de ajudar as pessoas e fazer a diferença na saúde."
                }
            ]
        },
        {
            enunciado: "Após iniciar o curso, a menina enfrenta dificuldades. Como ela reage?",
            alternativas: [
                {
                    texto: "Ela se dedica ainda mais aos estudos e busca ajuda.",
                    afirmacao: "Com esforço e determinação, ela superou as dificuldades e se destacou em sua área."
                },
                {
                    texto: "Ela decide refletir sobre suas escolhas e considerar outras opções.",
                    afirmacao: "Ela percebeu que reavaliar suas escolhas era importante para garantir que estava no caminho certo."
                }
            ]
        },
        {
            enunciado: "Ela recebe uma oportunidade de estágio que pode impactar seu futuro. O que ela faz?",
            alternativas: [
                {
                    texto: "Ela aceita o estágio e aproveita a experiência para aprender e crescer.",
                    afirmacao: "O estágio proporcionou valiosos conhecimentos práticos e confirmou sua paixão pela carreira."
                },
                {
                    texto: "Ela decide focar nos estudos antes de aceitar qualquer estágio.",
                    afirmacao: "Ela priorizou uma base sólida de conhecimento antes de ingressar no mercado de trabalho."
                }
            ]
        },
        {
            enunciado: "Em um projeto final, ela tem que escolher entre trabalhar sozinha ou em grupo. Qual é a sua escolha?",
            alternativas: [
                {
                    texto: "Ela decide trabalhar em grupo, valorizando a colaboração.",
                    afirmacao: "Trabalhar em equipe permitiu a troca de ideias e a criação de um projeto ainda melhor."
                },
                {
                    texto: "Ela prefere trabalhar sozinha para ter controle total do projeto.",
                    afirmacao: "Trabalhar sozinha a fez desenvolver autonomia e aperfeiçoar suas habilidades."
                }
            ]
        },
        {
            enunciado: "Finalmente, ela está prestes a se formar. Como ela vê seu futuro?",
            alternativas: [
                {
                    texto: "Ela está entusiasmada com as possibilidades e pronta para enfrentar desafios.",
                    afirmacao: "Ela se formou confiante e determinada a seguir seus sonhos e fazer a diferença."
                },
                {
                    texto: "Ela está um pouco ansiosa, mas sabe que fez a escolha certa.",
                    afirmacao: "Apesar da ansiedade, ela tem certeza de que está no caminho certo e pronta para o futuro."
                }
            ]
        }
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = ""; 
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.classList.add('hidden');
        caixaAlternativas.classList.add('hidden');
        caixaResultado.classList.remove('hidden');
        textoResultado.textContent = historiaFinal;
    }

    function iniciarQuestionario() {
        botaoIniciar.classList.add('hidden');
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
        mostraPergunta();
    }

    botaoJogarNovamente.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.add('hidden');
        botaoIniciar.classList.remove('hidden'); 
    });

    botaoIniciar.addEventListener("click", iniciarQuestionario);

   
    caixaPerguntas.classList.add('hidden');
    caixaAlternativas.classList.add('hidden');
});
