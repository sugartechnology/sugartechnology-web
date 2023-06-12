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
                <iframe className='metaverseProjectElement' style={{width: "50%", height: "61%"}} width="560" height="315" src="https://www.youtube.com/embed/OS8WDifCz54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}