window.addEventListener('scroll', () => {
    const foto = document.getElementById('foto-animada');
    const segundaTela = document.querySelector('.segunda-tela');
    
    if (!foto || !segundaTela) return;

    const topoJanela = window.scrollY;
    const alturaTela = window.innerHeight;

    // Gatilho 1: Rolou 40% da primeira tela, joga a foto para a esquerda
    const gatilhoEsquerda = alturaTela * 0.4;
    
    // O ponto de término real da segunda seção
    const fimSegundaTela = segundaTela.offsetTop + segundaTela.offsetHeight;
    
    // Mantém o respiro para ela travar antes de bater nas tecnologias
    const margemDeSeguranca = 150; 
    const gatilhoTrava = (fimSegundaTela - alturaTela) - margemDeSeguranca;

    if (topoJanela >= gatilhoTrava) {
        // ESTADO 3: Trava a foto e mantém ela mais pertinho dos textos (left: 12%)
        foto.style.position = 'absolute';
        foto.style.top = gatilhoTrava + 'px';
        foto.style.left = '12%'; 
        foto.style.transform = 'translateX(0)';
        foto.style.width = '25%';
    } else if (topoJanela > gatilhoEsquerda) {
        // ESTADO 2: Flutuando na lateral esquerda perto dos textos (left: 12%)
        foto.style.position = 'fixed';
        foto.style.top = '0';
        foto.style.left = '15%';
        foto.style.transform = 'translateX(0)';
        foto.style.width = '25%';
    } else {
        // ESTADO 1: Voltou para o topo, centraliza novamente no meio exato
        foto.style.position = 'fixed';
        foto.style.top = '0';
        foto.style.left = '50%';
        foto.style.transform = 'translateX(-50%)';
        foto.style.width = '30%';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões de alternar dentro dos cards
    const botoesAlternar = document.querySelectorAll('.botao-alternar');

    botoesAlternar.forEach(botao => {
        botao.addEventListener('click', () => {
            // Encontra o card pai correspondente a este botão específico
            const card = botao.closest('.container-card-habilidades');
            
            // Alterna a classe 'ativo' no card
            card.classList.toggle('ativo');
        });
    });
});

document.getElementById('form-contato').addEventListener('submit', function(e) {
    // Pegando os valores inseridos pela pessoa
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Seu número do WhatsApp (apenas números)
    const numeroWhats = "5581983138716";

    // Formatando o texto que vai chegar no seu WhatsApp
    const textoMensagem = `Olá Layla! Meu nome é *${nome}* (${email}).\n\n*Mensagem:* ${mensagem}`;

    // Codifica o texto para o formato URL padrão
    const linkZap = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(textoMensagem)}`;

    // Abre o WhatsApp em uma nova aba com os dados digitados
    window.open(linkZap, '_blank');
});





