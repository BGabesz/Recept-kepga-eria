
import React from "react";
import Kartya from "./Kartya";
/* const konyv={
    cim:"A hegyi bolha",
    szerzo:"Bogdan Gabor"
  } */
  const kepek=[
    {
    kep:"j1chicago.jfif",
    cim:"Jordan 1 UNC",
    leiras:"Jordan 1 UNC leiras"},

    {kep:"j1unc.jfif",
    cim:"Jordan 1 Chicago",
    leiras:"Jordan 1 Chicago leiras"},

    {kep:"j11concord.jfif",
    cim:"Jordan 11 Concord",
    leiras:"Jordan 11 Concord leiras"},

]

class Kartyak extends React.Component {
  
  aktualisKep=(id)=>{
    console.log("galériában: "+id);
    this.setState({
      aktKepIndex:id
    })
  }
  kattint=(merre)=>{
    console.log(merre);
  }

  balra=()=>{
    console.log(this.state.aktKepIndex);
    let leptet= this.state.aktKepIndex-1;
    if(leptet<0){
      leptet=kepek.length
    }
    this.setState({
      aktKepIndex:leptet
    })
  }
  render(){
    return (
        <React.Fragment>
        <div className="nagyKep">
          <button type="balra" onClick={this.balra}>Balra</button>
          <img src={kepek[0].kep} alt={kepek[0].cim}></img>
          <button type="jobbra" /* onClick={} */>Jobbra</button>
        </div>
            {
              kepek.map((elem,index)=>{
                
                    return <Kartya key={index} aktualisKep={this.aktualisKep} id={index} cim={elem.cim} kep={elem.kep}  leiras={elem.leiras}></Kartya>
                })
            }
            </React.Fragment>
            );
        }
    }
    
    /* <Konyv cim="Tralala2" szerzo="Egy ember2"></Konyv>
    <Konyv cim="Tralala3" szerzo="Egy ember3"></Konyv> */
    /* <img src={} alt={this.props.cim}></img> */
  export default Kartyak;