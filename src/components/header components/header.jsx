import React from 'react';
import Style from "./header.module.css"
import Logo from "./logo"
import Menuheader from "./menuheader.jsx"
import Botoesheader from "./botoesheader.jsx"


function header(props) {
 
    return ( 

      <div className={Style.header}>
        <Logo/>
        <Menuheader/>
        <Botoesheader/>     
      </div>
      

 

    );
  
}

export default header;