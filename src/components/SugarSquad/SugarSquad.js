import './SugarSquad.css';
import { useTranslation} from "react-i18next";

export const SugarSquad = props =>{
    const {t} = useTranslation();
    return(
        <div className='SugarSquadContainer'>
            <img className='sugarSquadButtonPrev' alt='' src={'./assets/img/SugarSquadButtonPrev.svg'} style={{width:"20px",position: "relative", left: "70px"}}></img>
            <div className='sugarSquads'>
                <div className='crew'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember1Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember2Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember3Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMemberResponsive' style={{display: "none"}}>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember4Position")}</a>
                    </div>
                    </div>
                </div>
                <div className='crew'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember5Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember6Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMemberResponsive' style={{display: "none"}}>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember8Position")}</a>
                    </div>
                    </div>
                </div>
                <div className='crew' id='crewResponsive'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember9Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/member1.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdurrahman Türkeri</a>
                        <a className='memberPosition'>{t("sugarSquadMember10Position")}</a>
                    </div>
                    </div>
                </div>
            </div>
            <img className='sugarSquadButtonNext' alt='' src={'./assets/img/SugarSquadButtonNext.svg'} style={{width:"20px"}}></img>
        </div>
    );
}