import React from 'react';
import Img1 from "./sapato1.jpg"
import Img2 from "./sapato2.jpg"
import Img3 from "./sapato3.jpg"
import Style from "./conteudo1.module.css"

function conteudo1(){
    return(
        <>
         <div className={Style.divizona}>
            <div className={Style.divsemfotos}>
                <h1 className={Style.h1}>Adquira Ja o seu tênis</h1>
                <span className={Style.span}>temos tênis de todos os tamanhos e preços</span><br /><br />
                <button className={Style.botao}>Compre Já</button>
            </div>
            <div className={Style.divcomfotos}>
                <img className={Style.Imgs} src={Img1} alt="" />
                <img className={Style.Imgs} src={Img2} alt="" />
                <img className={Style.Imgs} src={Img3} alt="" />
            </div>
         </div>
        </>
    );
}
export default conteudo1;