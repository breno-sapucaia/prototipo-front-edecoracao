import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

 import './WayToGo.css'
class WayToGo extends Component {
    constructor(props) {
        super(props);
        this.state = { activedItem:null }
    }
    render() { 
        return ( 
            <Link to={this.props.path} className={"waytogo "+ this.props.color}>
                <i className={this.props.icon}></i>
                {this.props.name}
            </Link>
         );
    }
}
 
export default WayToGo;
