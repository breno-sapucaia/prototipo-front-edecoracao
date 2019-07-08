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
                <span className="wayotogo-child">
                    
                    <i data-tip data-for={this.props.name} id="icone"   className={this.props.icon+' icone p-3'}></i>

                    <span id="texto" className={this.props.legendActive ? 'd-none d-lg-block':'d-none d-lg-none'}>{this.props.name}</span>


                </span>
                <ReactTooltip id={this.props.name} type='info' className={this.props.legendActive ? 'd-block d-md-none ':'d-block'}>
                    <span>{this.props.name}</span>
                </ReactTooltip>
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
            <Link to={this.props.path} className="watogodown pl-3 pb-2" >
                <i id="iconedown"   className={this.props.icon+' pr-3'} ></i>
                <span id="textodown" >{this.props.name}</span>
            </Link>
         );
    }
}
 
export {WayToGoDown}

export default WayToGo;
