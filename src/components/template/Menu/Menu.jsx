import React, { Component } from 'react';
import './Menu.css';
import WayToGo from './wayToGo/WayToGo'


export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props,
        }
    }
    

    render() { 
        return ( 
            <nav className={this.props.toggleMenu ? 'menu':'menu d-none'}>
                <ul className="list d-flex flex-column">
                { this.props.items.map(item => 
                    <li  key={item.id} className='list-item d-flex text-muted'>
                        <WayToGo  name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                    </li>            
                )}
                
                </ul>   
            </nav>
        );
    }
}
