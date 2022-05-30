import React, {Component} from "react";
import Select from "./Select";

class Weapon extends Component{
    render(){

        const isState = this.props.isState; // State Shortcut
        const Type = this.props.Type; // Get Type

        const isDecimal = (isState.SubStat.includes(".") || isState.SubStat.includes(",") ) ? "%" : ""; // Check Percent
        const WeaponTypeForChar = window.CharaList[this.props.Name].Arme; // Type of Weapon of Charater selected
        const WeaponSubStats = window.WeaponListBis[WeaponTypeForChar][isState.Star][isState.Modele];
        const WeaponListByTypeAndStar = Object.keys(window.WeaponListBis[WeaponTypeForChar][isState.Star]) 

        return(
        <div className="Weapon">
            <div className="WeaponImageBlock">
                <img className="WeaponImage" alt="Arme" src={`image/weapon/${WeaponTypeForChar}/${isState.Modele}.webp`}/> 
            </div>            
            <div className="WeaponInfos">
                <Select isClass="WeaponModeleSelect" isState={WeaponListByTypeAndStar.sort()} name="Arme.Modele" onChange={this.props.ChangeFunction}/>
                <Select isClass="WeaponStarSelect" isState={Object.values(window.StarList)} name="Arme.Star"/>

                <div className="WeaponOne">
                    <input type={Type} className="WeaponInputAtk" min="1" max="800" value={isState.BaseAtk} name="Arme.BaseAtk" onChange={() => {}}/>
                    <span className="WeaponMain WeaponSub">{WeaponSubStats}<input type={Type} className="WeaponInputSub" min="1" max="800" value={isState.SubStat} name="Arme.SubStat" onChange={() => {}}/>{isDecimal}</span>
                </div>

                <div className="WeaponTwo">
                    <Select isClass="WeaponInputRefine" isState={Object.values(window.RefineList)} name="Arme.Rafinement"/>
                    <span className="WeaponSecond WeaponLevel">Niveau <Select isClass="WeaponSelectLevel" isState={window.LevelList.reverse()} name="Arme.Niveau"/>/90</span>
                </div>
            </div>
        </div>
        )
    }
}

export default Weapon;