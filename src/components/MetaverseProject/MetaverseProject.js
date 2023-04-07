import './MetaverseProject.css';
import { useTranslation} from "react-i18next";

export const MetaverseProject = props =>{
    const {t} = useTranslation();
    return(
        <div className='MetaverseProjectContainer'>
            <img className='metaverseProjectBackground' alt='' src={'./assets/img/metaverseProjectBackground.svg'} style={{width: "1440px"}}></img>
            <div className='metaverseProjectElements'>
                <a className='metaverseProjectHeader'>{t("metaverseProject")}</a>
                <a className='metaverseProjectSpan'>{t("metaverseProjectSpan")}</a>
                <img className='metaverseProjectElement' alt='' src={'./assets/img/metaverseProjectElement.svg'}></img>
            </div>
        </div>
    );
}
