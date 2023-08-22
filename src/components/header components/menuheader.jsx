import React from 'react';
import Style from "./menuheader.module.css"

function menuheader() {
 
    return ( 
      <div className={Style.menuheader}>
        <a href="#">Home</a>
        <a href="#">Homem</a>
        <a href="#">Mulher</a>
        <a href="#">Infantil</a>
      </div>
    );
  
}

export default menuheader;