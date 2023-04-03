import './BlogParagraphs.css';
import { useTranslation} from "react-i18next";

export const BlogParagraphs = props =>{
    const {t} = useTranslation();
    return(
        <div className='blogParagraphsContainer'>
            <div className='paragraph' style={{marginTop:"40px"}}>
                <a className='paragraphHeader'>{t("blogPageHeader1")}</a>
                <a className='paragraphSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum mauris tortor, mauris pulvinar euismod purus vestibulum. Ipsum facilisis gravida nulla ipsum vitae rhoncus elementum. Velit erat ornare tincidunt posuere laoreet cras in scelerisque. Est commodo quisque non urna montes, sed penatibus quis et. </a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeader2")}</a>
                <ol className='secondParagraphLists'>
                    <li className='secondParagraphList'>Facilisis gravida nulla ipsum vitae rhoncus elementum. Velit erat ornar</li>
                    <li className='secondParagraphList'>Facilisis gravida nulla ipsum vitae rhoncus elementum. Velit erat ornar</li>
                </ol>
                <img className='paragraphImage' alt='' src={'./assets/img/paragraphImage1.svg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam semper gravida facilisi donec est. Lorem odio nam nibh lobortis. Eleifend tristique mattis a venenatis, venenatis feugiat nisl. Tellus tellus ultrices malesuada arcu lacus, nulla. Ut quam morbi eu commodo rutrum tellus tristique. Id varius egestas pellentesque consectetur ac non facilisis sit. Turpis rhoncus odio id cum neque, nibh dolor turpis elit. </a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeaderBreakfast")}</a>
                <a className='paragraphSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada non pellentesque malesuada iaculis tellus mauris phasellus sed. Facilisi sed bibendum neque enim. Consectetur massa natoque fames sed sollicitudin rhoncus pellentesque. Tempus neque lacus tempor ullamcorper fermentum mattis facilisis nisi.</a>
                <img className='paragraphImage'alt='' src={'assets/img/paragraphImage2.svg'}></img>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeader4")}</a>
                <a className='paragraphSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada non pellentesque malesuada iaculis tellus mauris phasellus sed. Facilisi sed bibendum neque enim. Consectetur massa natoque fames sed sollicitudin rhoncus pellentesque. Tempus neque lacus tempor ullamcorper fermentum mattis facilisis nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada non pellentesque malesuada iaculis tellus mauris phasellus sed. Facilisi sed bibendum neque enim. Consectetur massa natoque fames sed sollicitudin rhoncus pellentesque. Tempus neque lacus tempor ullamcorper fermentum mattis facilisis nisi.</a>
            </div>
            <div className='paragraph'>
                <a className='paragraphHeader'>{t("blogPageHeaderBreakfast")}</a>
                <a className='paragraphSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada non pellentesque malesuada iaculis tellus mauris phasellus sed. Facilisi sed bibendum neque enim. Consectetur massa natoque fames sed sollicitudin rhoncus pellentesque. Tempus neque lacus tempor ullamcorper fermentum mattis facilisis nisi.</a>
            </div>
            <div className='author'>
                <div className='authorImage'>
                    <img alt='' src={'./assets/img/authorImage.svg'}></img>
                </div>
                <div className='authorSpans'>
                    <a className='authorHeader'>Irving Suarez</a>
                    <a className='authorSpan'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis porttitor urna est lacinia donec nisl viverra. Ut commodo maecenas ullamcorper nisl. Leo sapien odio iaculis morbi. </a>
                </div>
            </div>
        </div>
    );
}
