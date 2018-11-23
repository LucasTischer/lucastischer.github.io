
class Store {

  constructor() {
    this.store = "produtos";
  }

  _parse(d) {
    return JSON.parse(d);
  }

  _stringify(d) {
    return JSON.stringify(d);
  }

  get produtos () {
    return this._parse(localStorage.getItem(this.store)) || [];
  }

  set novoItem(item) {
    let produtos = this.produtos
    let res = produtos.push(item);
    localStorage.setItem(this.store, this._stringify(produtos));
    return res;
  }

  editarIndex(idx, valueItem, valueQtd) {
    let produtos = this.produtos
    let res = (produtos[idx].item = valueItem, produtos[idx].qtd = valueQtd);
    localStorage.setItem(this.store, this._stringify(produtos));
    return res;
  }

  set excluirIndex(idx) {
    let produtos = this.produtos
    let res = produtos.splice(idx, 1);
    localStorage.setItem("produtos", this._stringify(produtos));
    return res;
  }
}
