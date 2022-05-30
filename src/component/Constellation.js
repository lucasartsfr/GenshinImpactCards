import React, {Component} from "react";

class Constellation extends Component{

    render(){
        // Create Constellation
        const isState = this.props.isState;
        const Name = isState.Nom;
        const Contstellation = isState.Constellation;
        
        const Constel = [...Array(6)].map((e, i) => {
            let CurrentC = (i < parseInt((Contstellation).split('C')[1])) ? "Has" : "NotHas";
            return <img key={i} onClick={this.props.ChangeFunction} id={`C${(i+1)}`} name="ConstelImg" className={CurrentC} alt={`Constellation ${(i+1)}`} src={`image/character/${Name}/c${(i+1)}.webp`} />;
        })

        return(
        <div className="Constellation">
            <img id="C0" onClick={this.props.ChangeFunction} name="ConstelImg" className="Has ConstellZero" alt="Constellation 0" src="image/background/c0.png"></img>
            {Constel}
        </div>
        )
    }
}

export default Constellation;