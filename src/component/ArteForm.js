import React, {Component} from "react";
import Select from "./Select";
import Input from "./Input";
import SelectGroup from "./SelectGroup";
class ArteForm extends Component{
    render(){

        const isProps = this.props.ArteType;
        return(
            <div className="ArteFactInputs">
                <h3>{isProps}</h3>                

                <div className="MainStatForm"> 
                    <SelectGroup Title="Niveau" isState={window.LevelArteList} name={`Arte.${isProps}.Level`}/>
                    <SelectGroup Title="Rareté" isState={Object.values(window.StarList)} name={`Arte.${isProps}.Star`}/>
                    <SelectGroup Title="Set" isClass="SetArteForm" isState={Object.keys(window.ArteList).sort()} name={`Arte.${isProps}.Set`} PlaceHolder="Set Artefact"/>
                    <SelectGroup Title="Main Stat" isState={Object.values(window[isProps+"Stats"])} name={`Arte.${isProps}.Main.0`} PlaceHolder="Main Stat Artefact" />     
                    <Input Text="Main Stat val" TheClass="" Type="number" PlaceHolder="Test" Min="1" Max="200"  isValue={this.props.isState.Character.Arte[isProps].Main[1]} Name={`Arte.${isProps}.Main.1`} Event={this.props.Action}/>
                </div>

                <br></br>
                <div className="SubStatForm">
                    <Select isState={Object.values(window.SubStatList)} name={`Arte.${isProps}.Sub.1.0`} PlaceHolder="Sub Stat"/>
                    <b className="StarDecoB">✦</b>
                    <input min="1" type="number" className="ValueSubStats" value={this.props.isState.Character.Arte[isProps].Sub[1][1]} onChange={()=>{}} name={`Arte.${isProps}.Sub.1.1`} />
                </div>

                <div className="SubStatForm">
                    <Select isState={Object.values(window.SubStatList)} name={`Arte.${isProps}.Sub.2.0`} PlaceHolder="Sub Stat"/>
                    <b className="StarDecoB">✦</b>
                    <input min="1" type="number" className="ValueSubStats" value={this.props.isState.Character.Arte[isProps].Sub[2][1]} onChange={()=>{}} name={`Arte.${isProps}.Sub.2.1`} />
                </div>

                <div className="SubStatForm">
                    <Select isState={Object.values(window.SubStatList)} name={`Arte.${isProps}.Sub.3.0`} PlaceHolder="Sub Stat"/>
                    <b className="StarDecoB">✦</b>
                    <input min="1" type="number" className="ValueSubStats" value={this.props.isState.Character.Arte[isProps].Sub[3][1]} onChange={()=>{}} name={`Arte.${isProps}.Sub.3.1`} />
                </div>

                <div className="SubStatForm">
                    <Select isState={Object.values(window.SubStatList)} name={`Arte.${isProps}.Sub.4.0`} PlaceHolder="Sub Stat"/>
                    <b className="StarDecoB">✦</b>
                    <input min="1" type="number" className="ValueSubStats" value={this.props.isState.Character.Arte[isProps].Sub[4][1]} onChange={()=>{}} name={`Arte.${isProps}.Sub.4.1`} />
                </div>
            </div>
        )
    }
}

export default ArteForm;