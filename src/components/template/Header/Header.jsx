import React, { Component } from 'react';
import './Header.css';
//eslint-disable-next-line
import { WayToGoDown } from '../Menu/wayToGo/WayToGo'

import logo from '../../../assets/logo.png'
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.state = { ...this.props,
            height: window.innerHeight, 
            width: window.innerWidth,
            items:[],
        }    
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        this.setState({
          height: window.innerHeight, 
          width: window.innerWidth
        });
      }
    
    
    render() {
        return (
            <header className="header d-flex flex-row align-items-center">
                <i onClick={this.props.handleLegendActive} className="fa fa-bars d-none d-lg-block custom-toggle-icon p-3 ml-1"></i>
                <nav className="navbar navbar-expand-sm navbar-dark ">
                    <div className="navbar-brand p-3 logo">
                         <img src={logo} alt="logo" />
                    </div> 
                    <button className="navbar-toggler edit-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.width < 576 ? "collapse navbar-collapse  ": "collapse navbar-collapse d-flex justify-content-between"} id="navbarSupportedContent">

                    <ul className={this.props.legendActive && this.state.width > 992 ? 'navbar-nav spand-left':'navbar-nav'}>
                        <li className={this.state.width < 576 ? 'nav-item dropdown' : 'nav-item '}>
                            <span onClick={this.props.selectMenu} className={this.state.width < 576 ? 'd-none':'nav-link custom-header-nav-link text-white' } >
                            {/* eslint-disable-next-line */}
                                <a href="javascript:void(0)" className="a-from-header">Dashboard</a>
                            </span>
                            <span onClick={this.props.selectMenu} className={this.state.width < 576 ? 'nav-link  custom-header-dropdown-nav-link  d-flex pr-4 mt-2 pl-1 align-items-center justify-content-between dropdown-toggle text-white':'d-none' } id="navbarDropdown"  data-toggle={this.state.width  <578 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                Dashboard 
                            </span>
                            <div className={this.state.width <= 576 ? 'dropdown-menu custom-header-dropdown-menu  azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                                {this.props.dashboardItems.map(item => 
                                    <span  key={item.id} className='dropdown-item custom-header-dropdown-item '>
                                        <WayToGoDown color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGoDown>
                                    </span>            
                                )}
                            </div>
                                 
                        </li>
                        <li className={this.state.width <= 576 ? 'nav-item dropdown ' : 'nav-item'}>
                                
                                <span onClick={this.props.selectMenu} className={this.state.width <= 576 ? 'd-none':'nav-link custom-header-nav-link text-white' } >
                                    {/* eslint-disable-next-line */}
                                    <a href="javascript:void(0)" className="a-from-header" >Cadastros</a> 
                                </span>
                                <span onClick={this.props.selectMenu} className={this.state.width <= 576 ? 'nav-link  pr-4 pl-1 custom-header-dropdown-nav-link  dropdown-toggle text-white':'d-none' } id="navbarDropdown" role="button" data-toggle={this.state.width <= 576 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                    Cadastros
                                </span>
                                <div className={this.state.width <= 576 ? 'dropdown-menu custom-header-dropdown-menu azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                                { this.props.registerItems.map(item => 
                                    <span  key={item.id} className='dropdown-item custom-header-dropdown-item'>
                                        <WayToGoDown color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGoDown>
                                    </span>            
                                )}
                                </div>
                        </li>
                        <li className={this.state.width <= 576 ? 'nav-item dropdown' : 'nav-item'}>
                                
                                <span onClick={this.props.selectMenu} className={this.state.width <= 576 ? 'd-none':'nav-link custom-header-nav-link text-white' } >
                                    {/* eslint-disable-next-line */}
                                    <a href="javascript:void(0)" className="a-from-header" >Vendas</a>
                                </span>
                                
                                <span onClick={this.props.selectMenu} className={this.state.width <= 576 ? 'nav-link pr-4 pl-1 custom-header-dropdown-nav-link  dropdown-toggle text-white':'d-none' } id="navbarDropdown" role="button" data-toggle={this.state.width <= 576 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                    Vendas
                                </span>
                                <div className={this.state.width <= 576 ? 'dropdown-menu azul custom-header-dropdown-menu  border-0 ':'d-none'} aria-labelledby="navbarDropdown">    
                                { this.props.sallesItems.map(item => 
                                    <span  key={item.id} className='dropdown-item  custom-header-dropdown-item'>
                                        <WayToGoDown color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGoDown>
                                    </span>            
																)}
																
                                </div>
                        </li>
                        <li className={this.state.width <= 576 ? 'nav-item dropdown' : 'd-none'}>
                                
                                <span onClick={this.props.selectMenu} className={this.state.width <= 576 ? 'd-none':'nav-link custom-header-nav-link text-white' } >
                                    {/* eslint-disable-next-line */}
                                    <a href="javascript:void(0)" className="a-from-header" >Vendas</a>
                                </span>
                                
                                <span onClick={this.props.selectMenu} className={this.state.width <= 576 ? 'nav-link pr-4 pl-1 custom-header-dropdown-nav-link  dropdown-toggle text-white':'d-none' } id="navbarDropdown" role="button" data-toggle={this.state.width <= 576 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                    <span> <i className="fa fa-user-circle"></i> edecoração</span>
                                </span>
                                <div className={this.state.width <= 576 ? 'dropdown-menu azul custom-header-dropdown-menu  border-0 ':'d-none'} aria-labelledby="navbarDropdown">    
                                {/* eslint-disable-next-line */}
                                <a className="dropdown-item custom-header-dropdown-item " href="javascript:void(0)"><i className="fa fa-user mr-2"></i><span>Dados</span></a>
                                
                                {/* eslint-disable-next-line */}
                                <a className="dropdown-item custom-header-dropdown-item " href="javascript:void(0)"><i className="fa fa-cogs mr-2"></i><span>Configurações</span></a>
                                {/* eslint-disable-next-line */}
                                <a className="dropdown-item custom-header-dropdown-item " href="javascript:void(0)"><i className="fa fa-sign-out mr-2"></i><span>Sair</span></a>
                                </div>
                        </li>

                    </ul>
                    <ul className={this.state.width > 578 ? 'navbar-nav drop-down-user':'d-none'}>
                        <li className="nav-item dropdown ">
                            <span className={'nav-link custom-header-nav-link  pl-1 dropdown-toggle '} id="navbarDropdown" role="button" data-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-user-circle p-2"></i>
                                    <span>edecoração</span>
                            </span>
                            <div className="dropdown-menu login-user" aria-labelledby="navbarDropdown">
                                {/* eslint-disable-next-line */}
                                <a className="dropdown-item customized-item " href="javascript:void(0)"><i className="fa fa-user mr-2"></i><span>Dados</span></a>
                                <div className="dropdown-divider"></div>
                                {/* eslint-disable-next-line */}
                                <a className="dropdown-item customized-item " href="javascript:void(0)"><i className="fa fa-cogs mr-2"></i><span>Configurações</span></a>
                                {/* eslint-disable-next-line */}
                                <a className="dropdown-item customized-item " href="javascript:void(0)"><i className="fa fa-sign-out mr-2"></i><span>Sair</span></a>
                            </div>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>

        );
    }
}


               