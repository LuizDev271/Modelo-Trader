const perguntas = document.getElementsByClassName('perguntas')
const perguntasFeitas = document.getElementsByClassName('pergunta-feita')
const perguntasTamanho = document.getElementById("perguntas")
const rodape = document.getElementById("rodape")
const icones2 = document.getElementsByClassName('fa-solid')

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

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[20].classList.remove('fa-caret-down')
            icones2[20].classList.add('fa-caret-up')

            aberta2[0] = true

        } else if(aberta2[0] == true){
            perguntasFeitas[0].style.display = 'none'
            aberta2[0] = false

            icones2[20].classList.remove('fa-caret-up')
            icones2[20].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[0] == false){
            perguntasFeitas[0].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[20].classList.remove('fa-caret-down')
            icones2[20].classList.add('fa-caret-up')

            aberta2[0] = true

        } else if(aberta2[0] == true){
            perguntasFeitas[0].style.display = 'none'
            aberta2[0] = false

            icones2[20].classList.remove('fa-caret-up')
            icones2[20].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                perguntasTamanho.style.height = '860px'
                rodape.style.opacity = '1'
            }
        }
    }
}

function abrirPergunta2(){
    if(largura3 >= 1200){
        if(aberta2[1] == false){
            perguntasFeitas[1].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[21].classList.remove('fa-caret-down')
            icones2[21].classList.add('fa-caret-up')

            aberta2[1] = true

        } else if(aberta2[1] == true){
            perguntasFeitas[1].style.display = 'none'
            aberta2[1] = false

            icones2[21].classList.remove('fa-caret-up')
            icones2[21].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[1] == false){
            perguntasFeitas[1].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[21].classList.remove('fa-caret-down')
            icones2[21].classList.add('fa-caret-up')

            aberta2[1] = true

        } else if(aberta2[1] == true){
            perguntasFeitas[1].style.display = 'none'
            aberta2[1] = false

            icones2[21].classList.remove('fa-caret-up')
            icones2[21].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}

function abrirPergunta3(){
    if(largura3 >= 1200){
        if(aberta2[2] == false){
            perguntasFeitas[2].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[22].classList.remove('fa-caret-down')
            icones2[22].classList.add('fa-caret-up')

            aberta2[2] = true

        } else if(aberta2[2] == true){
            perguntasFeitas[2].style.display = 'none'
            aberta2[2] = false

            icones2[22].classList.remove('fa-caret-down')
            icones2[22].classList.add('fa-caret-up')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[2] == false){
            perguntasFeitas[2].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[22].classList.remove('fa-caret-down')
            icones2[22].classList.add('fa-caret-up')

            aberta2[2] = true

        } else if(aberta2[2] == true){
            perguntasFeitas[2].style.display = 'none'
            aberta2[2] = false

            icones2[22].classList.remove('fa-caret-down')
            icones2[22].classList.add('fa-caret-up')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}

function abrirPergunta4(){
    if(largura3 >= 1200){
        if(aberta2[3] == false){
            perguntasFeitas[3].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[23].classList.remove('fa-caret-down')
            icones2[23].classList.add('fa-caret-up')

            aberta2[3] = true

        } else if(aberta2[3] == true){
            perguntasFeitas[3].style.display = 'none'
            aberta2[3] = false

            icones2[23].classList.remove('fa-caret-up')
            icones2[23].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[3] == false){
            perguntasFeitas[3].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[23].classList.remove('fa-caret-down')
            icones2[23].classList.add('fa-caret-up')

            aberta2[3] = true

        } else if(aberta2[3] == true){
            perguntasFeitas[3].style.display = 'none'
            aberta2[3] = false

            icones2[23].classList.remove('fa-caret-up')
            icones2[23].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}

function abrirPergunta5(){
    if(largura3 >= 1200){
        if(aberta2[4] == false){
            perguntasFeitas[4].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[24].classList.remove('fa-caret-down')
            icones2[24].classList.add('fa-caret-up')

            aberta2[4] = true

        } else if(aberta2[4] == true){
            perguntasFeitas[4].style.display = 'none'
            aberta2[4] = false

            icones2[24].classList.remove('fa-caret-up')
            icones2[24].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[4] == false){
            perguntasFeitas[4].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[24].classList.remove('fa-caret-down')
            icones2[24].classList.add('fa-caret-up')

            aberta2[4] = true

        } else if(aberta2[4] == true){
            perguntasFeitas[4].style.display = 'none'
            aberta2[4] = false

            icones2[24].classList.remove('fa-caret-up')
            icones2[24].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}

function abrirPergunta6(){
    if(largura3 >= 1200){
        if(aberta2[5] == false){
            perguntasFeitas[5].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[25].classList.remove('fa-caret-down')
            icones2[25].classList.add('fa-caret-up')

            aberta2[5] = true

        } else if(aberta2[5] == true){
            perguntasFeitas[5].style.display = 'none'
            aberta2[5] = false

            icones2[25].classList.remove('fa-caret-up')
            icones2[25].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[5] == false){
            perguntasFeitas[5].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[25].classList.remove('fa-caret-down')
            icones2[25].classList.add('fa-caret-up')

            aberta2[5] = true

        } else if(aberta2[5] == true){
            perguntasFeitas[5].style.display = 'none'
            aberta2[5] = false

            icones2[25].classList.remove('fa-caret-up')
            icones2[25].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}

function abrirPergunta7(){
    if(largura3 >= 1200){
        if(aberta2[6] == false){
            perguntasFeitas[6].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[26].classList.remove('fa-caret-down')
            icones2[26].classList.add('fa-caret-up')

            aberta2[6] = true

        } else if(aberta2[6] == true){
            perguntasFeitas[6].style.display = 'none'
            aberta2[6] = false

            icones2[26].classList.remove('fa-caret-up')
            icones2[26].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[6] == false){
            perguntasFeitas[6].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[26].classList.remove('fa-caret-down')
            icones2[26].classList.add('fa-caret-up')

            aberta2[6] = true

        } else if(aberta2[6] == true){
            perguntasFeitas[6].style.display = 'none'
            aberta2[6] = false

            icones2[26].classList.remove('fa-caret-up')
            icones2[26].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}

function abrirPergunta8(){
    if(largura3 >= 1200){
        if(aberta2[7] == false){
            perguntasFeitas[7].style.display = 'block'

            rodape.style.opacity = '0'
            rodape.style.marginTop = '330px'

            icones2[27].classList.remove('fa-caret-down')
            icones2[27].classList.add('fa-caret-up')

            aberta2[7] = true

        } else if(aberta2[7] == true){
            perguntasFeitas[7].style.display = 'none'
            aberta2[7] = false

            icones2[27].classList.remove('fa-caret-up')
            icones2[27].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                rodape.style.marginTop = '0px'
            }
        }
    } else if(largura3 <= 520){
        if(aberta2[7] == false){
            perguntasFeitas[7].style.display = 'block'

            rodape.style.opacity = '0'
            perguntasTamanho.style.height = '1750px'

            icones2[27].classList.remove('fa-caret-down')
            icones2[27].classList.add('fa-caret-up')

            aberta2[7] = true

        } else if(aberta2[7] == true){
            perguntasFeitas[7].style.display = 'none'
            aberta2[7] = false

            icones2[27].classList.remove('fa-caret-up')
            icones2[27].classList.add('fa-caret-down')

            if(aberta2[0] == false && aberta2[1] == false && aberta2[2] == false && aberta2[3] == false && aberta2[4] == false && aberta2[5] == false && aberta2[6] == false && aberta2[7] == false){
                rodape.style.opacity = '1'
                perguntasTamanho.style.height = '860px'
            }
        }
    }
}