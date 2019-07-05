import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery'
 import './WayToGo.css'
class WayToGo extends Component {
    constructor(props) {
        super(props);
        this.state = { activedItem:null }
    }
    componentDidMount(){
        
    }
    render() { 
        return ( 
            <Link to={this.props.path} className={"waytogo "+ this.props.color}>
                <i id="icone"   className={this.props.icon+' p-3 pr-1 pl-1'} data-toggle="tooltip" data-placement="right" title={this.props.name}></i>
                <span id="texto" className={this.props.legendActive ? 'd-none d-lg-block':'d-none d-lg-none'}>{this.props.name}</span>
            </Link>
         );
    }
}
 
export default WayToGo;
