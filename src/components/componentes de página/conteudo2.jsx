import React from 'react';
import Style from "./conteudo2.module.css"
import Img from "./adidassapatos.jpg"
import Img2 from "./adidassapatos2.jpg"
import Img3 from "./adidassapatos3.jpg"

function conteudo2(){
        return(
            <>
            <div className={Style.divizona}>
                <img className={Style.imagem} src={Img} alt="" />
                <img className={Style.imagem} src={Img2} alt="" />
                <img className={Style.imagem} src={Img3} alt="" />
            </div>
            <div className={Style.divizona2}>
                <span className={Style.span}>Bem-vindo à Adidas, a marca global que une performance esportiva e estilo icônico como nenhuma outra. Há mais de 70 anos, a Adidas tem liderado a indústria com sua paixão por criar produtos que elevam os padrões de desempenho, conforto e moda. Nossa história é marcada por inovações revolucionárias que transformaram a maneira como atletas e entusiastas do esporte encaram o seu potencial</span>
            </div>
            </>



        )
}
export default conteudo2