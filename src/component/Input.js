import React, {Component} from "react";

class Input extends Component{

    Sample = () => {}
    
    render(){
        const Function = this.props.Event || this.Sample
        return( 
        <div className="Input">     
            <span>{this.props.Text}<b className="StarDeco">✦</b></span>
                <input 
                    type={this.props.Type} 
                    placeholder={this.props.PlaceHolder} 
                    min={this.props.Min} 
                    max={this.props.Max} 
                    name={this.props.Name} 
                    className={this.props.TheClass}
                    onChange={Function}                    
                    value={this.props.isValue}></input>
        </div>
        )
    }
}

export default Input;