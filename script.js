const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const numeroPergunta = document.querySelector("#numero-pergunta");

const perguntas = [

    {
        enunciado: "Como você costuma assistir a uma luta do UFC?",
        alternativas: [
            {
                texto: "Presto atenção em cada golpe, queda e movimento.",
                afirmacao: "<b>O ANALISTA</b><br>Você observa cada detalhe da luta. Para você, estratégia e técnica são tão importantes quanto a pancadaria."
            },
            {
                texto: "Só quero ver a luta começar e torcer pelo nocaute!",
                afirmacao: "<b>O CAÇADOR DE NOCAUTE</b><br>Você gosta é de emoção! Quanto mais golpes e menos tempo de luta, melhor."
            }
        ]
    },

    {
        enunciado: "Seu lutador favorito está prestes a entrar no octógono. O que você faz?",
        alternativas: [
            {
                texto: "Analiso o adversário e tento prever como será a luta.",
                afirmacao: "<b>O ESTRATEGISTA</b><br>Você gosta de entender o jogo antes da luta começar e adora discutir possíveis estratégias."
            },
            {
                texto: "Fico empolgado e começo a torcer como se estivesse no octógono!",
                afirmacao: "<b>O FANÁTICO</b><br>Você vive a luta intensamente. Cada entrada, golpe e comemoração vira um grande evento."
            }
        ]
    },

    {
        enunciado: "Qual estilo de luta mais chama sua atenção?",
        alternativas: [
            {
                texto: "Muay Thai e Kickboxing.",
                afirmacao: "<b>O STRIKER</b><br>Você gosta de trocação, combinações rápidas e golpes que podem acabar com a luta a qualquer momento."
            },
            {
                texto: "Jiu-jitsu e Wrestling.",
                afirmacao: "<b>O GRAPPLER</b><br>Você aprecia quedas, controle e finalizações. Para você, dominar o adversário é uma arte."
            }
        ]
    },

    {
        enunciado: "A luta chegou ao terceiro round e está equilibrada. Você prefere...",
        alternativas: [
            {
                texto: "Uma guerra de cinco minutos com muitos golpes.",
                afirmacao: "<b>O GUERREIRO</b><br>Você gosta de lutas disputadas e não se importa se os dois atletas saírem completamente desgastados."
            },
            {
                texto: "Uma finalização perfeita no último minuto.",
                afirmacao: "<b>O ESPECIALISTA</b><br>Você valoriza técnica e precisão. Uma finalização bem executada vale mais que dezenas de golpes."
            }
        ]
    },

    {
        enunciado: "Quando acontece um nocaute espetacular, qual é sua reação?",
        alternativas: [
            {
                texto: "Levanto do sofá e comemoro como se fosse gol!",
                afirmacao: "<b>O APAIXONADO</b><br>Você sente cada momento da luta. Quando acontece algo histórico, sua reação é impossível de esconder."
            },
            {
                texto: "Fico impressionado e quero rever o replay imediatamente.",
                afirmacao: "<b>O OBSERVADOR</b><br>Você gosta de entender exatamente como o golpe aconteceu e apreciar os detalhes técnicos."
            }
        ]
    },

    {
        enunciado: "Se pudesse escolher um lugar para assistir ao UFC, qual seria?",
        alternativas: [
            {
                texto: "Na arena, perto do octógono, sentindo a energia da torcida.",
                afirmacao: "<b>O FÃ DE ARENA</b><br>Você quer estar onde a ação acontece. Para você, sentir a energia do público faz parte do espetáculo."
            },
            {
                texto: "Em casa, com amigos, comida e uma TV enorme.",
                afirmacao: "<b>O FÃ DE EVENTO</b><br>Você sabe transformar qualquer noite de UFC em um grande evento entre amigos."
            }
        ]
    }

];

let indiceAtual = 0;
let resultadoFinal = "";


function mostrarPergunta() {

    if (indiceAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const perguntaAtual = perguntas[indiceAtual];

    numeroPergunta.textContent = indiceAtual + 1;

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";


    perguntaAtual.alternativas.forEach((alternativa, index) => {

        const botao = document.createElement("button");

        botao.classList.add("alternativa");

        botao.innerHTML = `
            <span class="numero-alternativa">
                ${String.fromCharCode(65 + index)}
            </span>

            <span>
                ${alternativa.texto}
            </span>

            <span class="seta">
                →
            </span>
        `;

        botao.addEventListener("click", () => {
            selecionarResposta(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}


function selecionarResposta(alternativaEscolhida) {

    resultadoFinal += `
        <div class="resultado-item">
            ${alternativaEscolhida.afirmacao}
        </div>
    `;

    indiceAtual++;

    mostrarPergunta();
}


function mostrarResultado() {

    document.querySelector(".quiz").style.display = "none";

    caixaResultado.style.display = "block";

    textoResultado.innerHTML = resultadoFinal;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function reiniciarQuiz() {

    indiceAtual = 0;

    resultadoFinal = "";

    caixaResultado.style.display = "none";

    document.querySelector(".quiz").style.display = "block";

    mostrarPergunta();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


mostrarPergunta();
