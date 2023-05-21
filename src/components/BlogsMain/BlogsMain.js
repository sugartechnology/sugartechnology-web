import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div className='squares'>
                <div className='square' style={{height: "479px"}}>
                    <button className='squareButton'><a href='/sugarBlog1'>{t("readMore")}</a></button>
                    <a className='squareHeader'>{t("squareHeader1")}Mobilya seçimi için kolay ve hızlı bir yol</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>Feb 1, 2023</a>
                        <a className='squareHistory'>by Şükrü Erdem Şahin</a>
                    </div>
                    <img className='squareImg' alt='' src={'https://sugar.mncdn.com/sugartechwebsite/assets/img/sugar/renders/render_top_view_rapid_render.jpg'}></img>
                </div>
                <div className='square' style={{height: "479px"}}>
                    <button className='squareButton'><a href='/sugarBlog2'>{t("readMore")}</a></button>
                    <a className='squareHeader' style={{color: "black"}}>{t("squareHeader2")}Neden Ürünlerimin Kaliteli 3D modeli Olmalı</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory' style={{color: "black"}}>Mar 23, 2023</a>
                        <a className='squareHistory' style={{color: "black"}}>by Abdurrahman Türkeri</a>
                    </div>
                    <img className='squareImg' alt='' src={'https://sugar.mncdn.com/sugartechwebsite/assets/img/sugar/urun_dijital_ikizleri_nb.png'}></img>
                </div>
                <div className='square' style={{height: "479px"}}>
                    <button className='squareButton'><a href='/sugarBlog3'>{t("readMore")}</a></button>
                    <a className='squareHeader'>{t("squareHeader3")}AR ve 3D teknolojileri yatırımları için, Neden en doğru zamandayız?</a>
                    <div style={{display: "flex", zIndex: 1, flexDirection: "row", justifyContent: "space-between"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Abdurrahman Türkeri</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/Augmented_reality_illustration_basic.png'}></img>
                </div>
            </div>


        </div>
    );
}