import './ArDetails.css';
import { useTranslation} from "react-i18next";

export const TableDetails = props =>{
    const {t} = useTranslation();
    return(
        <div className='arDetailsContainer'>
            <div className='arDetailsSpans'>
                <a className='arDetailsHeader'>{t("ArDetails")}</a>
                <a className='arDetailsSpan'>{t("arDetailsSpan")}</a>
                <div className='arDetailsModelViewer'>
                    <sugar-model-viewer class="modelViewer" id="sugar" style={{ width:"100%" ,height: "100%", background: "white",margin: "auto" ,display: "block" ,marginBottom: "60px" ,paddingBottom: "60px"}} ar="" shadow-intensity="1" show-model-group
                        ar-scale="fixed" show-option="" camera-controls="" ar-status="not-presenting" camera-down-lock="true"  camera-orbit="15deg 55deg auto" template="advanced" showDimension="true"
                        product_id="41926" company_id="21" exposure="1"  joint-show="" selectColor="#ED401A" qr="">
                    </sugar-model-viewer>
                    <img className='modelViewerShadow' alt='' src={'./assets/img/arDetailsShadow.svg'} style={{opacity: "0.5", position: "absolute", width: "76%", zIndex: "-1"}}></img>
                </div>
            </div>
            <img className='arDetailsBubble' alt='' src={'./assets/img/ArDetailsImg2.svg'} style={{position: "absolute", bottom: "0px", left: "0px", zIndex: "-1"}}></img>
        </div>
    );
}