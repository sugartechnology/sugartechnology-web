import './CreateYourProduct.css';
import { useTranslation} from "react-i18next";

export const CreateYourProduct = props =>{
    return(
        <div className='createYourProductContainer'>
            <img className='corner1' alt='' src={'./assets/img/corner1.svg'}></img>
            <img className='corner2' alt='' src={'./assets/img/corner2.svg'}></img>
            <img className='corner3' alt='' src={'./assets/img/corner3.svg'}></img>
            <img className='corner4' alt='' src={'./assets/img/corner4.svg'}></img>
            <div className='sugarModelViewer'>
                <sugar-model-viewer product-id="1104_7053" company-id="27" shadow-intensity=" 2" camera-controls
                    style={{width: "100%",height: "80vh"}} interaction-prompt="none" feature-on="hidden" joint-show>
                </sugar-model-viewer>
            </div>
            
        </div>
    );
}