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
        //Esquerda
        //=======================================

        if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
        informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false) {
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[0] = true
        
        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[0] = false
        }

        //Direita - 5
        //=======================================

        if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[4] == true) {
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[0] = true
        
        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[0] = false
        }

        //Direita - 6
        //=======================================

        if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[5] == true) {
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[0] = true
        
        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[0] = false
        }

        //Direita - 7
        //=======================================

        if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[6] == true) {
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[0] = true
        
        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[0] = false
        }

        //Direita - 8
        //=======================================

        if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == false && aberta[7] == true) {
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == false && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[0] = true
        
        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[0] = false

        } else if(aberta[0] == false && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[0] = true

        } else if(aberta[0] == true && aberta[1] == true && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[0].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[0] = false
        }
    }
}

function caixaInforma2(){
    if(largura2 >= 1200){
        //Esquerda
        //=========================

        if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false) {
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '361px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '541px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '451px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '621px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '545px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '651px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '641px'
    
            aberta[1] = true
        
        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '551px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '751px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '651px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[1] = false
        }

        
        //Direita - 5
        //=======================================

        if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[4] == true) {
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[1] = true
        
        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[4] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[1] = false
        }

        //Direita - 6
        //=======================================

        if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[5] == true) {
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[1] = true
        
        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[5] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[1] = false
        }

        //Direita - 7
        //=======================================

        if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[6] == true) {
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[1] = true
        
        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[6] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[1] = false
        }

        //Direita - 8
        //=======================================

        if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == false && aberta[7] == true) {
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == false && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == false && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[1] = true
        
        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == false && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[1] = false

        } else if(aberta[1] == false && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[1] = true

        } else if(aberta[1] == true && aberta[0] == true && aberta[2] == true && aberta[3] == true && aberta[7] == true){
            informacoes[1].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[1] = false
        }
    }
}

function caixaInforma3(){
    if(largura2 >= 1200){
        //Esquerda
        //=======================================

        if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false) {
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[2] = true
        
        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[2] = false
        }

        
        //Direita - 5
        //=======================================

        if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[4] == true) {
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[2] = true
        
        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[4] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[2] = false
        }

        //Direita - 6
        //=======================================

        if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[5] == true) {
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[2] = true
        
        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[5] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[2] = false
        }

        //Direita - 7
        //=======================================

        if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[6] == true) {
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[2] = true
        
        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[6] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[2] = false
        }

        //Direita - 8
        //=======================================

        if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == false && aberta[7] == true) {
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == false && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == false && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == false && aberta[0] == true && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[2] = true
        
        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == false && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[2] = false

        } else if(aberta[2] == false && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[2] = true

        } else if(aberta[2] == true && aberta[1] == true && aberta[0] == true && aberta[3] == true && aberta[7] == true){
            informacoes[2].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[2] = false
        }
    }
}

function caixaInforma4(){
    if(largura2 >= 1200){
        if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false) {
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[3] = true
        
        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[3] = false
        }

        //Direita - 5
        //=======================================

        if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[4] == true) {
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[3] = true
        
        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[4] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[3] = false
        }

        //Direita - 5
        //=======================================

        if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[5] == true) {
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[3] = true
        
        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[5] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[3] = false
        }

        //Direita - 7
        //=======================================

        if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[6] == true) {
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[3] = true
        
        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[6] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[3] = false
        }

        //Direita - 8
        //=======================================

        if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == false && aberta[7] == true) {
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == false && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == false && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == false && aberta[2] == true && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[3] = true
        
        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == false && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[3] = false

        } else if(aberta[3] == false && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[3] = true

        } else if(aberta[3] == true && aberta[1] == true && aberta[2] == true && aberta[0] == true && aberta[7] == true){
            informacoes[3].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[3] = false
        }
    }
}

//=========================================
//
//Caixas da Direita
//
//=========================================

function caixaInforma5(){
    if(largura2 >= 1200){
        //Direita
        //===========================

        if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false) {
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[4] = true
        
        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[4] = false
        }

        //Direita - 1
        //=======================================

        if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[0] == true) {
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[4] = true
        
        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[4] = false
        }

        //Direita - 2
        //=======================================

        if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[1] == true) {
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[4] = true
        
        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[4] = false
        }

        //Direita - 3
        //=======================================

        if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[2] == true) {
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[4] = true
        
        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[4] = false
        }

        //Direita - 4
        //=======================================

        if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == false && aberta[3] == true) {
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == false && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[4] = true
        
        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[4] = false

        } else if(aberta[4] == false && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[4] = true

        } else if(aberta[4] == true && aberta[5] == true && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[4].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[4] = false
        }
    }
}

function caixaInforma6(){
    if(largura2 >= 1200){
        if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false) {
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[5] = true
        
        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[5] = false
        }

        //Direita - 1
        //=======================================

        if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[0] == true) {
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[5] = true
        
        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[0] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[5] = false
        }

        //Direita - 2
        //=======================================

        if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[1] == true) {
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[5] = true
        
        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[1] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[5] = false
        }

        //Direita - 3
        //=======================================

        if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[2] == true) {
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[5] = true
        
        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[2] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[5] = false
        }

        //Direita - 4
        //=======================================

        if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == false && aberta[3] == true) {
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == false && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == false && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[5] = true
        
        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == false && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[5] = false

        } else if(aberta[5] == false && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[5] = true

        } else if(aberta[5] == true && aberta[4] == true && aberta[6] == true && aberta[7] == true && aberta[3] == true){
            informacoes[5].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[5] = false
        }
    }
}

function caixaInforma7(){
    if(largura2 >= 1200){
        if(aberta[6] == false && aberta[5] == false && aberta[5] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false) {
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[6] = true
        
        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[6] = false
        }

        //Direita - 1
        //=======================================

        if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[0] == true) {
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[6] = true
        
        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[0] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[6] = false
        }

        //Direita - 2
        //=======================================

        if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[1] == true) {
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[6] = true
        
        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[1] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[6] = false
        }

        //Direita - 3
        //=======================================

        if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[2] == true) {
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[6] = true
        
        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[2] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[6] = false
        }

        //Direita - 4
        //=======================================

        if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == false && aberta[3] == true) {
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == false && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == false && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == false && aberta[4] == true && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[6] = true
        
        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == false && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[6] = false

        } else if(aberta[6] == false && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[6] = true

        } else if(aberta[6] == true && aberta[5] == true && aberta[4] == true && aberta[7] == true && aberta[3] == true){
            informacoes[6].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[6] = false
        }
    }
}

function caixaInforma8(){
    if(largura2 >= 1200){
        if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false) {
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '360px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '465px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[7] = true
        
        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[0] == false && aberta[1] == false && aberta[2] == false && aberta[3] == false){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[7] = false
        }

        //Direita - 1
        //=======================================

        if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[0] == true) {
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[7] = true
        
        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[0] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[7] = false
        }

        //Direita - 2
        //=======================================

        if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[1] == true) {
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[7] = true
        
        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[1] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[7] = false
        }

        //Direita - 3
        //=======================================

        if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[2] == true) {
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[7] = true
        
        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[2] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[7] = false
        }

        //Direita - 4
        //=======================================

        if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == false && aberta[3] == true) {
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '540px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == false && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '450px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '620px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == false && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '520px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '650px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == false && aberta[6] == true && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '640px'
    
            aberta[7] = true
        
        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == false && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '550px'
    
            aberta[7] = false

        } else if(aberta[7] == false && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'block'
            tamanhoCaixaInformacoes.style.height = '750px'
            document.getElementById('info').style.height = '1100px'
    
            aberta[7] = true

        } else if(aberta[7] == true && aberta[5] == true && aberta[6] == true && aberta[4] == true && aberta[3] == true){
            informacoes[7].style.display = 'none'
            tamanhoCaixaInformacoes.style.height = '650px'
            document.getElementById('info').style.height = '1000px'
    
            aberta[7] = false
        }
    }
}
