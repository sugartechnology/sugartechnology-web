import './SugarBrands.css';
import { useTranslation} from "react-i18next";

export const SugarBrands = props =>{
    const {t} = useTranslation();
    return(
        <div className='sugarBrandsContainer'>
            <div className='sugarBrandsHeaders'>
                <a className='sugarBrandsHeader'>{t("sugarBrandsHeader")}</a>
            </div>
            <div className='sugarBrands'>
                <div className='sugarBrand' id='brand1'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/istikbalHome.webp'}></img>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/istikbalHomeLogo.svg'}></img>
                    <a className='sugarBrandSpan'>{t("sugarBrand1Span")}</a>
                    <a className='sugarBrandButton'>Read in blog</a>
                    <img className='sugarBrandShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                </div>
                
                <div className='sugarBrand' id='brand2'>    
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/tepehomeHome.webp'}></img>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/tepehomeHomeLogo.svg'}></img>
                    <a className='sugarBrandSpan'>{t("sugarBrand2Span")}</a>
                    <a className='sugarBrandButton'>Read in blog</a>
                    <img className='sugarBrandShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                </div>
                
                <div className='sugarBrand' id='brand3'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/bellonaHome.webp'}></img>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/bellonaHomeLogo.svg'}></img>
                    <a className='sugarBrandSpan'>{t("sugarBrand3Span")}</a>
                    <a className='sugarBrandButton'>Read in blog</a>
                    <img className='sugarBrandShadow' alt='' src={'./assets/img/arDetailsShadow.svg'}></img>
                </div>
                
            </div>
        </div>
    );
}