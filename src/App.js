import './App.css';
import React, { Component } from 'react';
import Banner from './component/Banner';
import Form from './component/Form';
import * as htmlToImage from 'html-to-image';

class App extends Component {

// Initial State
state = {
  Character : window.Chara, // Character Parameters
  SetArte : window.result, // Set Artefact Effet
  URLChecked : false, // If URL is Shared
  Menu : false, // Show Menu or Not
  Type : "number", // Input Type to export IMG
  Format : "png", // IMG format
  Path : "https://lucasartsfr.github.io/GenshinImpactCards/",//"https://lucasarts.fr/applications/GenshinCards/v2/", // Path for Canvas
  Zoom : 1, // Zoom Canvas
  CustomImage : "", // Importer Canvas Image
}

// OnChange for Input & Select
onChange = (e) => { 
  var change = e.target.name;     
  var max = parseInt(e.target.max);
  var min = parseInt(e.target.min);
  var value = e.target.value;    
  var ToMinMax = ["Niveau", "Arme.Niveau", "Arte.Fleur.Level", "Arte.Plume.Level","Arte.Casque.Level", "Arte.Sablier.Level", "Arte.Coupe.Level"]
  // Si la valeur est > Au Max Défini par le champs
  if(value > max && ToMinMax.includes(change)){
    value = e.target.value = max;
  }
  // Si la valeur est < Au Min Défini par le champs
  else if(value < min && ToMinMax.includes(change)){
    value = e.target.value = min;
  } 
  // Update Value From Name value (Character.Artefact.Stat...) 
  var split = change.split('.');
  var last = split.pop()
  split.reduce((o,i) => o[i], window.Chara)[last] = value;    

  // Si on change le nom Ou la rareté, on modifie l'arme affichée avec préselection du type d'arme
  if(change == "Nom"){window.Chara.Arme.Modele = Object.keys(window.WeaponListBis[window.CharaList[value].Arme][window.Chara.Arme.Star])[0]}
  if(change == "Arme.Star"){window.Chara.Arme.Modele = Object.keys(window.WeaponListBis[window.CharaList[window.Chara.Nom].Arme][window.Chara.Arme.Star])[0]}
  
  // Si on clique sur la constellation
  if(change == "ConstelImg"){window.Chara.Constellation = e.target.id;}

  // Si on change la position des éléments
  if(e.target.className == "ChangeOrder"){
    window.Chara.Position = window.Positions[value]
  }

  // Si on Change de personnage, on reset l'image custom et on redessine le Canvas
  if(e.target.classList.contains('ChangeCharacter')){
    window.Chara.CustomImage = "";
    this.DrawCanvas()
  }

  // Mise à jour du State en fin de fonction
  this.setState({Character : window.Chara})
}


// Show related Stats
onHoverStat = (e) => {
  // Statistique Hover
  const Hovered = e.target.getAttribute('data-stat');
  // Si la stats à un Attribut data-stat, on illumine les éléments avec cette classe (en ajoutant Hovered)
  if(e.target.getAttribute('data-stat')){    
    [...document.querySelectorAll('.ToHovered')].map((item)=>{ 
      item.classList.contains(Hovered) ? item.classList.add('Hovered') : item.classList.remove('Hovered')                
    })    
  }
  // Si non on supprime la classe Hovered
  else{
    [...document.querySelectorAll('.ToHovered')].map((item)=>{ 
      item.classList.remove("Hovered")               
    })   
  }
}

// Convert Input Number to text for export
TextSize = (e) =>{
  var Inputs = document.querySelectorAll('.Banner input[type=text]:not(:placeholder-shown), .Banner input[type=number]'); // Select All Input
  this.setState({Type : "text"}) // Set Input as Text (FixFirefox)
  Array.from(Inputs).map((x) => { x.size = x.value.length}); // Define Size Of Input Text    
}

// Check if URL is SET
componentDidMount = () =>{
  if(window.location.href.split('?=')[1] && !this.state.URLChecked){
    const URL = window.location.href.split('/?=')[1]       
    console.log(URL)
    window.Chara = JSON.parse(decodeURIComponent((window.atob(URL))));
    this.setState({Character : window.Chara, URLChecked: true})            
  }         
  setTimeout(()=>{this.DrawCanvas(); console.log('Création du Canvas via URL')},1000) // Redraw Canvas  On Load and If URL SET
}

// Upload File Config
Upload = (e) => {
  var fileToLoad = document.getElementById("avatar").files[0];
  var fileReader = new FileReader();
  fileReader.onload = (fileLoadedEvent) => {
      window.Chara = JSON.parse(fileLoadedEvent.target.result);   
      this.setState({Character : window.Chara})    
      setTimeout(()=>{this.DrawCanvas(); console.log('Chargement de config')},10) // Redraw Canvas
  };
  fileReader.readAsText(fileToLoad, "UTF-8");
}

// Save images as PNG
ImageSave = (e) => {
  // PNG
  this.setState({Menu : false})
  this.TextSize()  
  document.querySelector('.Banner').classList.remove('Hovrable');
  setTimeout(()=>{
    htmlToImage.toPng(document.querySelector('.Banner'), {pixelRatio: 1.3})
    .then((dataUrl) => {      
      console.log(dataUrl)  
        var a = document.createElement('a');
        a.href = dataUrl;
        a.download = window.Chara.Nom+".png";
        a.click();     
        this.setState({Type : "number"})      
        document.querySelector('.Banner').classList.add('Hovrable')          
    })
  },600)
  
}

// Save Image as SVG
ImageSaveSVG = (e) => {
  // PNG
  this.setState({Menu : false})
  this.TextSize()  
  const RatioVal = 1.3;
  document.querySelector('.Banner').classList.remove('Hovrable');
  var canvas = document.createElement("canvas")
  var ctx = canvas.getContext('2d')
  var img = new Image; 

  setTimeout(()=>{
    htmlToImage.toSvg(document.querySelector('.Banner'), {pixelRatio: RatioVal}).then((dataUrl) => {            
      canvas.width = 1300*RatioVal;
      canvas.height = 690*RatioVal;            
      img.src = dataUrl;     

      img.onload = () => {        
        ctx.drawImage(img,0,0,canvas.width, canvas.height)  
        var Export = canvas.toDataURL("image/png");   
        document.body.append(Export)
        var a = document.createElement('a');   
        a.href = Export;
        a.download = window.Chara.Nom+".png";
        a.style.display = "none";
        document.body.appendChild(a);  
        a.click();              
      };                  
    })
  },600)  
}

// Share Hash URL
ShareUrl = (e) =>{
  window.Chara.CustomImage = ""
  var x = btoa(encodeURIComponent(JSON.stringify(window.Chara)))
  navigator.clipboard.writeText(window.location.href.split('/?=')[0]+"/?="+x)
}

// Save Config (Export .txt)
HandleSave = (e) => {
    var bb = new Blob([JSON.stringify(window.Chara)], { type: 'text/plain' });
    var a = document.createElement('a');
    a.download = window.Chara.Nom+'.txt';
    a.href = window.URL.createObjectURL(bb);
    a.click();
}

// Show Left Menu (Deprec)
MenuShow = (e) => {
    this.setState(prevState => ({
      Menu: !prevState.Menu
    }));
}

// Zoom On Canvas
ZoomCanvas = (Zoom) => {
  this.setState(prevState => {
    if(prevState.Zoom < 0.3){return {Zoom: 0.3}}
    else{return {Zoom: prevState.Zoom + Zoom}}
 })
}

// Create and Update Canvas
DrawCanvas = (CustomImageUploaded) =>{
  // Check if custom image is uploaded
  const ImgSRC = (window.Chara.CustomImage == "") ? process.env.PUBLIC_URL+"/image/character/"+this.state.Character.Nom+"/"+this.state.Character.Nom+"."+this.state.Format : window.Chara.CustomImage
  this.setState({Zoom : 1})
  // Parent of Canvas
  const pWidth = document.querySelector('.Character').clientWidth
  const pHeight = document.querySelector('.Character').clientHeight
  // Canvas
  const context = document.querySelector('.CanvasImage').getContext('2d'); 
  context.canvas.height = pHeight ; // Before Set Width (Fix Bug)
  context.canvas.width = pWidth ;  
  const cWidth = context.canvas.width;
  const cHeight = context.canvas.height; 
      
  // Image
  const image = new Image();
  image.src = ImgSRC;
  
    image.onload = () => {
      const iWidth = image.width;
      const iHeight = image.height;
      const iRatio = iWidth/(iHeight/cHeight);   
      // Reset Canvas Image Position for News             
      context.canvas.setAttribute('data-x', (cWidth - iRatio)/2);
      context.canvas.setAttribute('data-y', 0);
      context.canvas.setAttribute('last-x', (cWidth - iRatio)/2);
      context.canvas.setAttribute('last-y', 0);
      context.clearRect(0, 0, cWidth, cHeight);
      context.drawImage(image, (cWidth - iRatio)/2, 0, iRatio, cHeight);
    };   
}

// Upload Custom Image
UploadImage = () =>{
  var fileToLoad = document.getElementById("ImgUpload").files[0];
  var fileReader = new FileReader();
  console.log('Image Uploaded')
  fileReader.onload = (fileLoadedEvent) => {      
      window.Chara.CustomImage = fileLoadedEvent.target.result;
      //this.setState({Character : window.Chara})
      setTimeout(()=>{this.DrawCanvas()},10) // Redraw Canvas
  };
  fileReader.readAsDataURL(fileToLoad)  
}

  render(){

    return (
      <div className={`App Menu${this.state.Menu}`}>
        <Form Action={this.onChange} Menu={this.MenuShow} onUpload={this.Upload} isState={this.state} />
        <Banner 
          CustomImage={this.state.Character.CustomImage}
          UploadImageFunction={this.UploadImage}
          Zoom={this.state.Zoom}
          ZoomFunction={this.ZoomCanvas}
          onHoverStat={this.onHoverStat}
          Format={this.state.Format}
          Type={this.state.Type}
          isState={this.state.Character}
          ChangeFunction={this.onChange}/>

        <div className="ButtonForm">            
            <a onClick={this.ImageSave} className="SaveButton">Sauvegarder Image</a>  
            {/* <a onClick={this.ImageSaveSVG} className="SaveButton">Sauvegarder SVG</a>    */}
            <a onClick={this.ShareUrl} className="SaveButton">Partager URL</a>   
            <a onClick={this.HandleSave} className="SaveButton">Exporter Config</a>
            <label className="SaveButton">
                <input onChange={this.Upload} type="file" id="avatar" name="avatar" accept="text/txt"></input>
                Importer Config
            </label>  
        </div>
      </div>
    );
  }
 
}

export default App;
