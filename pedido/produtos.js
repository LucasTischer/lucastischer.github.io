
class Produto extends Store {
  constructor() {
    super();
  }

  renderItem (item) {

    let template = `
    <div class="field is-grouped">
        <p class="control">
            <a class="button is-danger is-outlined deletar">
                <span>Delete</span>
            </a>
        </p>
        <p class="control">
            <a class="button is-primary is-active editar">
                Editar
            </a>
        </p>
        <p class="control is-expanded">
            <input class="input" type="text" disabled value="${item.name}">
        </p>
        <p class="controll">
            <input class="input" id="input2" type="number" disabled value="${item.qtd}">
        </p>
    </div>
    `

    let itemHTML = document.createRange().createContextualFragment(template)

    itemHTML.querySelector('.deletar').addEventListener('click', () => {
        lista.excluirIndex = item.idx
        componentList_v2(lista.produtos)
    })

    let inputDesc = itemHTML.querySelector('.input')
    let inputDesc2 = itemHTML.querySelector('#input2')

    itemHTML.querySelector('.editar').addEventListener('click', (e) => {
        inputDesc.removeAttribute('disabled')
        inputDesc2.removeAttribute('disabled')
        inputDesc.focus()
        inputDesc.addEventListener('keyup', (f) => {
            if (f.keyCode === 13) {
                lista.editarIndex(item.idx, inputDesc.value, inputDesc2.value)
                componentList_v2(lista.produtos)
                valueItem.value = ''
                valueItem.focus()
                inputDesc.setAttribute('disabled', 'disabled')
            }
        })
        inputDesc2.addEventListener('keyup', (f) => {
            if (f.keyCode === 13) {
                lista.editarIndex(item.idx, inputDesc.value, inputDesc2.value)
                componentList_v2(lista.produtos)
                valueItem.value = ''
                valueItem.focus()
                inputDesc.setAttribute('disabled', 'disabled')
            }
        })
    })

    return itemHTML
  }
}
