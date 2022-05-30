import React, {Component} from "react";
import Select from "./Select";

import { GiBroadsword as ATK } from "react-icons/gi";
import { GiRollingEnergy as RE } from "react-icons/gi";
import { BsShieldShaded as DEF } from "react-icons/bs";
import { SiElement as EM } from "react-icons/si";
import { GiFlatStar as TC } from "react-icons/gi";
import { GiBouncingSword as DC } from "react-icons/gi";
import { MdBloodtype as PV} from "react-icons/md";

// Create SubStats (Dc, TC ...)
class ArteSubStats extends Component{
    render(){
        // ShortCute State
        const isState = this.props.isState;  // Shortcut State
        const NameArte = this.props.NameArte; // Fleur, Casque...

        // Arte Icon List   
        const MapArte = {"PV": PV,"ATK": ATK,"DEF": DEF,"EM": EM,"RE": RE,"TC":TC,"DC":DC}   

        var isDecimal = Object.keys(isState.Sub).map((e) => {
            let check = (isState.Sub[e][1].includes(".") || isState.Sub[e][1].includes(",") ) ? "%" : "";
            return check;
        })
        

        // Select Icon For Stat
        let TagName = MapArte[isState.Sub[this.props.SubStateSelect][0]];
        // Fix for Mobile Export (One String) 
        const SpanValueForExport = isState.Sub[this.props.SubStateSelect][0]+" +"+isDecimal[(this.props.SubStateSelect-1)]
        // data-stat={isState.Sub[this.props.SubStateSelect][0]}
        return(        
            <div className={`ArteSubStat ToHovered ${isState.Sub[this.props.SubStateSelect][0]}`}>
                <div className="ArteSubStatLeft">
                    <TagName />
                    <Select isClass="ArtefactSelectSub" isState={Object.values(window.SubStatList)} name={`Arte.${NameArte}.Sub.${this.props.SubStateSelect}.0`}/>
                </div>
                <div className="ArteSubStatRight">
                    <input min="1" type={this.props.Type} className="ArtefactInputSub" onChange={()=>{}} value={isState.Sub[this.props.SubStateSelect][1]} name={`Arte.${NameArte}.Sub.${this.props.SubStateSelect}.1`} />
                    {isDecimal[(this.props.SubStateSelect-1)]}
                </div>
            </div>
        )
    }
}

export default ArteSubStats;