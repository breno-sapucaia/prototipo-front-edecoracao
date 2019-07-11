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
    componentDidUpdate(prevProps, prevState) {
        
    }
   

    render() { 
        return ( 
            <nav className=' d-none d-sm-block mt-3'>
                <ul className="list d-flex flex-column">
                { this.props.items.map(item => 
                    <li  key={item.id} className='list-item d-flex text-muted'>
                        <WayToGo legendActive={this.props.legendActive} color={'text-muted'} name={item.name} icon={item.icon} path={item.path} ></WayToGo>
                    </li>            
                )}
                
                </ul>   
            </nav>
        );
    }
}
