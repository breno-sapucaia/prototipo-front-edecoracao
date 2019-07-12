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
          <hr className="mb-4" />
          <div className="row ">
            <form className="w-100">
              <div className="form-row mb-3">
                <div className="col-md-8 custom-padding no-padding-lr mb-3">
                  <label htmlFor="inputName">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Digite o nome do produto"
                  />
                </div>
                <div className="col-md-4  no-padding-lr">
                  <label htmlFor="inputSku">Código (SKU)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSku"
                    placeholder="Digite o nome do produto"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-8 custom-padding no-padding-lr">
                  <label htmlFor="ProductOrigin">Origem</label>
                  <select className="form-control" name="ProductOrigin">
                    <option
                      label="0 - Nacional, exceto as indicadas nos códigos 3 a 5"
                      defaultValue="number:1"
                    >
                      0 - Nacional, exceto as indicadas nos códigos 3 a 5
                    </option>
                    <option
                      label="1 - Estrangeira - Importação direta, exceto a indicada no código 6"
                      defaultValue="number:2"
                    >
                      1 - Estrangeira - Importação direta, exceto a indicada no
                      código 6
                    </option>
                    <option
                      label="2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7"
                      defaultValue="number:3"
                    >
                      2 - Estrangeira - Adquirida no mercado interno, exceto a
                      indicada no código 7
                    </option>
                    <option
                      label="3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%"
                      defaultValue="number:4"
                    >
                      3 - Nacional, mercadoria ou bem com Conteúdo de Importação
                      superior a 40% e inferior ou igual a 70%
                    </option>
                    <option
                      label="4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes"
                      defaultValue="number:5"
                    >
                      4 - Nacional, cuja produção tenha sido feita em
                      conformidade com os processos produtivos básicos de que
                      tratam as legislações citadas nos Ajustes
                    </option>
                    <option
                      label="5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%"
                      defaultValue="number:6"
                    >
                      5 - Nacional, mercadoria ou bem com Conteúdo de Importação
                      inferior ou igual a 40%
                    </option>
                    <option
                      label="6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX"
                      defaultValue="number:7"
                    >
                      6 - Estrangeira - Importação direta, sem similar nacional,
                      constante em lista da CAMEX
                    </option>
                    <option
                      label="7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante em lista da CAMEX"
                      defaultValue="number:8"
                    >
                      7 - Estrangeira - Adquirida no mercado interno, sem
                      similar nacional, constante em lista da CAMEX
                    </option>
                    <option
                      label="8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%"
                      defaultValue="number:9"
                    >
                      8 - Nacional, mercadoria ou bem com Conteúdo de Importação
                      superior a 70%
                    </option>
                  </select>
                  <p className="text-muted">
                    Origem do produto conforme o ICMS
                  </p>
                </div>
                <div className="col-md-4 no-padding-lr mb-3">
                  <label htmlFor="ProductType">Tipo</label>
                  <select className="form-control" name="ProductType">
                    <option label="Simples" defaultValue="number:1">
                      Simples
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-row mb-5">
                <div className="col-md-3 custom-padding no-padding-lr mb-3">
                  <label htmlFor="NCM">NCM</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="(Exemplo:1001.10.10)"
                    id="NCM"
                  />
                  <p
                    className="text-muted legend-input"
                    title="Nomencalutra comum do mercosul"
                  >
                    Nomencalutra comum do mercosul
                  </p>
                </div>
                <div className="col-md-3 custom-padding  no-padding-lr mb-3">
                  <label htmlFor="Sellprice">Preço de custo</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">R$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="192.00"
                      id="Sellprice"
                    />
                  </div>
                </div>
                <div className="col-md-3 custom-padding  no-padding-lr mb-3">
                  <label htmlFor="SellCost">Preço de venda</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">R$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="192.00"
                      id="SellCost"
                    />
                  </div>
                </div>
                <div className="col-md-3 s no-padding-lr ">
                  <label htmlFor="Unity">Unidae</label>
                  <div className="input-group">
                    <select
                      className="form-control"
                      name="ProductUnity"
                      id="Unity"
                    >
                      <option defaultValue="ML">ML</option>
                      <option defaultValue="M2">M²</option>
                      <option defaultValue="Rolo">Rolo</option>
                    </select>
                  </div>
                </div>
              </div>
              <h4 className="mb-3">Expedição</h4>
              <hr className="mb-4" />
              <div className="form-row mb-3">
                <div className="col-md-4 no-padding-lr custom-padding mb-3">
                  <label htmlFor="gtin">GTIN/EAN</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gtin"
                    id="gtin"
                    placeholder="Código de barras"
                  />
                  <p
                    className="text-muted legend-input"
                    title="Global Trade Item Number"
                  >
                    Global Trade Item Number
                  </p>
                </div>
                <div className="col-md-4 no-padding-lr custom-padding mb-3">
                  <label htmlFor="gtin">GTIN/EAN da embalagem</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gtin"
                    id="gtin"
                    placeholder="Código de barras da comercialização"
                  />
                  <p className="legend-input text-muted" title="GTIN-14">
                    GTIN-14
                  </p>
                </div>
                <div className="col-md-4 no-padding-lr ">
                  <label htmlFor="gtin">Localização</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gtin"
                    id="gtin"
                    placeholder="Ex: corredor A"
                  />
                  <p
                    className="legend-input text-muted"
                    title="Localização física no estoque"
                  >
                    Localização física no estoque
                  </p>
                </div>
              </div>
              <div className="form-row mb-5">
                <div className="col-md-4 no-padding-lr custom-padding mb-3">
                  <label htmlFor="pesoliquido">Peso Líquido</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="pesoliquido"
                      id="pesoliquido"
                      placeholder="Em kg"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">kg</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 no-padding-lr custom-padding">
                  <label htmlFor="pesobruto">Peso Bruto</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      name="pesobruto"
                      id="pesobruto"
                      placeholder="Em kg"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">kg</span>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="mb-4">Estoque</h4>
              <hr className="mb-3" />
              <div className="form-row">
                <div className="col-md-3 no-padding-lr custom-padding mb-3 ">
                  <label htmlFor="estoqueatual">Estoque atual</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="estoqueatual"
                      id="estoqueatual"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">un</span>
                    </div>
                  </div>
                  <p
                    className="legend-input text-muted"
                    title="Informar se deseja lançar o estoque inicial do protudo"
                  >
                    Informar se deseja lançar o estoque inicial do protudo
                  </p>
                </div>
                <div className="col-md-3 no-padding-lr custom-padding mb-3">
                  <label htmlFor="estquemin">Estoque Mínimo</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="estquemin"
                      id="estquemin"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">un</span>
                    </div>
                  </div>
                  <p
                    className="legend-input text-muted"
                    title="Quantidade mínima do produto no estoque"
                  >
                    Quantidade mínima do produto no estoque
                  </p>
                </div>
                <div className="col-md-3 no-padding-lr custom-padding mb-3">
                  <label htmlFor="Estoque máximo">Estoque Máximo</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="Estoque máximo"
                      id="Estoque máximo"
                      className="form-control"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">un</span>
                    </div>
                  </div>
                  <p
                    className="legend-input text-muted"
                    title="Quantidade máxima do produto no estoque"
                  >
                    Quantidade máxima do produto no estoque
                  </p>
                </div>
                <div className="col-md-3 no-padding-lr">
                  <label htmlFor="controlarestoque">Controlar Estoque</label>
                  <select name="controlarestoque" id="controlarestoque" className="form-control">
                    <option defaultvalue="1">Sim</option>
                    <option defaultvalue="-1">Não</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="row mt-3">
              <button className="btn btn-primary mr-2 ">Salvar</button>
              <button className="btn btn-secondary">Cancelar</button>
            </div>

          </div>
        </div>
      </main>
    );
  }
}

export default ProductRegister;
