let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


let naveImg = new Image();
naveImg.src = 'imagens/nave.png';


let nave = {
    x: 0,
    y: 100,
    raio: 70,
    y: canvas.height - 70,
    x: canvas.width / 2,
    img: null, 
    desenha: function () {
        if (this.img) {
            ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2 * this.raio, 2 * this.raio);
        }
    }
};


naveImg.onload = function () {
    nave.img = naveImg;
    animacao();
};
let gameStart = false;

let bullets = [];

let imgBullets = new Image();
imgBullets.src = 'imagens/tiro.png';

function criarBullet() {
    bullets.push({
        x: nave.x - 25,
        y: nave.y - nave.raio,
        velocidade: -15,
        largura: 50,
        altura: 50
    });
}

function desenharBullets() {
    for (let i = 0; i < bullets.length; i++) {
        let b = bullets[i];
        ctx.drawImage(imgBullets, b.x, b.y - b.altura / 2, b.largura, b.altura);
    }
}

function atualizarBullets() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y += bullets[i].velocidade;
    }
    bullets = bullets.filter(b => b.y + b.altura > 0);
}

let teclapress = {};

function animacao() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameStart) {
    if (teclapress['ArrowUp']) nave.y -= 5;
    if (teclapress['ArrowDown']) nave.y += 5;
    if (teclapress['ArrowLeft']) nave.x -= 5;
    if (teclapress['ArrowRight']) nave.x += 5;

    if (nave.x < nave.raio) nave.x = nave.raio;
    if (nave.x > canvas.width - nave.raio) nave.x = canvas.width - nave.raio;
    if (nave.y < nave.raio) nave.y = nave.raio;
    if (nave.y > canvas.height - nave.raio) nave.y = canvas.height - nave.raio;

    nave.desenha();
    atualizarBullets();
    desenharBullets();
    spawnenemy();
    checkColisaoTiro ();
    // checkColisaoNave();
    } else {
        ctx.font = "48px BOOKmanOpti";
        ctx.fillStyle = "white";
        ctx.fillText("Pressione Start para começar", 125, canvas.height / 2);
    }
    requestAnimationFrame(animacao);
}

document.getElementById("botaoStart").addEventListener("click", function (){
    gameStart = true;
});

let podeAtirar = true;

document.addEventListener('keydown', function (evento) {
    teclapress[evento.key] = true;

    if (evento.key === ' ' && podeAtirar) {
        criarBullet();      
        podeAtirar = false;
    }

    
    if (tecla == 'ArrowUp') nave.y -= 10;
    if (tecla == 'ArrowDown') nave.y += 10;
    if (tecla == 'ArrowLeft') nave.x -= 10;
    if (tecla == 'ArrowRight') nave.x += 10;

    
});

document.addEventListener('keyup', function(evento) {
    teclapress[evento.key] = false;
    
    if (evento.key === ' ') {
        podeAtirar = true;
    }
});


const inimigo = {
    width: 25,
    height: 25,
    color: "#2180ac",
    speed: 0.8,

}

let speed = 0;
let spawnrate = 0;
let inimigos = [];

function spawnenemy() {
    if (Math.random() < (0.008 + spawnrate)) {
        const x = Math.random() * (canvas.width - inimigo.width);
        inimigos.push({
            x: x,
            y: -inimigo.height,
            width: inimigo.width,
            height: inimigo.height,
            color: inimigo.color,
            speed: inimigo.speed,
            lastShotTime: 0
        });
    }

    for (let i = 0; i < inimigos.length; i++) {
        const currentEnemy = inimigos[i];

        ctx.fillStyle = inimigo.color;
        ctx.fillRect(currentEnemy.x, currentEnemy.y, inimigo.width, inimigo.height)
        currentEnemy.y = currentEnemy.y + inimigo.speed + speed
    }
    
    
}

function checkColisaoTiro () {
    for(let i = 0; i < bullets.length; i++) {
        let tiro = bullets[i];
        for (let j = 0; j < inimigos.length; j++) {
            let inimigo = inimigos[j];
            if(
                tiro.x < inimigo.x + inimigo.width &&
                tiro.x + tiro.largura > inimigo.x &&
                tiro.y < inimigo.y + inimigo.height &&
                tiro.y + tiro.altura > inimigo.y
            ) {
                inimigos.splice(j, 1);
                bullets.splice(i, 1);
                i--;
                break;
            }
        }
    }  
}

// let gameOver = false;

// function gameOver() {
//     alert("Game Over!")
// }

// function checkColisaoNave() {
//     for (let i = 0; i < inimigos.length; i++) {
//         const inimigoAtual = inimigos[i];

       
//         let dx = nave.x - Math.max(inimigoAtual.x, Math.min(nave.x, inimigoAtual.x + inimigoAtual.width));
//         let dy = nave.y - Math.max(inimigoAtual.y, Math.min(nave.y, inimigoAtual.y + inimigoAtual.height));
//         let distancia = Math.sqrt(dx * dx + dy * dy);

//         if (distancia < nave.raio) {
//             gameOver = true;
//             gameStart = false;
//             return;
//         }
//     }
// }

