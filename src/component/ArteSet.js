import React, {Component} from "react";


class ArteSet extends Component{
    render(){

        // Get Arte List Name [Fleur, Plume...]
        window.result = {}
        const ArteNameList = Object.keys(window.Chara.Arte).map((e)=>{
            let isSet = window.Chara.Arte[e].Set;
            window.result[isSet] ? window.result[isSet] = window.result[isSet] + 1 : window.result[isSet] = 1;
        })
        // Count Arte Set [2x VV, 2xToM ...] et display Bonus set
        const ArteSet = Object.keys(window.result).map((e, index)=>{
            let Nb = Object.values(window.result)[index]
            // Bonus Set
            var More;
            var Second;
            if(Nb >= 2 && Nb < 4){ More = window.ArteList[e][2]}
            else if (Nb >= 4){ More = window.ArteList[e][2]; Second = window.ArteList[e][4]}
            // Not Show Alone Arte
            var ToShow = (Nb >= 2) ? <div className="ArteSetInfos" key={e}><span className="ArteName">{Nb}x {e}</span><span className="ArteBonus">{More}<br/>{Second}</span></div> : ""
            return ToShow
        });        

        return(
            <div className="ArteSet">
                {ArteSet}
            </div>
        )
    }
}

export default ArteSet;