import './WhatsNew.css';
import { useTranslation} from "react-i18next";

export const WhatsNew = props =>{
    const {t} = useTranslation();
    return(
        <div className='WhatsNewContainer'>
            <div className='whatsNewSpans'>
                <a className='whatsNewHeader'>{t("whatsNew")}</a>
                <a className='whatsNewSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.</a>
            </div>
            <div className='whatsNewElements'>
                <img className='whatsNewElement' alt='' src={'./assets/img/whatsNewElement1.svg'}></img>
                
            </div>
        </div>
    );
}