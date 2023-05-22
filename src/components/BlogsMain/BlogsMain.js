import './BlogsMain.css';
import { useTranslation} from "react-i18next";

export const BlogsMain = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogsMainContainer'>
            <div className='squares'>
                <div className='square' style={{height: "479px"}}>
                    <button className='squareButton'><a href='/sugarBlog1'>{t("readMore")}</a></button>
                    <a className='squareHeader' href='/sugarBlog1'>{t("squareHeader1")}Mobilya seçimi için kolay ve hızlı bir yol</a>
                    <div className='blogAuthor' style={{gap: "120px"}}>
                        <a className='squareHistory'>Feb 1, 2023</a>
                        <a className='squareHistory'>by Şükrü Erdem Şahin</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/blog1background.svg'}></img>
                </div>
                <div className='square' style={{height: "479px", width: "22%"}}>
                    <button className='squareButton'><a href='/sugarBlog2'>{t("readMore")}</a></button>
                    <a className='squareHeader' href='/sugarBlog2'>{t("squareHeader2")}Neden Ürünlerimin Kaliteli 3D modeli Olmalı</a>
                    <div className='blogAuthor' style={{gap: "60px"}}>
                        <a className='squareHistory'>Mar 23, 2023</a>
                        <a className='squareHistory'>by Abdurrahman Türkeri</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/blog2background.svg'}></img>
                </div>
                <div className='square' style={{height: "479px", width: "31%"}}>
                    <button className='squareButton'><a href='/sugarBlog3'>{t("readMore")}</a></button>
                    <a className='squareHeader' href='/sugarBlog3'>{t("squareHeader3")}AR ve 3D teknolojileri yatırımları için, Neden en doğru zamandayız?</a>
                    <div className='blogAuthor' style={{gap: "190px"}}>
                        <a className='squareHistory'>May 12, 2023</a>
                        <a className='squareHistory'>by Abdurrahman Türkeri</a>
                    </div>
                    <img className='squareImg' alt='' src={'./assets/img/blog3background.svg'}></img>
                </div>
            </div>
        </div>
    );
}