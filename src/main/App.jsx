import React, { Component } from 'react';
import Header from '../components/template/Header/Header'
import Menu from '../components/template/Menu/Menu'
import './App.css'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom'

import { inicioOptions, cadastrosOptions, sallesOptions } from './LinkOptions'

export default class App extends Component {


  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectMenu = this.selectMenu.bind(this)

    this.state = {
      toggleMenu: true,
      items: inicioOptions()
    };
  }

  toggleMenu() {
    this.setState({ toggleMenu: !this.state.toggleMenu });
  }

  

  selectMenu(e) {
    const menuItemSelected = e.target.textContent;
    this.setState({ menuItemSelected })
    this.setState({ toggleMenu: true });

    let items = inicioOptions();
    if (menuItemSelected === 'Cadastros') {
      items = cadastrosOptions()
      this.setState({ items })
    } else if (menuItemSelected === 'Vendas') {
      items = sallesOptions()
      this.setState({ items })
    }
    this.setState({ items })

  }
  render() {
    return (
      <Router>
        <div className={this.state.toggleMenu ? 'app menu-is-active' : 'app menu-isnt-active'}>

          <Header
            toggleMenu={this.toggleMenu}
            toggleMenuTrue={this.toggleMenuTrue}
            selectMenu={e => this.selectMenu(e)}
          />

          <Menu
            toggleMenu={this.state.toggleMenu}
            items={this.state.items}
          />

          <Routes items={this.state.items} />
        </div>
      </Router>
    );
  }
}

