import './ShoesQr.css';
import { useTranslation} from "react-i18next";

export const ShoesQr = props =>{
    const {t} = useTranslation();
    function selectShoes1(){
        var btn1 = document.getElementById("shoes1");
        var btn2 = document.getElementById("shoes2");
        var btn3 = document.getElementById("shoes3");
        var btn4 = document.getElementById("shoes4");

        btn1.style.border = "2px solid #ED401A";
        btn2.style.border = "2px solid #AAAAAA";
        btn3.style.border = "2px solid #AAAAAA";
        btn4.style.border = "2px solid #AAAAAA";
    }
    function selectShoes2(){
        var btn1 = document.getElementById("shoes1");
        var btn2 = document.getElementById("shoes2");
        var btn3 = document.getElementById("shoes3");
        var btn4 = document.getElementById("shoes4");

        btn2.style.border = "2px solid #ED401A";
        btn1.style.border = "2px solid #AAAAAA";
        btn3.style.border = "2px solid #AAAAAA";
        btn4.style.border = "2px solid #AAAAAA";
    }
    function selectShoes3(){
        var btn1 = document.getElementById("shoes1");
        var btn2 = document.getElementById("shoes2");
        var btn3 = document.getElementById("shoes3");
        var btn4 = document.getElementById("shoes4");

        btn3.style.border = "2px solid #ED401A";
        btn2.style.border = "2px solid #AAAAAA";
        btn1.style.border = "2px solid #AAAAAA";
        btn4.style.border = "2px solid #AAAAAA";
    }
    function selectShoes4(){
        var btn1 = document.getElementById("shoes1");
        var btn2 = document.getElementById("shoes2");
        var btn3 = document.getElementById("shoes3");
        var btn4 = document.getElementById("shoes4");

        btn4.style.border = "2px solid #ED401A";
        btn2.style.border = "2px solid #AAAAAA";
        btn3.style.border = "2px solid #AAAAAA";
        btn1.style.border = "2px solid #AAAAAA";
    }
    return(
        <div className='shoesQrContainer'>
            <div className='shoesQrElements'>
                <a className='shoesQrHeader'>{t("shoesQrHeader")}</a>
                <a className='shoesQrSpan'>{t("shoesQrSpan")}</a>
                <div className='shoesQrShoes'>
                    <div style={{display: "flex", gap: "30px"}}>
                        <button className='shoesButtons' id='shoes1' onClick={selectShoes1}><img alt='' src={'./assets/img/shoes1.svg'}></img></button>
                        <button className='shoesButtons' id='shoes2' onClick={selectShoes2}><img alt='' src={'./assets/img/shoes2.svg'}></img></button>
                    </div>
                    <div style={{display: "flex", gap: "30px"}}>
                        <button className='shoesButtons' id='shoes3' onClick={selectShoes3}><img alt='' src={'./assets/img/shoes3.svg'}></img></button>
                        <button className='shoesButtons' id='shoes4' onClick={selectShoes4}><img alt='' src={'./assets/img/shoes4.svg'}></img></button>
                    </div>
                </div>
            </div>
            <div className='shoesQrImg'>
                <img className='shoesQrPhone' alt='' src={'./assets/img/shoesQrImagePhone.svg'}></img>
                <img className='shoesQr' alt='' src={'./assets/img/QR.svg'} style={{position: "absolute",right: "227px", top: "200px"}}></img>
            </div>
        </div>
    );
}