const controles = document.querySelectorAll('.controles') /*Constante (Array) dos botões*/
const itens = document.querySelectorAll('.item') /*Constante das fotos*/
const maxItens = itens.length /*Constante do número máximo de fotos*/

let itemFoco = 0 /*Valor da foto em foco*/

controles.forEach(controle => {
    controle.addEventListener('click', () => {
        const esquerda = controle.classList.contains('seta-esquerda')

        if(esquerda){ /*Sem operador lógico >> constante boolean*/
            itemFoco -= 1
        } else {
            itemFoco += 1
        }

        if(itemFoco >= maxItens){
            itemFoco = 0
        }

        if(itemFoco < 0){
            itemFoco = maxItens - 1
        }

        itens.forEach(item => item.classList.remove('item-foco'))

        itens[itemFoco].scrollIntoView({
            block: "center",
            inline: "center"
        })

        switch(itemFoco){
            case 0:
                itens[itemFoco + 1].classList.add('item-direita')

                for(let x = 1; x < 8; x++){
                    itens[x].classList.remove('item-esquerda')
                }
                
                break
            case 1:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                itens[itemFoco + 1].classList.remove('item-esquerda')
                itens[itemFoco + 1].classList.add('item-direita')
                break
            case 2:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                itens[itemFoco + 1].classList.remove('item-esquerda')
                itens[itemFoco + 1].classList.add('item-direita')
                break
            case 3:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                itens[itemFoco + 1].classList.remove('item-esquerda')
                itens[itemFoco + 1].classList.add('item-direita')
                break
            case 4:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                itens[itemFoco + 1].classList.remove('item-esquerda')
                itens[itemFoco + 1].classList.add('item-direita')
                break
            case 5:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                itens[itemFoco + 1].classList.remove('item-esquerda')
                itens[itemFoco + 1].classList.add('item-direita')
                break
            case 6:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                itens[itemFoco + 1].classList.remove('item-esquerda')
                itens[itemFoco + 1].classList.add('item-direita')
                break
            case 7:
                itens[itemFoco - 1].classList.remove('item-direita')
                itens[itemFoco - 1].classList.add('item-esquerda')
                break
        }

        itens[itemFoco].classList.add('item-foco')
        
    })
})