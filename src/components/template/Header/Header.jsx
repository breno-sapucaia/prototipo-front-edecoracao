import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { ...this.props }
    }
    render() {
        return (
            <header className="header">
                <div className="left">
                    <i onClick={this.props.toggleMenu} className="menu fa fa-bars"></i> {/*<span className="logo">edecoração</span>*/}
                </div>
                <div className="mid">
                    <ul className="menu-list">
                        <li onClick={this.props.selectMenu} className="menu-list-item">Início</li>
                        <li onClick={this.props.selectMenu} className="menu-list-item">Cadastros</li>
                        <li onClick={this.props.selectMenu} className="menu-list-item">Vendas</li>
                        <li onClick={this.props.selectMenu} className="menu-list-item">Clientes</li>
                        <li onClick={this.props.selectMenu} className="menu-list-item">Finanças</li>
                    </ul>
                </div>
                <div className="right">
                    <i className="fa fa-bell"></i>
                    {/* <span className="suport">
                        <i className="fa fa-question-circle"></i>
                        suporte 
                        
                    </span> */}
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle customize-btn" type="button" id="dropdownMenu" data-toggle="dropdown">
                                <i className="fa fa-question-circle"></i>
                                suporte
                        </button>
                      <div class="dropdown-menu" >
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>

                    {/* <span className="login">
                        <i className="fa fa-user-circle"></i>
                        edecoracao.erp
                        <i className="fa fa-angle-down"></i>
                    </span> */}
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle customize-btn" type="button" id="dropdownMenu" data-toggle="dropdown">
                                <i className="fa fa-user-circle"></i>
                                edecoracao.erp
                        </button>
                        <div class="dropdown-menu" >
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}


