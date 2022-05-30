import React, {Component} from "react";
import { createPortal } from "react-dom";
import ArteForm from "./ArteForm";
import Select from "./Select";
import SelectGroup from "./SelectGroup";
import Input from "./Input";
import StatsForm from "./StatsForm";
import { FiMenu as Menu} from "react-icons/fi";


class Form extends Component{

        
    render(){

        // Artefact (Fleur, Plume) Generator
        const ArteGroup = Object.keys(this.props.isState.Character.Arte).map((e)=>{
            return <ArteForm key={e} isState={this.props.isState} ArteType={e} Action={this.props.Action}/>
        })

        // Statistiques Form Generator
        const StatsGroup = Object.keys(this.props.isState.Character.Statistique).map((e)=> {
            let value = this.props.isState.Character.Statistique[e];
            return <StatsForm key={e} isState={this.props.isState} StatsValue={value} StatsType={e} />
        })

        const TheState = this.props.isState.Character; // State Shortcut
        const WeaponType = window.CharaList[TheState.Nom].Arme; // Type of Weapon of Charater selected
        const WeaponListByTypeAndStar = Object.keys(window.WeaponListBis[WeaponType][TheState.Arme.Star]) // List Weapon By Type and Star for Selected Character
        
        return(
        <div className="Formulaire" onChange={this.props.Action}>
            <div className="IconMenu"><Menu onClick={this.props.Menu} /></div>
            <div className="FormulaireContainer">
                
                <div className="CharacterForm BlockFrom">
                    <h4>Personnage</h4>
                    {/* <Input Text="Niveau" TheClass="" Type="number" PlaceHolder="Test" Min="1" Max="90" isValue={TheState.Niveau} Name="Niveau" Event={this.props.Action}/> */}
                    <SelectGroup Title="Niveau" isState={window.LevelList.reverse()} name="Niveau" />
                    <SelectGroup isClass="ChangeCharacter" Title="Personnage" isState={Object.keys(window.CharaList).sort()} name="Nom" />
                    <SelectGroup Title="Constellation" isState={Object.values(window.ConstallationList)} name="Constellation"/>
                    <SelectGroup Title="Build" isState={Object.values(window.BuildList).sort()} name="Build"/>
                </div>

                <div className="StatsForm BlockFrom"> 
                    <h4>Statistiques</h4>
                    {StatsGroup}
                </div>

                <div className="Aptitude BlockFrom">
                    <h4>Niveau Aptitude</h4>
                    <SelectGroup Title="Normal" isState={window.AptitudeList} name="Aptitude.NORMAL" PlaceHolder="Type Arme"/>  
                    <SelectGroup Title="Skill" isState={window.AptitudeList} name="Aptitude.SKILL" PlaceHolder="Type Arme"/>  
                    <SelectGroup Title="Burst" isState={window.AptitudeList} name="Aptitude.BURST" PlaceHolder="Type Arme"/>  
                </div>
                

                <div className="WeaponForm BlockFrom">
                    <h4>Arme</h4>
                    <SelectGroup Title="Rareté" isState={Object.values(window.StarList)} name="Arme.Star"/>
                    <SelectGroup Title="Modèle" isState={WeaponListByTypeAndStar.sort()} name="Arme.Modele" PlaceHolder="Arme"/>
                    
                    <Input Text="ATK Base" TheClass="" Type="number" PlaceHolder="Test" Min="1" Max="700" isValue={TheState.Arme.BaseAtk} Name="Arme.BaseAtk" Event={this.props.Action}/>
                    <Input Text="Sub Stat Val" TheClass="" Type="number" PlaceHolder="Test" Min="1" Max="300" isValue={TheState.Arme.SubStat} Name="Arme.SubStat" Event={this.props.Action}/>

                    <SelectGroup Title="Raffinement" isState={Object.values(window.RefineList)} name="Arme.Rafinement"/>
                    <SelectGroup Title="Niveau" isState={window.LevelList.reverse()} name="Arme.Niveau" />
                </div>

                <div className="ArteFormList BlockFrom">
                    <h4>Artéfacts</h4>
                    {ArteGroup}
                </div>      
            </div>            
                  
        </div>
        )
    }
}

export default Form;