import React from "react";
import "./EspressoMachine.scss";

const EspressoMachine = ({color = '#ff0000', size='200px'}) => (

<div className="espresso-machine" 
style={{'--metal': `${color}`, '--container-width': `${size}`, '--container-height': `${size}`}}>
  <div className="cups">
  </div>
  <div className="metal-grate">
    
  </div>
  <div className="cup cup-1"></div>
  <div className="cup cup-2"></div>
  <div className="cup cup-3"></div>
  <div className="top">
    <div className="logo"></div>
  </div>
  <div className="middle"></div>
  <div className="bottom"></div>
  <div className="leg left"></div>
  <div className="leg right"></div>
</div>
);

export default EspressoMachine;
