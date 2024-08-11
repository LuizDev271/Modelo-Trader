const caixasInformacoes = document.getElementsByClassName('caixa-conteudo')
const informacoes = document.getElementsByClassName('informa')
const tamanhoCaixaInformacoes = document.getElementById('modulos-conteudos')
const iconesCaixas = document.getElementsByClassName('fa-solid')
const botao = document.getElementById('botao-expecifico')
const paragrafo = document.getElementById('paragrafo-expecifico')

caixasInformacoes[0].addEventListener("click", caixaInforma1)
caixasInformacoes[1].addEventListener("click", caixaInforma2)
caixasInformacoes[2].addEventListener("click", caixaInforma3)
caixasInformacoes[3].addEventListener("click", caixaInforma4)
caixasInformacoes[4].addEventListener("click", caixaInforma5)
caixasInformacoes[5].addEventListener("click", caixaInforma6)
caixasInformacoes[6].addEventListener("click", caixaInforma7)
caixasInformacoes[7].addEventListener("click", caixaInforma8)

let aberta = [false, false, false, false, false, false, false, false]
let largura2 = 0

function recuperarLargura(){
    largura2 = window.innerWidth
}

function caixaInforma1(){
    if(largura2 >= 1200){
        if(aberta[0] == false){
            informacoes[0].style.display = 'block'
            aberta[0] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[2].classList.remove('fa-caret-down')
            iconesCaixas[2].classList.add('fa-caret-up')

        } else if(aberta[0] == true){
            informacoes[0].style.display = 'none'
            aberta[0] = false
            
            iconesCaixas[2].classList.remove('fa-caret-up')
            iconesCaixas[2].classList.add('fa-caret-down')

            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma2(){
    if(largura2 >= 1200){
        if(aberta[1] == false){
            informacoes[1].style.display = 'block'
            aberta[1] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[3].classList.remove('fa-caret-down')
            iconesCaixas[3].classList.add('fa-caret-up')
            
        } else if(aberta[1] == true){
            informacoes[1].style.display = 'none'
            aberta[1] = false

            iconesCaixas[3].classList.remove('fa-caret-up')
            iconesCaixas[3].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma3(){
    if(largura2 >= 1200){
        if(aberta[2] == false){
            informacoes[2].style.display = 'block'
            aberta[2] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[4].classList.remove('fa-caret-down')
            iconesCaixas[4].classList.add('fa-caret-up')
            
        } else if(aberta[2] == true){
            informacoes[2].style.display = 'none'
            aberta[2] = false

            iconesCaixas[4].classList.remove('fa-caret-up')
            iconesCaixas[4].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma4(){
    if(largura2 >= 1200){
        if(aberta[3] == false){
            informacoes[3].style.display = 'block'
            aberta[3] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[5].classList.remove('fa-caret-down')
            iconesCaixas[5].classList.add('fa-caret-up')
    
        } else if(aberta[3] == true){
            informacoes[3].style.display = 'none'
            aberta[3] = false

            iconesCaixas[5].classList.remove('fa-caret-up')
            iconesCaixas[5].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma5(){
    if(largura2 >= 1200){
        if(aberta[4] == false){
            informacoes[4].style.display = 'block'
            aberta[4] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[6].classList.remove('fa-caret-down')
            iconesCaixas[6].classList.add('fa-caret-up')
            
        } else if(aberta[4] == true){
            informacoes[4].style.display = 'none'
            aberta[4] = false

            iconesCaixas[6].classList.remove('fa-caret-up')
            iconesCaixas[6].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma6(){
    if(largura2 >= 1200){
        if(aberta[5] == false){
            informacoes[5].style.display = 'block'
            aberta[5] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[7].classList.remove('fa-caret-down')
            iconesCaixas[7].classList.add('fa-caret-up')
            
        } else if(aberta[5] == true){
            informacoes[5].style.display = 'none'
            aberta[5] = false

            iconesCaixas[7].classList.remove('fa-caret-up')
            iconesCaixas[7].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma7(){
    if(largura2 >= 1200){
        if(aberta[6] == false){
            informacoes[6].style.display = 'block'
            aberta[6] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[8].classList.remove('fa-caret-down')
            iconesCaixas[8].classList.add('fa-caret-up')
            
        } else if(aberta[6] == true){
            informacoes[6].style.display = 'none'
            aberta[6] = false

            iconesCaixas[8].classList.remove('fa-caret-up')
            iconesCaixas[8].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}

function caixaInforma8(){
    if(largura2 >= 1200){
        if(aberta[7] == false){
            informacoes[7].style.display = 'block'
            aberta[7] = true
    
            tamanhoCaixaInformacoes.style.height = '750px'
            paragrafo.style.opacity = '0'
            botao.style.opacity = '0'
            botao.style.cursor = 'default'

            iconesCaixas[9].classList.remove('fa-caret-down')
            iconesCaixas[9].classList.add('fa-caret-up')
            
        } else if(aberta[7] == true){
            informacoes[7].style.display = 'none'
            aberta[7] = false

            iconesCaixas[9].classList.remove('fa-caret-up')
            iconesCaixas[9].classList.add('fa-caret-down')
    
            if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
                
                tamanhoCaixaInformacoes.style.height = '360px'
                paragrafo.style.opacity = '1'
                botao.style.opacity = '1'
            }
        }
    }
}