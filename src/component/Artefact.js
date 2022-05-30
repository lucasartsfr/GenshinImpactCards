import React, {Component} from "react";
import ArteSubStats from "./ArteSubStats";
import Select from "./Select";

// Create Artefact Block (Main stat, Sub...) for each type
class Artefact extends Component{
    render(){
        // ShortCut State
        const isState = this.props.isState; 
        const NameArte = this.props.Custom;
        // Decimal Mainstats
        var isMainDecimal = (isState.Main[1].includes(".") || isState.Main[1].includes(",") ) ? "%" : "";
        // Create SubState Lis
        const SubStaList = Object.keys(isState.Sub).map((e) => {     
            return <ArteSubStats Type={this.props.Type} NameArte={NameArte} key={e} SubTitle={isState.Sub[e][0]} isState={isState} SubStateSelect={e}/>
        })        
        return(
            <div className={`ArteBlock ${this.props.Custom}`} >
                <Select isClass="ArtefactSelectSet" isState={Object.keys(window.ArteList).sort()} name={`Arte.${NameArte}.Set`} PlaceHolder="Set Artefact"/>

                <div className="ArteSpec" style={{backgroundImage: `url("image/artefact/${isState.Set}/${this.props.Custom}.webp")`}}>
                    <div className="BgBlack"></div>

                    <Select isClass={`ArtefactSelectMain ToHovered ${window.Association[isState.Main[0]]} `} isState={Object.values(window[NameArte+"Stats"])} name={`Arte.${NameArte}.Main.0`} PlaceHolder="Main Stat Artefact" />     

                    <span className="ArteMainStat"><input type={this.props.Type} className="ArtefactInputMain" min="1" max="7000" value={isState.Main[1]} name={`Arte.${NameArte}.Main.1`} onChange={()=>{}}/>{isMainDecimal}</span>

                    <div className="ArteStarLevel">
                        <Select isClass="ArtefactSelectStar" isState={Object.values(window.StarList)} name={`Arte.${NameArte}.Star`} PlaceHolder="Rareté Artefact" />    
                        <Select isClass="ArtefactSelectLevel" isState={window.LevelArteList} name={`Arte.${NameArte}.Level`} PlaceHolder="Niveau Artefact" />     
                    </div>
                </div>
                
                <div className="ArteSubStats">
                    {SubStaList}
                </div>
            </div>
        )
    }
}

export default Artefact;