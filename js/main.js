let order = [];
let orderUser = [];
let score = 0;
let rodada = 0;
let time = 0;

const green = document.querySelector('.verde');
const red = document.querySelector('.vermelho');
const yellow = document.querySelector('.amarelo');
const blue = document.querySelector('.azul');
const valores = ['green', 'red', 'yellow', 'blue'];

let iniciaRodada = () => {
    let cor = Math.floor(Math.random() * 4);
    order.push(cor);
    orderUser = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};

let lightColor = (element, number) => {
    let time = number * 500;

    setTimeout(() => {
        element.classList.add("selecionado");
    }, time - 250);

    setTimeout(() => {
        element.classList.remove("selecionado");
    }, time);
};

let verifica = () => {
    for (let i = 0; i < orderUser.length; i++) {
        if (orderUser[i] != order[i]) {
            lose();
            break;
        }
    }

    if (order.length == orderUser.length) {
        nextLevel();
    }
}

let click = (cor) => {
    orderUser.push(cor);
    lightColor(createColorElement(cor), 1);
    verifica();
};

let createColorElement = (cor) => {
    if (cor == 0) return green;
    else if (cor == 1) return red;
    else if (cor == 2) return yellow;
    else if (cor == 3) return blue;
};

let nextLevel = () => {
    score++;
    atualizaPlacar();
    iniciaRodada();
};

let lose = () => {
    alert(`Voce perdeu`);
    order = [];
    orderUser = [];
    document.getElementById("btniniciar").disabled = 0;
};

let playGame = () => {
    score = 0;
    nextLevel();
    document.getElementById("btniniciar").disabled = 1;
};

let atualizaPlacar = () => {
    document.getElementById("txtrodada").innerHTML = score;
}

let animacao = () => {

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);