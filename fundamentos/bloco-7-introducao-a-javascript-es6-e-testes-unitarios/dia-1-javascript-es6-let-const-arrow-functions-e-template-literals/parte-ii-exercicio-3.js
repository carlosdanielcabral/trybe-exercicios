const botao = document.getElementById('clique-aqui');
const contador = document.getElementById('contador');

let clickCount = 0;

botao.addEventListener('click', () => {
    clickCount += 1;
    contador.innerText = clickCount;
})