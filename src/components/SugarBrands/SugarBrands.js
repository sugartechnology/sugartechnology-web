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
                <div className='sugarBrand'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/istikbalHome.svg'}></img>
                    <a className='sugarBrandSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. </a>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/istikbalHomeLogo.svg'}></img>
                </div>
                <div className='sugarBrand'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/tepehomeHome.svg'}></img>
                    <a className='sugarBrandSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. </a>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/tepehomeHomeLogo.svg'}></img></div>
                <div className='sugarBrand'>
                    <img className='sugarBrandHomeImg' alt='' src={'./assets/img/bellonaHome.svg'}></img>
                    <a className='sugarBrandSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. </a>
                    <img className='sugarBrandLogo' alt='' src={'./assets/img/bellonaHomeLogo.svg'}></img>
                </div>
            </div>
            <div className='sugarBrandsPageButtons'>
                <img alt='' src={'./assets/img/commentPageButtons.svg'}></img>
            </div>
        </div>
    );
}