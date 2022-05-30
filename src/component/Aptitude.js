import React, {Component} from "react";
import Select from "./Select";

class Aptitude extends Component{
    render(){
        const Test = Object.keys(this.props.AptitudeProps).map((e) => {
            return (
                <div className="AptitudeContainer" key={e}>
                    <img alt={e} src={`image/character/${this.props.Name}/${e}.webp`} />
                    {/* <span className="AptitudeLvl">{this.props.AptitudeProps[e]}</span> */}
                    <Select isClass="SelectAptitude" isState={window.AptitudeList} name={`Aptitude.${e}`}/>  
                </div>
            )            
        })

        return(
        <div className="Aptitude">
            {Test}
        </div>
        )
    }
}

export default Aptitude;