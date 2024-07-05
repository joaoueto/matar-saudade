function responder(resposta) {
    if (resposta === 'sim') {
        document.querySelectorAll('.button').forEach(button => {
            button.style.display = 'none';
        });
        document.getElementById('mensagemCorreta').classList.remove('hidden');
    }
}

document.getElementById('naoButton').addEventListener('click', moverBotao);

function moverBotao() {
    const button = document.getElementById('naoButton');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
