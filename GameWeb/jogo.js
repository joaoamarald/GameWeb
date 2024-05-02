// base para uma função de um evento de redimensionamento atualizado
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaLuffyTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaLuffyTempo = 1500
} else if (nivel === 'Dificil') {
    criaLuffyTempo = 1000
} else if (nivel === 'Yonkou') {
    criaLuffyTempo = 750
}

function ajustarTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustarTamanhoPalcoJogo()

//cronometro
var cronometro = setInterval(function(){
    
    tempo -= 1
    if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criarLuffy)
    window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

//Posição aleatória
function posicaoRandomica() { 

    //remover o luffy anterior (caso exista)
    if (document.getElementById('luffy')) {
        document.getElementById('luffy').remove()

        if( vidas > 3) {
            window.location.href = 'Fim_de_jogo.html'
        } else {document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    var luffy = document.createElement('img')
    luffy.src = 'imagens/luffy.png.png'
    luffy.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    luffy.style.left = posicaoX + 'px'
    luffy.style.top = posicaoY + 'px'
    luffy.style.position = 'absolute'
    luffy.id = 'luffy'
    luffy.onclick = function() {
        this.remove()
    }


    document.body.appendChild(luffy)

}

//Tamanho Aleatório 
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'luffy1'
        case 1:
            return 'luffy2'
        case 2:
            return 'luffy3'
    }
}

//lado Aletatório
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
