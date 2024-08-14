const animacao1 = document.getElementsByClassName('anima-1')
const animacao2 = document.getElementsByClassName('anima-2')
const animacao3 = document.getElementsByClassName('anima-3')
const animacao4 = document.getElementsByClassName('anima-4')
const animacao5 = document.getElementsByClassName('anima-5')
const animacao6 = document.getElementsByClassName('anima-6')

let rolagem = 0

function animacoes(){

    largura = window.innerWidth
    rolagem = scrollY

    if(largura >= 1200){
        if(rolagem > 400){
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
    
        if(rolagem > 1000){
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
    
        if(rolagem > 1900){
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
    
        if(rolagem > 2700){
            animacao4[0].classList.remove('animacao-4')
            animacao4[0].classList.add('padrao')
        }
    
        if(rolagem > 3400){
            animacao4[1].classList.remove('animacao-4')
            animacao4[1].classList.add('padrao')
        }
    
        if(rolagem > 3600){
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
    
        if(rolagem > 4150){
            //Titulos - seções conteudo
            animacao1[3].classList.remove('animacao-3')
            animacao1[3].classList.add('padrao')
        }
    
        if(rolagem > 5300){
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
    
        if(rolagem > 6450){
            //botoes
            animacao3[5].classList.remove('animacao-3')
            animacao3[5].classList.add('padrao')
        }
    } else if(largura >= 930 && largura <= 1200){
        if(rolagem > 400){
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
    
        if(rolagem > 1000){
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
    
        if(rolagem > 1900){
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
    
        if(rolagem > 2700){
            animacao4[0].classList.remove('animacao-4')
            animacao4[0].classList.add('padrao')
        }
    
        if(rolagem > 3400){
            animacao4[1].classList.remove('animacao-4')
            animacao4[1].classList.add('padrao')
        }
    
        if(rolagem > 3600){
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
    
        if(rolagem > 4150){
            //Titulos - seções conteudo
            animacao1[3].classList.remove('animacao-3')
            animacao1[3].classList.add('padrao')
        }
    
        if(rolagem > 5300){
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
    
        if(rolagem > 6450){
            //botoes
            animacao3[5].classList.remove('animacao-3')
            animacao3[5].classList.add('padrao')
        }
    } else if(largura >= 520 && largura <= 930){
        if(rolagem > 1300){
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
    
        if(rolagem > 2550){
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
    
        if(rolagem > 3800){
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
    
        if(rolagem > 4800){
            animacao4[0].classList.remove('animacao-4')
            animacao4[0].classList.add('padrao')
        }
    
        if(rolagem > 5300){
            animacao4[1].classList.remove('animacao-4')
            animacao4[1].classList.add('padrao')
        }
    
        if(rolagem > 5400){
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
    
        if(rolagem > 6800){
            //Titulos - seções conteudo
            animacao1[3].classList.remove('animacao-3')
            animacao1[3].classList.add('padrao')
        }
    
        if(rolagem > 7800){
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
    
        if(rolagem > 9000){
            //botoes
            animacao3[5].classList.remove('animacao-3')
            animacao3[5].classList.add('padrao')
        }
    } else if(largura <= 520){
        if(rolagem > 500){
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
    
        if(rolagem > 1200){
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
    
        if(rolagem > 2100){
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
    
        if(rolagem > 2900){
            animacao4[0].classList.remove('animacao-4')
            animacao4[0].classList.add('padrao')
        }
    
        if(rolagem > 3600){
            animacao4[1].classList.remove('animacao-4')
            animacao4[1].classList.add('padrao')
        }
    
        if(rolagem > 3800){
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
    
        if(rolagem > 4350){
            //Titulos - seções conteudo
            animacao1[3].classList.remove('animacao-3')
            animacao1[3].classList.add('padrao')
        }
    
        if(rolagem > 5500){
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
    
        if(rolagem > 6650){
            //botoes
            animacao3[5].classList.remove('animacao-3')
            animacao3[5].classList.add('padrao')
        }
    }
}