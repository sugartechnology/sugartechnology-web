import './BlogGraphQL.css';
import { useTranslation} from "react-i18next";

export const BlogGraphQL2 = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogGraphQLContainer'>
            <img className='blogGraphBackground' alt='' src={'./assets/img/blogGraphBackground.svg'}></img>
            <div className='blogGraphSpans'>
                <a className='blogGraphHeader'>{t("")}Neden Ürünlerimin Kaliteli 3D modeli Olmalı</a>
                <a className='blogGraphSpan'>{t("blogGraphSpan")}Uzun zamandır - yaklaşık 4 yıldır - müşterilerimize Arttırılmış gerçeklik VR ve Render, katalog alanlarında müşterilerimize hizmet veriyoruz. Bu hizmeti verir iken bazen sözleşmelerin kaderini belirleyen bir kısıma geliyoruz.</a>
            </div>
        </div>
    );
}