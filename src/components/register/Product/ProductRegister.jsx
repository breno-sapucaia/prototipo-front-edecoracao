import React, { Component } from 'react';

class ProductRegister extends Component {
    //eslint-disable-next-line
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main className="main">
                <div className="header-form container ">
                    <div className="row mt-3">
                    <h2 className="col-12 col-md-6">Protudos</h2>
                    <div className="input-group mb-3 col-md-6 col-12 ">
                        <input type="text" className="form-control" placeholder="Pesquise por nome, código (SKU) ou GTIN/EAN" aria-label="Pesquise por nome, código (SKU) ou GTIN/EAN" aria-describedby="basic-addon" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon"><i className="fa fa-search"></i></span>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
                );
           }
       }
        
export default ProductRegister;