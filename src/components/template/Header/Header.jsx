import React, { Component } from 'react';
import './Header.css';
import WayToGo from '../Menu/wayToGo/WayToGo'
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
    static getDerivedStateFromProps(nextProps, prevState) {
        const items=nextProps.items
        
        return {items}
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
         this.setState({
                height: window.innerHeight, 
                width: window.innerWidth
            });
        console.log('width:'+this.state.width+'   - height:'+this.state.height)
      }
    render() {
        return (
            <header className="header ">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <span></span>
                    <button className="navbar-toggler aling-content-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <span className="nav-link">Dashboard</span>
                            </li>
                            <li className={this.state.width < 998 ? 'nav-item dropdown' : 'nav-item'}>
                                <span onClick={this.props.selectMenu}className={this.state.width < 998 ? 'nav-link dropdown-toggle':'nav-link' } id="navbarDropdown" role="button" data-toggle={this.state.width < 998 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                    Cadastros
                                </span>
                                <div className={this.state.width < 998 ? 'dropdown-menu bg-primary border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                                { this.props.items.map(item => 
                                    <span  key={item.id} className='dropdown-item'>
                                        <WayToGo  name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                                    </span>            
                                )}
                                </div>
                            </li>
                            <li className={this.state.width < 998 ? 'nav-item dropdown' : 'nav-item'}>
                                <span onClick={this.props.selectMenu}className={this.state.width < 998 ? 'nav-link dropdown-toggle':'nav-link' } id="navbarDropdown" role="button" data-toggle={this.state.width < 998 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                    Vendas
                                </span>
                                <div className={this.state.width < 998 ? 'dropdown-menu bg-primary border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                                { this.props.items.map(item => 
                                    <span  key={item.id} className='dropdown-item'>
                                        <WayToGo  name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                                    </span>            
                                )}
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>




            </header>

        );
    }
}



{/* 
<div className="left">
<i onClick={this.props.toggleMenu} className="menu fa fa-bars"></i> 
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
</div> */}