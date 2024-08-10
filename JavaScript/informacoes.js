const caixasInformacoes = document.getElementsByClassName('caixa-conteudo')
const informacoes = document.getElementsByClassName('informa')
const tamanhoCaixaInformacoes = document.getElementById('modulos-conteudos')
const iconesCaixas = document.getElementsByClassName('fa-solid')
console.log(iconesCaixas)

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
        if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == false) {
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '361px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '541px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '621px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '545px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '651px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '641px'
    
            aberta[1] = true
        
        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '751px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '651px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[1] = false
        }
    }
}

function caixaInforma3(){
    if(largura2 >= 1200){
        if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '452px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == false) {
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '362px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '542px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '452px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '552px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '452px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '552px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '452px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '622px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '522px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '652px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '552px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '642px'
    
            aberta[2] = true
        
        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '552px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '752px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '652px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[2] = false
        }
    }
}

function caixaInforma4(){
    if(largura2 >= 1200){
        if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '453px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == false) {
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '363px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '543px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '453px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '553px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '453px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '553px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '453px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '623px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '523px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '653px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '553px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '643px'
    
            aberta[3] = true
        
        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '553px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '753px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '653px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[3] = false
        }  
    }
}

function caixaInforma5(){
    if(largura2 >= 1200){
        if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == false) {
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[4] = true
        
        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[4] = false
        }
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


    


