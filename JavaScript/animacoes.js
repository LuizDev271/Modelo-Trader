const animacao1 = document.getElementsByClassName('anima-1')
const animacao2 = document.getElementsByClassName('anima-2')
const animacao3 = document.getElementsByClassName('anima-3')
const animacao4 = document.getElementsByClassName('anima-4')
const animacao5 = document.getElementsByClassName('anima-5')
const animacao6 = document.getElementsByClassName('anima-6')

let largura = 0
let rolagem = 0

function animacoes(){

    largura = window.innerWidth
    rolagem = scrollY

    console.log(largura, rolagem)

    if(rolagem > 400 && largura >= 1200){
        //Titulos - seções conteudo
        animacao1[0].classList.remove('animacao-1')
        animacao1[0].classList.add('padrao')

        //paragrafos
        for(let x = 0; x < 3; x++){
            animacao2[x].classList.remove('animacao-2')
            animacao2[x].classList.add('padrao')
        }
        
        //botoes
        animacao3[0].classList.remove('animacao-3')
        animacao3[0].classList.add('padrao')
    }

    if(rolagem > 1000 && largura >= 1200){
        //Titulos - seções conteudo
        animacao1[1].classList.remove('animacao-1')
        animacao1[1].classList.add('padrao')

        //paragrafos
        for(let x = 3; x < 6; x++){
            animacao2[x].classList.remove('animacao-2')
            animacao2[x].classList.add('padrao')
        }
        
        //botoes
        animacao3[1].classList.remove('animacao-3')
        animacao3[1].classList.add('padrao')
    }

    if(rolagem > 1900 && largura >= 1200){
        //Titulos - seções conteudo
        animacao1[2].classList.remove('animacao-1')
        animacao1[2].classList.add('padrao')

        //paragrafos
        for(let x = 6; x < 9; x++){
            animacao2[x].classList.remove('animacao-2')
            animacao2[x].classList.add('padrao')
        }
        
        //botoes
        animacao3[2].classList.remove('animacao-3')
        animacao3[2].classList.add('padrao')
    }

    if(rolagem > 2700 && largura >= 1200){
        animacao4[0].classList.remove('animacao-4')
        animacao4[0].classList.add('padrao')
    }

    if(rolagem > 3400 && largura >= 1200){
        animacao4[1].classList.remove('animacao-4')
        animacao4[1].classList.add('padrao')
    }

    if(rolagem > 3600 && largura >= 1200){
        for(let x = 0; x < animacao5.length; x++){ 
            animacao5[x].classList.remove('animacao-5')
            animacao5[x].classList.add('padrao')
        }

        for(let x = 0; x < animacao6.length; x++){ 
            animacao6[x].classList.remove('animacao-6')
            animacao6[x].classList.add('padrao')
        }

        //Botoes
        animacao3[3].classList.remove('animacao-3')
        animacao3[3].classList.add('padrao')
    }

    if(rolagem > 4150 && largura >= 1200){
        //Titulos - seções conteudo
        animacao1[3].classList.remove('animacao-3')
        animacao1[3].classList.add('padrao')
    }

    if(rolagem > 5300 && largura >= 1200){
        //Titulos - seções conteudo
        animacao1[4].classList.remove('animacao-1')
        animacao1[4].classList.add('padrao')

        //paragrafos
        animacao2[9].classList.remove('animacao-2')
        animacao2[9].classList.add('padrao')

        //botoes
        animacao3[4].classList.remove('animacao-3')
        animacao3[4].classList.add('padrao')
    }

    if(rolagem > 6450 && largura >= 1200){
        //botoes
        animacao3[5].classList.remove('animacao-3')
        animacao3[5].classList.add('padrao')
    }
}