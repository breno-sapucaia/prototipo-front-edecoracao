import React, { Component } from 'react';
import './ProductRegister.css'
class ProductRegister extends Component {
    //eslint-disable-next-line
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main className="main">
                <div className="container">
                    <div className="row mt-3">
                        <h2 className="col-12 col-sm-4 col-md-4 col-lg-7">Protudos</h2>
                        <div className="input-group mb-3 col-12 col-sm-8 col-md-8 col-lg-5">
                            <input type="text" className="form-control" placeholder="Pesquise por nome, código (SKU) ou GTIN/EAN" aria-label="Pesquise por nome, código (SKU) ou GTIN/EAN" aria-describedby="basic-addon" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon"><i className="fa fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between custom-filter-row">
                        <ul className="nav nav-pills custom-nav-product-filter">
                            <li className="nav-item ">
                                <span className="nav-link  pr-1 ">Todos</span>
                            </li>
                            <li className="nav-item ">
                                <span className="nav-link pl-1 pr-1 ">Cliente</span>
                            </li>
                            <li className="nav-item ">
                                <span className="nav-link pl-1 pr-1">Fornecedor</span>
                            </li>

                            <li className="nav-item d-none d-sm-block ">
                                <span className="nav-link pl-1 pr-1">Transportador</span>
                            </li>
                            <li className="nav-item d-none d-md-block ">
                                <span className="nav-link pl-1 pr-1">Vendedor</span>
                            </li>
                            <li className="nav-item d-none d-lg-block ">
                                <span className="nav-link pl-1 pr-1">Sem tipo definido</span>
                            </li>
                            
                        </ul>
                        <ul className="nav nav-pills mr-1">
                            <li className="nav-item d-block d-lg-none dropdown">
                                <span className="nav-link pl-1 pr-1 dropdown-toggle customize-dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mais</span>
                                <div className="dropdown-menu">
                                    <span className="dropdown-item d-lg-none" >Sem tipo definido</span>
                                    <span className="dropdown-item d-md-none" >Vendedor</span>
                                    <span className="dropdown-item  d-sm-none" >Transportador</span>
                                    <div className="dropdown-divider"></div>
                                    <span className="dropdown-item" >Separated link</span>
                                </div>
                            </li>
                            <li className="nav-item d-none d-sm-block">
                                <span className="nav-link">teste</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductRegister;