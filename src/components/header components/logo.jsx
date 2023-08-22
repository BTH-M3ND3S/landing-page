import React from 'react';
import Style from "./logo.module.css"
import Img from "./logo.png"

function logo() {
 
    return ( 
      <div className={Style.logo}>
        <img src={Img} alt="" />
      </div>
    );
  
}

export default logo;