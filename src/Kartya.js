import React from "react";
import './Kartya.css';

class Kartya extends React.Component {
  constructor(props){
    super();
    this.state={
      aktKepIndex:0
    }
  }
  kattintasKezelo=()=>{
    console.log(this.props.id);
    this.props.aktualisKep(this.props.id);
  }
  
  render(){

    return (
      <div className="Kep" onClick={this.kattintasKezelo}>
        <h1>{this.props.cim}</h1>
        <h2>{this.props.szerzo}</h2>
        <img src={this.props.kep} alt={this.props.cim}></img>
      </div>
      );
    }
  }
   
  export default Kartya;