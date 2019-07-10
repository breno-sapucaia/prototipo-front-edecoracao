import React, { Component } from "react";
import "./ProductRegister.css";
class ProductRegister extends Component {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="main">
        <div className="container p-3">
          <div className="row  ">
            <h3 className="col-12 col-sm-4 col-md-4 col-lg-7">Protudos</h3>
            <div className="input-group mb-3 col-12 col-sm-8 col-md-8 col-lg-5">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquise por nome, código (SKU) ou GTIN/EAN"
                aria-label="Pesquise por nome, código (SKU) ou GTIN/EAN"
                aria-describedby="basic-addon"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
          <div className="row mb-3 d-flex justify-content-between custom-filter-row">
            <ul className="nav nav-pills custom-nav-product-filter">
              <li className="nav-item ">
                {/*  eslint-disable-next-line */}
                <a href="javascript:void(0)" className="nav-link  p-2 filter">
                  Todos
                </a>
              </li>
              <li className="nav-item d-none d-sm-block ">
                {/*  eslint-disable-next-line */}
                <a href="javascript:void(0)" className="nav-link  p-2 filter">
                  Simples
                </a>
              </li>
              <li className="nav-item dropwdown  d-block d-md-none">
                <span
                  className="nav-link dropdown-toggle customize-dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mais
                </span>
                <div className="dropdown-menu">
                  <span className="dropdown-item d-sm-none">Simples</span>
                  <span className="dropdown-item d-md-none">Kits</span>
                  <span className="dropdown-item d-md-none">Variações</span>
                  <span className="dropdown-item d-md-none">Matéria Prima</span>
                </div>
              </li>
              <li className="nav-item d-none  d-md-block">
                {/*  eslint-disable-next-line */}
                <a href="javascript:void(0)" className="nav-link  p-2 filter">
                  Kits
                </a>
              </li>

              <li className="nav-item d-none  d-md-block ">
                {/*  eslint-disable-next-line */}
                <a href="javascript:void(0)" className="nav-link  p-2 filter">
                  Variações
                </a>
              </li>
              <li className="nav-item d-none  d-md-block ">
                {/*  eslint-disable-next-line */}
                <a href="javascript:void(0)" className="nav-link  p-2 filter">
                  Matéria-prima
                </a>
              </li>
            </ul>
            <ul className="nav nav-pills mr-1">
              <li className="nav-item  dropdown">
                <span
                  className="nav-link dropdown-toggle customize-dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Filtros
                </span>
                <div className="dropdown-menu filter-custom-dropdown">
                  <span className="dropdown-item ">aqui</span>
                  <span className="dropdown-item ">serão</span>
                  <span className="dropdown-item ">os filtors</span>
                  <div className="dropdown-divider" />
                  <span className="dropdown-item">de pesquisa</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="row mb-3">
            <button className="btn btn-primary mr-2">Incluir Produto</button>
            <button className="btn btn-outline-info mr-2">
              <i className="fa fa-print styled-icon" /> Imprimir
            </button>
            <div class="dropdown">
              <button
                class="btn btn-default text-blue dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mais ações
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {/* eslint-disable-next-line */}
                <a class="dropdown-item a-from-nav " href="javascript:void(0)">
                  <i className="fa fa-dollar styled-icon" />
                  Reajustar preços dos produtos
                </a>
                {/* eslint-disable-next-line */}
                <a class="dropdown-item a-from-nav" href="javascript:void(0)">
                  <i className="fa fa-edit styled-icon" />
                  Editar CEST dos produtos em lote
                </a>
                <div className="dropdown-divider" />
                {/* eslint-disable-next-line */}
                <a class="dropdown-item a-from-nav" href="javascript:void(0)">
                  <i className="fa fa-upload styled-icon" />
                  Exportar produtos para planilha
                </a>
                {/* eslint-disable-next-line */}
                <a class="dropdown-item a-from-nav" href="javascript:void(0)">
                  <i className="fa fa-download styled-icon" />
                  Importar produtos de uma planilha
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th className="radio-cell" scope="col"><input type="checkbox" name="input-header" id="input-header"/></th>
                  <th scope="col">Nome</th>
                  <th scope="col">Preço de Venda</th>
                  <th scope="col">Estoque</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="radio-cell"scope="row"><input type="checkbox" name="input-header" id="input-header"/></th>
                  <td>PAPEL DE PAREDE - SAFIRA</td>
                  <td>R$166,00</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th className="radio-cell" scope="row"><input type="checkbox" name="input-header" id="input-header"/></th>
                  <td>Papel de Parede - Sophie Conran II</td>
                  <td>R$1.609,00</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th className="radio-cell" scope="row"><input type="checkbox" name="input-header" id="input-header"/></th>
                  <td>Hunter Douglas</td>
                  <td>R$20,00</td>
                  <td>190</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default ProductRegister;
