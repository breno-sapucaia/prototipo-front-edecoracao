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
            <header className="header ">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <i onClick={this.props.handleLegendActive} className="fa fa-bars d-none d-lg-block custom-toggle-icon p-1 mr-2"></i>
                    <div className="navbar-brand logo">
                         <img src={logo} alt="logo" />
                    </div> 
                    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                        <li className={this.state.width < 576 ? 'nav-item dropdown' : 'nav-item'}>
                            <span onClick={this.props.selectMenu} className={this.state.width < 576 ? 'd-none':'nav-link custom-nav-link-header text-white' } >
                                Dashboard 
                            </span>
                            <span onClick={this.props.selectMenu} className={this.state.width < 576 ? 'nav-link custom-nav-link-header pl-1 dropdown-toggle text-white':'d-none' } id="navbarDropdown"  data-toggle={this.state.width  <578 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                Dashboard 
                            </span>
                            <div className={this.state.width < 578 ? 'dropdown-menu azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                                {this.props.dashboardItems.map(item => 
                                    <span  key={item.id} className='dropdown-item'>
                                        <WayToGoDown color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGoDown>
                                    </span>            
                                )}
                            </div>
                                 
                        </li>
                        <li className={this.state.width < 578 ? 'nav-item dropdown ' : 'nav-item'}>
                                
                                <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'd-none':'nav-link custom-nav-link-header text-white' } >
                                    Cadastros 
                                </span>
                                <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'nav-link custom-nav-link-header pl-1 dropdown-toggle text-white':'d-none' } id="navbarDropdown" role="button" data-toggle={this.state.width < 578 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                                    Cadastros
                                </span>
                                <div className={this.state.width < 578 ? 'dropdown-menu azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                                { this.props.registerItems.map(item => 
                                    <span  key={item.id} className='dropdown-item'>
                                        <WayToGoDown color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGoDown>
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


                // <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                //     <span></span>
                //     <button className="navbar-toggler aling-self-end" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                //         <span className="navbar-toggler-icon"></span>
                //     </button>
                    
                //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                //         <ul className="navbar-nav mr-auto">
                //         <li className={this.state.width < 578 ? 'nav-item dropdown' : 'nav-item'}>
                                
                //                 <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'd-none':'nav-link custom-nav-link-header text-white' } >
                //                     Dashboard 
                //                 </span>
                                
                //                 <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'nav-link custom-nav-link-header pl-1 dropdown-toggle text-white':'d-none' } id="navbarDropdown"  data-toggle={this.state.width  <578 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                //                     Dashboard 
                //                 </span>
                //                 <div className={this.state.width < 578 ? 'dropdown-menu azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                //                 { this.props.dashboardItems.map(item => 
                //                     <span  key={item.id} className='dropdown-item'>
                //                         <WayToGo color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                //                     </span>            
                //                 )}
                //                 </div>
                //             </li>
                            // <li className={this.state.width < 578 ? 'nav-item dropdown ' : 'nav-item'}>
                                
                            //     <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'd-none':'nav-link custom-nav-link-header text-white' } >
                            //         Cadastros 
                            //     </span>
                            //     <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'nav-link custom-nav-link-header pl-1 dropdown-toggle text-white':'d-none' } id="navbarDropdown" role="button" data-toggle={this.state.width < 578 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                            //         Cadastros
                            //     </span>
                            //     <div className={this.state.width < 578 ? 'dropdown-menu azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                            //     { this.props.registerItems.map(item => 
                            //         <span  key={item.id} className='dropdown-item'>
                            //             <WayToGo color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                            //         </span>            
                            //     )}
                            //     </div>
                            // </li>
                //             <li className={this.state.width < 578 ? 'nav-item dropdown' : 'nav-item'}>
                                
                //                 <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'd-none':'nav-link custom-nav-link-header text-white' } >
                //                     Vendas
                //                 </span>
                                
                //                 <span onClick={this.props.selectMenu} className={this.state.width < 578 ? 'nav-link  custom-nav-link-header pl-1 dropdown-toggle text-white':'d-none' } id="navbarDropdown" role="button" data-toggle={this.state.width < 578 ? 'dropdown':''} aria-haspopup="true" aria-expanded="false">
                //                     Vendas
                //                 </span>
                //                 <div className={this.state.width < 578 ? 'dropdown-menu azul border-0':'d-none'} aria-labelledby="navbarDropdown">
                                    
                //                 { this.props.sallesItems.map(item => 
                //                     <span  key={item.id} className='dropdown-item'>
                //                         <WayToGo color={'text-white'} name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                //                     </span>            
                //                 )}
                //                 </div>
                //             </li>
                //         </ul>

                //     </div>
                // </nav>

