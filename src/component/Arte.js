import React, {Component} from "react";
import Artefact from "./Artefact";
import ArteSet from "./ArteSet";

// Create All Artefact (Plume etc..)
class Arte extends Component{
    render(){
        
        const ArtifactList = Object.keys(this.props.isState).map((e) => {     
            return <Artefact Type={this.props.Type} Custom={e} key={e} isState={this.props.isState[e]} />
        })

        return(
        <div className="Arte">
           {ArtifactList}
           
           <ArteSet />
        </div>
        )
    }
}

export default Arte;