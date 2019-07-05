import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
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
                <i data-tip data-for={this.props.name} id="icone"   className={this.props.icon+' p-3 pr-1 pl-1'}></i>
                <span id="texto" className={this.props.legendActive ? 'd-none d-lg-block':'d-none d-lg-none'}>{this.props.name}</span>
                {rendertoltip()}
            </Link>
         );
    }
}

class WayToGoDown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Link to={this.props.path} className={"waytogo "+ this.props.color}>
                <i id="icone"   className={this.props.icon+' p-3 pr-1 pl-1'} ></i>
                <span id="texto" >{this.props.name}</span>
            </Link>
         );
    }
}
 
function rendertoltip(){
    if(window.innerWidth <= 578) {
        return 
    }else{
        return <ReactTooltip id={this.props.name} type='info'>
                <span>{this.props.name}</span>
            </ReactTooltip>
    }
}

export {WayToGoDown}

export default WayToGo;
