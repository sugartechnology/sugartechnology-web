import './MetaverseProject.css';
import { useTranslation} from "react-i18next";

export const MetaverseProject = props =>{
    const {t} = useTranslation();
    return(
        <div className='MetaverseProjectContainer'>
            <img className='metaverseProjectBackground' alt='' src={'./assets/img/metaverseProjectBackground.webp'} style={{width: "100%"}}></img>
            
            <div className='metaverseProjectElements'>
                <a className='metaverseProjectHeader'>{t("metaverseProject")}</a>
                <a className='metaverseProjectSpan'>{t("metaverseProjectSpan")}</a>
                <iframe className='metaverseProjectElement'  src="https://www.youtube.com/embed/OS8WDifCz54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}