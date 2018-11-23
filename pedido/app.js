const valueItem = document.getElementById('itemValue')
const valueQtd = document.getElementById('itemQtd')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Produto()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = ''
    items.forEach((i, idx) => {
        let item = {
            name: i.item,
            qtd: i.qtd,
            idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

valueItem.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        lista.novoItem = {
            "item": valueItem.value,
            "qtd": valueQtd.value,
            }
        componentList_v2(lista.produtos)
        valueItem.value = ''
        valueQtd.value = ''
        valueItem.focus()
    }
})

valueQtd.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        lista.novoItem = {
            "item": valueItem.value,
            "qtd": valueQtd.value,
            }
        componentList_v2(lista.produtos)
        valueItem.value = ''
        valueQtd.value = ''
        valueItem.focus()
    }
})

window.onload = () => componentList_v2(lista.produtos)
