import React, { Component } from 'react';
import './Index.css';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillReceiveProps(){
        console.log(this.props.toggleMenu)
    }


    render() { 
        return ( 
            <main className="main">
                <div className="jumbotron m-3 p-3 bg-white">
                    <h1 className="display-5">
                        Bem Vindo ao edecoração<sub>erp</sub>
                    </h1>
                    <p className="lead">Gerencie sua loja com praticidade e autonomia!</p>
                    <hr className="my-4"/>
                    <nav className="breadcrumb bg-white ">
                        <ol className="breadcrumb bg-white">
                        <li className="breadcrumb-item ">Início</li>
                        <li className="breadcrumb-item active" current="page">Índicie</li>
                        </ol>
                    </nav>

                </div>
            </main>
         );
    }
}
 
