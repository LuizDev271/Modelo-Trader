const caixasInformacoes = document.getElementsByClassName('caixa-conteudo')
const informacoes = document.getElementsByClassName('informa')
const tamanhoCaixaInformacoes = document.getElementById('modulos-conteudos')

let aberta = [false, false, false, false, false, false, false, false]

caixasInformacoes[0].addEventListener("click", caixaInforma1)
caixasInformacoes[1].addEventListener("click", caixaInforma2)
caixasInformacoes[2].addEventListener("click", caixaInforma3)
caixasInformacoes[3].addEventListener("click", caixaInforma4)
caixasInformacoes[4].addEventListener("click", caixaInforma5)
caixasInformacoes[5].addEventListener("click", caixaInforma6)
caixasInformacoes[6].addEventListener("click", caixaInforma7)
caixasInformacoes[7].addEventListener("click", caixaInforma8)

let largura2 = 0

function recuperarLargura(){
    largura2 = window.innerWidth
    console.log(largura2)
}

function caixaInforma1(){
    if(largura2 >= 1200){
        if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == false) {
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[0] = true
        
        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[0] = false
        }
    }
}

function caixaInforma2(){
    if(largura2 >= 1200){
        
    }
}

function caixaInforma3(){
    if(largura2 >= 1200){
        
    }
}

function caixaInforma4(){
    if(largura2 >= 1200){
        
    }
}

function caixaInforma5(){
    if(largura2 >= 1200){
        
    }
}

function caixaInforma6(){
    if(largura2 >= 1200){
        
    }
}

function caixaInforma7(){
    if(largura2 >= 1200){
        
    }
}

function caixaInforma8(){
    if(largura2 >= 1200){
        
    }
}


    


