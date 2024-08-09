const controles2 = document.querySelectorAll('.controles-2') /*Constante (Array) dos botões*/
const itens2 = document.querySelectorAll('.item-2') /*Constante das fotos*/
const maxItens2 = itens2.length /*Constante do número máximo de fotos*/

let itemFoco2 = 0 /*Valor da foto em foco*/

controles2.forEach(controle2 => {
    controle2.addEventListener('click', () => {
        const esquerda2 = controle2.classList.contains('seta-esquerda-2')

        if(esquerda2){ /*Sem operador lógico >> constante boolean*/
            itemFoco2 -= 1
        } else {
            itemFoco2 += 1
        }

        if(itemFoco2 >= maxItens2){
            itemFoco2 = 0
        }

        if(itemFoco2 < 0){
            itemFoco2 = maxItens2 - 1
        }

        itens2.forEach(item2 => item2.classList.remove('item-foco'))

        itens2[itemFoco2].scrollIntoView({
            block: "center",
            inline: "center"
        })  

        itens2[itemFoco2].classList.add('item-foco')
    })
})