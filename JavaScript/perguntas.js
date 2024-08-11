const perguntas = document.getElementsByClassName('perguntas')
const perguntasFeitas = document.getElementsByClassName('pergunta-feita')
const perguntasTamanho = document.getElementById("perguntas")

perguntas[0].addEventListener("click", abrirPergunta1)
perguntas[1].addEventListener("click", abrirPergunta2)
perguntas[2].addEventListener("click", abrirPergunta3)
perguntas[3].addEventListener("click", abrirPergunta4)
perguntas[4].addEventListener("click", abrirPergunta5)
perguntas[5].addEventListener("click", abrirPergunta6)
perguntas[6].addEventListener("click", abrirPergunta7)
perguntas[7].addEventListener("click", abrirPergunta8)

let aberta2 = [false, false, false, false, false, false, false, false]
let largura3 = 0

function recuperarLargura2(){
    largura3 = window.innerWidth
}

function abrirPergunta1(){
    if(largura3 >= 1200){
        if(aberta2[0] == false){
            perguntasFeitas[0].style.display = 'block'
            aberta2[0] = true

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '900px'
            }

        } else if(aberta2[0] == true){
            perguntasFeitas[0].style.display = 'none'
            aberta2[0] = false

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '800px'
            }

        }
    }
}

function abrirPergunta2(){
    if(largura3 >= 1200){
        if(aberta2[1] == false){
            perguntasFeitas[1].style.display = 'block'
            aberta2[1] = true

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '900px'
            }

        } else if(aberta2[1] == true){
            perguntasFeitas[1].style.display = 'none'
            aberta2[1] = false

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '800px'
            }

        }
    }
}

function abrirPergunta3(){
    if(largura3 >= 1200){
        if(aberta2[2] == false){
            perguntasFeitas[2].style.display = 'block'
            aberta2[2] = true

            if(aberta2[0] == true && aberta2[1] == true){
                perguntasTamanho.style.height = '900px'
            }

        } else if(aberta2[2] == true){
            perguntasFeitas[2].style.display = 'none'
            aberta2[2] = false
            
            perguntasTamanho.style.height = '800px'

        }
    }
}

function abrirPergunta4(){
    if(largura3 >= 1200){
        if(aberta2[3] == false){
            perguntasFeitas[3].style.display = 'block'
            aberta2[3] = true

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '900px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[2]){
                perguntasTamanho.style.height = '1000px'
            }

        } else if(aberta2[3] == true){
            perguntasFeitas[3].style.display = 'none'
            aberta2[3] = false

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '800px'
            }
        }
    }
}

function abrirPergunta5(){
    if(largura3 >= 1200){
        if(aberta2[4] == false){
            perguntasFeitas[4].style.display = 'block'
            aberta2[4] = true

            if(aberta2[0] == true && aberta2[1] == true && aberta2[2] && aberta2[3]){
                perguntasTamanho.style.height = '1050px'
            }

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '900px'
            }

        } else if(aberta2[4] == true){
            perguntasFeitas[4].style.display = 'none'
            aberta2[4] = false

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '800px'
            }
        }
    }
}

function abrirPergunta6(){
    if(largura3 >= 1200){
        if(aberta2[5] == false){
            perguntasFeitas[5].style.display = 'block'
            aberta2[5] = true

            if(aberta2[0] == true && aberta2[1] == true){
                perguntasTamanho.style.height = '900px'
            }

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '900px'
            }

            if((aberta2[0] == true && aberta2[1] && aberta2[2] && aberta2[3] && aberta2 [4]) || (aberta2[3] && aberta2[4])){
                perguntasTamanho.style.height = '1100px'
            }

        } else if(aberta2[5] == true){
            perguntasFeitas[5].style.display = 'none'
            aberta2[5] = false
            
            if(aberta2[0] == true && aberta2[1] == true && aberta2[2] == true && aberta2[3] == true){
                perguntasTamanho.style.height = '1050px'
            }

            if(aberta2[7] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '800px'
            }
        }
    }
}

function abrirPergunta7(){
    if(largura3 >= 1200){
        if(aberta2[6] == false){
            perguntasFeitas[6].style.display = 'block'
            aberta2[6] = true

            if(aberta2[0] == true && aberta2[1] == true){
                perguntasTamanho.style.height = '900px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[2] == true && aberta2[3] == true && aberta2[4] == true && aberta2[5]){
                perguntasTamanho.style.height = '1175px'
            }

        } else if(aberta2[6] == true){
            perguntasFeitas[6].style.display = 'none'
            aberta2[6] = false

            if(aberta2[0] == true && aberta2[1] == true){
                perguntasTamanho.style.height = '850px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[2] == true && aberta2[3] == true && aberta2[4] == true && aberta2[5]){
                perguntasTamanho.style.height = '1100px'
            }

        }
    }
}

function abrirPergunta8(){
    if(largura3 >= 1200){
        if(aberta2[7] == false){
            perguntasFeitas[7].style.display = 'block'
            aberta2[7] = true

            if(aberta2[0] == true && aberta2[1] == true){
                perguntasTamanho.style.height = '850px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '925px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[2] == true && aberta2[3] == true && aberta2 [4]){
                perguntasTamanho.style.height = '925px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[2] == true && aberta2[3] == true && aberta2 [4] == true && aberta2[5] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '1225px'
            }

        } else if(aberta2[7] == true){
            perguntasFeitas[7].style.display = 'none'
            aberta2[7] = false
            
            if(aberta2[0] == true && aberta2[1] == true){
                perguntasTamanho.style.height = '800px'
            }

            if(aberta2[0] == true && aberta2[1] == true && aberta2[6] == true){
                perguntasTamanho.style.height = '925px'
            }
        }
    }
}