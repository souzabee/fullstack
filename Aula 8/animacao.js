let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


let cat = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'imagem/cato.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


function animacao(){
    ctx.clearRect(0,0,300,300)
    cat.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    cat.x = x_mouse;
    cat.y = y_mouse;
    

    if (cat.x < 0 + cat.raio) {
        cat.x = cat.raio;
    }
    if(cat.x > 300 - cat.raio) {
        cat.x = 300 - cat.raio
    }

    if(cat.y < 0 + cat.raio) {
        cat.y = cat.raio
    }
    if(cat.y > 300 - cat.raio) {
        cat.y = 300 - cat.raio

    }

})
