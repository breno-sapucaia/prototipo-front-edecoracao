import React, { Component } from "react";
import "./ProductRegister.css";
class ProductRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main className="main">
        <div className="container pt-3">
          <div className="row d-flex align-items-baseline">
            <h3 className="mr-2">Produto</h3>
            <span id="subtitle" className="text-muted">
              Novo Produto
            </span>
          </div>
          <div className="row">
            <form className="w-100">
              <div className="form-row mb-3">
                <div className="col-md-7 no-padding-left">
                  <label for="inputName">Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    placeholder="Digite o nome do produto"
                  />
                </div>
                <div className="col-md-4 offset-md-1">
                  <label for="inputSku">Código (SKU)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputSku"
                    placeholder="Digite o nome do produto"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-7 no-padding-left">
									<label htmlFor="ProductOrigin">Origem</label>
                  <select class="form-control" name="ProductOrigin">
                    <option value="" class="" selected="selected">
                      Selecione
                    </option>
                    <option
                      label="0 - Nacional, exceto as indicadas nos códigos 3 a 5"
                      value="number:1"
                    >
                      0 - Nacional, exceto as indicadas nos códigos 3 a 5
                    </option>
                    <option
                      label="1 - Estrangeira - Importação direta, exceto a indicada no código 6"
                      value="number:2"
                    >
                      1 - Estrangeira - Importação direta, exceto a indicada no
                      código 6
                    </option>
                    <option
                      label="2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7"
                      value="number:3"
                    >
                      2 - Estrangeira - Adquirida no mercado interno, exceto a
                      indicada no código 7
                    </option>
                    <option
                      label="3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%"
                      value="number:4"
                    >
                      3 - Nacional, mercadoria ou bem com Conteúdo de Importação
                      superior a 40% e inferior ou igual a 70%
                    </option>
                    <option
                      label="4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes"
                      value="number:5"
                    >
                      4 - Nacional, cuja produção tenha sido feita em
                      conformidade com os processos produtivos básicos de que
                      tratam as legislações citadas nos Ajustes
                    </option>
                    <option
                      label="5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%"
                      value="number:6"
                    >
                      5 - Nacional, mercadoria ou bem com Conteúdo de Importação
                      inferior ou igual a 40%
                    </option>
                    <option
                      label="6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX"
                      value="number:7"
                    >
                      6 - Estrangeira - Importação direta, sem similar nacional,
                      constante em lista da CAMEX
                    </option>
                    <option
                      label="7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista da CAMEX"
                      value="number:8"
                    >
                      7 - Estrangeira - Adquirida no mercado interno, sem
                      similar nacional, constante em lista da CAMEX
                    </option>
                    <option
                      label="8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%"
                      value="number:9"
                    >
                      8 - Nacional, mercadoria ou bem com Conteúdo de Importação
                      superior a 70%
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default ProductRegister;
