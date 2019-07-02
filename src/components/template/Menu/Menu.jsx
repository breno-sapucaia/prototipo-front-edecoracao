import React, { Component } from 'react';
import './Menu.css';
import WayToGo from './wayToGo/WayToGo'


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
            items: [],
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        const items =  nextProps.items
        return {items}
    }
    
    render() { 
        return ( 
            <nav className={this.props.toggleMenu ? 'menu':'menu d-none'}>
                <ul className="list d-flex flex-column">
                { this.state.items.map(item => 
                    <li onClick={e=>toggleActive(e)} key={item.id} className='list-item d-flex text-muted'>
                        <WayToGo  name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                    </li>            
                )}
                
                </ul>   
            </nav>
        );
    }
}

function toggleActive(e){
    const waystogo = document.querySelectorAll('.waytogo');
    waystogo.forEach((waytogo) => {
        if(waytogo.classList.contains('is-active')){
            waytogo.classList.remove('is-active')
        }
    })
    e.target.classList.add('is-active')
}