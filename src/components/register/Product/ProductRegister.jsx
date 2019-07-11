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
        <div className="container p-3">
          <div className="row d-flex align-items-baseline">
            <h3 className="mr-2">Produto</h3>
            <span id="subtitle" className="text-muted">
              Novo Produto
            </span>
          </div>
          <div className="row">
            <form className="w-100">
              <div className="form-row">
                <div className="col-md-8">
                  <label for="inputEmail">Nome</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Digite o nome do produto"
                  />
                </div>
                <div className="col-md-4">
                  <label for="inputSku">Código (SKU)</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputSku"
                    placeholder="Digite o nome do produto"
                  />
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
