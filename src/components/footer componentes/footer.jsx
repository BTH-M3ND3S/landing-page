import React from 'react';
import Style from "./stylefooter.module.css"
import Img1 from "./insta.jpg"
import Img2 from "./whatsapp.jpg"
import Img3 from "./twitter.jpg"



function footer(){
    return(
        <>
            <div className={Style.divizona}>
                <div className={Style.divinsta}>
                    <img className={Style.img1} src={Img1} alt="" />
                    <span className={Style.span1}>@blabla</span>
                </div>
                <div className={Style.divwhatsapp}>
                    <img className={Style.img2} src={Img2} alt="" />
                    <span className={Style.span2}>14 99999-9999</span>
                </div>
                <div className={Style.divtwitter}>
                    <img className={Style.img3} src={Img3} alt="" />
                    <span className={Style.span3}>@bleble</span>
                </div>
            </div>  
        </>
    );
}
export default footer;