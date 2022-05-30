import React, {Component} from "react";

class Select extends Component{
    render(){

        const Select = (this.props.name).split('.').reduce((o,i) => o[i], window.Chara);
        const Option = this.props.isState.map((e)=>{ 
            let isSelected = (e == Select) ?  <option key={e} Selected="true" value={e}>{e}</option> : <option  datatest="ok" key={e} value={e}>{e}</option>
            return isSelected
        }) 
        return(
        <select className={this.props.isClass} name={this.props.name} value={Select} onChange={() =>{}}>
            {Option}
        </select>
        )
    }
}

export default Select;