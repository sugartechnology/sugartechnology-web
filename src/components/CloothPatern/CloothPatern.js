import './CloothPatern.css';
import { useTranslation} from "react-i18next";

export const CloothPatern = props =>{
    const {t} = useTranslation();
    return(
        <div className='cloothPaternContainer'>
            <div className='cloothPaternSpans'>
                <a className='cloothPaternHeader'>Lorem ipsum dolor sit consectetur.</a>
                <a className='cloothPaternSpan'>Lorem ipsum dolor sit amet consectetur. Potenti turpis aenean tempus aliquam metus at. Ultricies vel adipiscing volutpat erat. Elit diam vulputate id ullamcorper in tellus vulputate donec. Faucibus quisque euismod sodales nunc. </a>
            </div>
            <div className='cloothPaternElements'>
                <img className='cloothPaternImage1' alt='' src={'./assets/img/cloothPaternImage1.svg'}></img>
                <img className='cloothPaternVector' alt='' src={'./assets/img/cloothPaternVector.svg'}></img>
                <img className='cloothPaternImage2' alt='' src={'./assets/img/cloothPaternImage2.svg'}></img>
            </div>
        </div>
    );
}