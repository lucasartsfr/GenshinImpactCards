import React, {Component} from "react";

class SelectGroup extends Component{
    render(){
        const Select = (this.props.name).split('.').reduce((o,i) => o[i], window.Chara); // To DefaultValue
        const Option = this.props.isState.map((e)=>{ 
            return <option key={e} value={e}>{e}</option>
        }) 
        // const WeaponType = window.CharaList[TheState.Nom].Arme;
        // const LoadNewWeapon = Object.keys(window.WeaponListBis[window.Chara.Arme.Type]["★★★★★"])[0];

        return(
            <div className="Input">  
                <span>{this.props.Title}<b className="StarDeco">✦</b></span> 
                <select className={this.props.isClass} name={this.props.name} value={Select} onChange={(e)=>{
                    // window.Chara.Arme.Modele = LoadNewWeapon;
                }}>
                    {/* <option value={this.props.PlaceHolder}>{this.props.PlaceHolder}</option> */}
                    {Option}
                </select>
            </div>
        )
    }
}

export default SelectGroup;