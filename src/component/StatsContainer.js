import React, {Component} from "react";
import Select from "./Select";

import { GiBroadsword as ATK } from "react-icons/gi";
import { GiRollingEnergy as ER } from "react-icons/gi";
import { BsShieldShaded as DEF } from "react-icons/bs";
import { SiElement as EM } from "react-icons/si";
import { GiFlatStar as TC } from "react-icons/gi";
import { GiBouncingSword as DC } from "react-icons/gi";
import { MdBloodtype as PV} from "react-icons/md";
import { SiCodemagic as BONUS} from "react-icons/si";
import { GiHealthIncrease as SOIN} from "react-icons/gi";

// Create Stats on Banner (PV Max, Attaque...)
class StatsContainer extends Component{

    render(){
        const Map = {"PV Max": PV,"Attaque": ATK,"Défense": DEF,"Maitrise Elémentaire": EM,"Recharge d'énergie": ER,"Taux CRIT":TC,"Dégat CRIT":DC,"Bonus Soin" : SOIN,"Bonus":BONUS}

        const isState = this.props.isState;
        // Check if bonus or not
        var NameBonus = (this.props.Custom == "Bonus") ? <span>Bonus <Select isClass="SelectBonus" isState={Object.values(window.BuildList).sort()} name="Build"/></span> : this.props.Custom;
        var ValueArray = (isState instanceof Array) ? isState[1] : isState;
        // Check if decimal for %
        var isDecimal = (ValueArray.includes(".") || ValueArray.includes(",") ) ? "%" : ""
        // Create Icon
        let TagName = Map[this.props.Custom];
        let ClassNom = window.Association[this.props.Custom];
        
        return(
            <div data-stat={ClassNom} className={`StatsContainer ToHovered ${ClassNom}`}>
                <div className="SubstatsLeft">
                    <TagName />
                    <span className="StatsTitle">{NameBonus}</span>
                </div>            

                <input type={this.props.Type} className="InputStats" min="1" max="7000000" value={ValueArray} name={`Statistique.${this.props.Custom}`} onChange={this.props.Action}/>
                <span className="StatsValue">{isDecimal}</span>
            </div>
        )
    }
}

export default StatsContainer;