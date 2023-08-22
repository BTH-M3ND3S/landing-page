import React from 'react';
import Style from "./botoesheader.module.css"

function botoesheader() {
 
    return ( 
      <div className={Style.botoesheader}>
        <button className={Style.botaoentrar}>Entrar</button>
        <button className={Style.botaocadastrar}>Cadastrar</button>
      </div>
    );
  
}
export default botoesheader;