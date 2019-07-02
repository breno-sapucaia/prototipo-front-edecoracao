import React, { Component } from 'react';

class ProductRegister extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <main className="main">
                <div className="header-form">
                    <h2>{this.props.name}</h2>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon" />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon"></span>
                        </div>
                    </div>
                    </div>



                
            </main>
                );
           }
       }
        
export default ProductRegister;