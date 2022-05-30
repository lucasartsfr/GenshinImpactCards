import React, {Component} from "react";
import Arte from "./Arte";
import Character from "./Character";
import Stats from "./Stats";
import Weapon from "./Weapon";
import Select from "./Select";

class Banner extends Component{

    render(){

        const isState = this.props.isState;   
        return( 
        <div onMouseOver={this.props.onHoverStat} className="Banner Hovrable" onChange={this.props.ChangeFunction} style={{backgroundImage: `url('image/background/${isState.Build}.webp')`}}>    
            
            <div className="ArteWeapon" style={{order : `${isState.Position[0]}`}}>                
                <Weapon Type={this.props.Type} Name={isState.Nom} isState={isState.Arme} onChange={this.props.ChangeFunction}/>
                <Arte Type={this.props.Type} isState={isState.Arte} />  
            </div>

            <Character CustomImage={this.props.CustomImage} UploadImageFunction={this.props.UploadImageFunction} Zoom={this.props.Zoom} ZoomFunction={this.props.ZoomFunction}  Format={this.props.Format} ChangeFunction={this.props.ChangeFunction} isState={isState}/>
            <Stats Type={this.props.Type} isState={isState} ChangeFunction={this.props.ChangeFunction} />
            
        </div>
        )
    }
}

export default Banner;