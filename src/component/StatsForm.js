import React, {Component} from "react";
import Input from "./Input";

class StatsForm extends Component{
    render(){
        return(
            <Input 
                Text={this.props.StatsType}
                TheClass=""
                Type="number"
                PlaceHolder="Test"
                Min="1"
                Max="20"
                isValue={this.props.StatsValue}
                Name={`Statistique.${this.props.StatsType}`}
                Event={this.props.Action}/>
            )
    }
}

export default StatsForm;