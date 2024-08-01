const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você pratica a sustentabilidade?",
        alternativas: [
            {
               texto: "Claro que sim!",
               afirmacao: "afirmacao"
            },
            {
                texto: "Não me importo com isso",
                afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Você aprendeu sobre a sustentabilidade e educação ambiental em sua escola?",
        alternativas: [
            {
             texto: "Sim, foi legal",
             afirmacao: "afirmacao"
            },
            {
            texto: "Minha escola não nos ensinou sobre",
            afrimacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Como você se sente em relação a desmatação?",
        alternativas: [
            {
            texto: "Horrorizado",
            afirmacao: "afirmacao"
            },
            {
            texto: "Não me importo com isso",
            afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Como poderiamos combater a desmatação e poluição do planeta?",
        alternativas: [
            {
            texto:"Através de ações e leis ambientais que irão punir quem as pratica e conscientização",
            afirmacao: "afirmacao"
            },
            {
            texto:"Não fazer nada",
            afirmacao: "afirmacao"
            },
        ]
    },
    {
        enunciado: "Vocẽ acha que nós alcaçaremos as propostas ambientais que a ONU apresentou?",
        alternativas: [
            {
           texto:"Sim pois iremos nos esforçar",
           afirmacao: "afirmacao"
            },
            {
            texto: "Nunca iremos conseguir",
            afirmacao: "afirmacao"
            },
        ]
    },
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();