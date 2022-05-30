import React, {Component} from "react";
import StatsContainer from "./StatsContainer";
import Select from "./Select";

class Stats extends Component{  
    render(){

        // Container des Statistiques
        const Statslist = Object.keys(this.props.isState.Statistique).map((e) => { 
            return <StatsContainer onHoverStat={this.props.onHoverStat} Type={this.props.Type} Build={this.props.isState.Build} Custom={e} key={e} Action={this.props.ChangeFunction} isState={this.props.isState.Statistique[e]} />   
        })
        // Check Elevation from Lvl
        var ElevationNb = 0;
        const CheckLevel = window.ElevationList.map((e) => { var Stars = (this.props.isState.Niveau >= e) && ElevationNb++});
        return(
        <div className="Stats" onChange={this.props.ChangeFunction} style={{order : `${this.props.isState.Position[2]}`}}>
            <div className="StatsInfo">
                <Select isClass="SelectNom ChangeCharacter" isState={Object.keys(window.CharaList).sort()} name="Nom"/>
                <span className="Lvl"><b>{"✦ ".repeat(ElevationNb)}</b>{"✦ ".repeat((6-ElevationNb))}</span>
                <h3 className="Niveau">Niv. <Select isClass="SelectNiveau" isState={window.LevelList.reverse()} name="Niveau"/>/90</h3>
            </div>          
            {Statslist}
        </div>
        )
    }
}

export default Stats;