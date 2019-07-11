import React, { Component } from 'react';
import Header from '../components/template/Header/Header'
import Menu from '../components/template/Menu/Menu'
import './App.css'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'

import { items, all, register, salles, dashboard } from './LinkOptions'

export default class App extends Component {


  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectMenu = this.selectMenu.bind(this);
    this.handleLegendActive = this.handleLegendActive.bind(this);

    this.state = {
      toggleMenu: true,
      items: items,
      allItems: all(),
      staticItems: dashboard(),
      legendActive: false
    };
  }

  toggleMenu() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  handleLegendActive(){
    this.setState({ legendActive: !this.state.legendActive });
    console.log(this.state.legendActive)
  }

  selectMenu(e) {
    const menuItemSelected = e.target.textContent;
    console.log(menuItemSelected)
    this.setState({ menuItemSelected })
    
    let staticItems = dashboard();
    if (menuItemSelected === 'Cadastros') {
      staticItems = register()
      this.setState({ staticItems })
    } else if (menuItemSelected === 'Vendas') {
      staticItems = salles()
      this.setState({ staticItems })
    } 
    this.setState({ staticItems })
    
  }
  render() {
    return (
      <Router>
        <div className={this.state.toggleMenu ? 'app menu-is-active' : 'app menu-isnt-active'}>

          <Header
            dashboardItems={this.state.items.dashboard}
            registerItems={this.state.items.register}
            sallesItems={this.state.items.salles}
            toggleMenu={this.toggleMenu}
            toggleMenuTrue={this.toggleMenuTrue}
            selectMenu={e => this.selectMenu(e)}
            handleLegendActive={this.handleLegendActive}
            legendActive={this.state.legendActive}
          />

          <Menu
            
            legendActive={this.state.legendActive}
            toggleMenu={this.state.toggleMenu}
            items={this.state.staticItems}
          />

          <Routes allItems={this.state.allItems} />
        </div>
      </Router>
    );
  }
}

