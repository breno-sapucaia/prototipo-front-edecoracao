import React, { Component } from 'react';

class ProductRegister extends Component {
    //eslint-disable-next-line
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main className="main">
                <div className="header-form d-flex justify-content-between p-4">
                    <h2>Produtos</h2>
                    <div class="input-group mb-3 col-md-6 col-12 ">
                        <input type="text" class="form-control" placeholder="Pesquise por nome, código (SKU) ou GTIN/EAN" aria-label="Pesquise por nome, código (SKU) ou GTIN/EAN" aria-describedby="basic-addon" />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
            </main>
                );
           }
       }
        
export default ProductRegister;