import './MetaverseProject.css';
import { useTranslation} from "react-i18next";

export const MetaverseProject = props =>{
    const {t} = useTranslation();
    return(
        <div className='MetaverseProjectContainer'>
            <img className='metaverseProjectBackground' alt='' src={'./assets/img/metaverseProjectBackground.svg'} style={{width: "100%"}}></img>
            
            <div className='metaverseProjectElements'>
                <a className='metaverseProjectHeader'>{t("metaverseProject")}</a>
                <a className='metaverseProjectSpan'>{t("metaverseProjectSpan")}Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. Velit mattis accumsan aenean dignissim fames nisl sed pulvinar. Nullam ut tortor in ac semper enim cursus quisque. Amet felis at consectetur faucibus. At nisl dictum in eu quisque eget. Integer lacinia non mattis diam ornare. Tempor leo erat risus faucibus nulla pharetra egestas ultrices.</a>
                <img className='metaverseProjectElement' alt='' src={'./assets/img/metaverseProjectElement.svg'}></img>
            </div>
        </div>
    );
}
