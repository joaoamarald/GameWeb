// base para uma função de um evento de redimensionamento atualizado
var altura = 0
var largura = 0

function ajustarTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()

function posicaoRandomica() { 

    //Posição aleatoria 
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    PosicaoX = posicaoX < 0 ? 0 : posicaoX
    PosicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var luffy = document.createElement('img')
    luffy.src = 'imagens/luffy.png.png'
    luffy.className = 'luffy'
    luffy.style.left = posicaoX + 'px'
    luffy.style.top = posicaoY + 'px'
    luffy.style.position = 'absolute'


    document.body.appendChild(luffy)
}

