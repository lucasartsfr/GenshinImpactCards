import React, {Component} from "react";
import Aptitude from "./Aptitude";
import Constellation from "./Constellation";
import Select from "./Select";

class Character extends Component{    

    canvas = React.createRef();
    canvasParent = React.createRef();
    state = {
      MouseDown : false,
      ImageSrc : null,
      MouseX : 0,
      Zoom : 1,
      MouseY : 0,
    }
    
    // When mouse Up
    MouseUp = (e) =>{
      this.canvas.current.setAttribute('last-x', parseInt((this.canvas.current.getAttribute('last-x') - this.canvas.current.getAttribute('data-x'))));
      this.canvas.current.setAttribute('last-y', parseInt((this.canvas.current.getAttribute('last-y') - this.canvas.current.getAttribute('data-y'))));      
      this.setState({MouseDown : false})      
    }
    // Mouse Down
    MouseDown = (e) =>{this.setState({MouseDown : true, MouseX : e.pageX, MouseY : e.pageY})}
    // Move Canvas on MouseDown or Scroll
    MoveCanvas = (e) => {
        // Zoom 
        const Zoom = -1*(e.deltaY/100)*0.05;
        // Get Context
        const context = this.canvas.current.getContext('2d');         
        const cWidth = context.canvas.width;
        const cHeight = context.canvas.height;
        // Movement start at 0
        var MoveX = this.state.MouseX - e.pageX;
        var MoveY = this.state.MouseY - e.pageY;
        const LastX = parseInt(this.canvas.current.getAttribute('last-x')) || 0
        const LastY = parseInt(this.canvas.current.getAttribute('last-y')) || 0        
        if(e.type == "wheel" || this.state.MouseDown){
            if(e.type == "wheel"){        
              this.props.ZoomFunction(Zoom)    
              MoveX = MoveY = 0;
            } 
            const image = new Image();
            const IsCustom = (this.props.CustomImage !== "") ? this.props.CustomImage : process.env.PUBLIC_URL+"/image/character/"+this.props.isState.Nom+"/"+this.props.isState.Nom+"."+this.props.Format; 
            image.src = IsCustom;                        
            image.onload = () => {                 
              const iWidth = image.width;
              const iHeight = image.height;
              const iRatio = iWidth/(iHeight/cHeight);    
              context.clearRect(0, 0, cWidth, cHeight);
              context.drawImage(image, (LastX - MoveX), (LastY-MoveY), iRatio*this.props.Zoom, cHeight*this.props.Zoom);
              this.canvas.current.setAttribute('data-x', MoveX);
              this.canvas.current.setAttribute('data-y', MoveY);                                          
            };  
        }
    }
   
    render(){
      return(
        <div className="Character" ref={this.canvasParent} style={{order : `${this.props.isState.Position[1]}`}}>
          {/* style={{backgroundImage: `url('image/character/${this.props.isState.Nom}/${this.props.isState.Nom}.webp')`}} */}
          {/* style={{transform : `scale(${this.props.Zoom})`}} */}          
          <div className="InsideForm">
            <Select isClass="ChangeOrder" isState={Object.keys(window.Positions).sort()} name="Position.ArteWeapon"/>  
            <label className="UploadImage">
                <input onChange={this.props.UploadImageFunction} type="file" id="ImgUpload" name="avatar" accept="image/*"></input>
                Importer Image
            </label>   
          </div>

          <input value={this.props.isState.Message} type="text" name="Message" onChange={()=>{}} className="YourMessage" placeholder="Message personnalisé"></input>        
          <canvas ref={this.canvas} className="CanvasImage" onWheel={this.MoveCanvas} onMouseMove={this.MoveCanvas} onMouseUp={this.MouseUp} onMouseDown={this.MouseDown}></canvas>
          <Constellation ChangeFunction={this.props.ChangeFunction} isState={this.props.isState} />
          <Aptitude Name={this.props.isState.Nom} AptitudeProps={this.props.isState.Aptitude} />
        </div>
        )
    }
}

export default Character;