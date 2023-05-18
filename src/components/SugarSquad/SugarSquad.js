import './SugarSquad.css';
import { useTranslation} from "react-i18next";

export const SugarSquad = props =>{
    const {t} = useTranslation();
    function crews1(){
        let crews1 = document.getElementById('crew1');
        let crewResponsive = document.getElementById("crewResponsive");
        let squad1Button = document.getElementById("squad1Button");
        let squad2Button = document.getElementById("squad2Button");
        if(crews1.style.display === "none"){
            crews1.style.display = "flex";
            crewResponsive.style.display = "none"
            squad1Button.style.background = "#ED401A";
            squad2Button.style.background = "#CCCCCC";
        }
        else{
            crews1.style.display = "none";
        }
    }
    function crewsResponsive(){
        let crews1 = document.getElementById('crew1');
        let crewResponsive = document.getElementById("crewResponsive");
        let squad1Button = document.getElementById("squad1Button");
        let squad2Button = document.getElementById("squad2Button");
        if(crewResponsive.style.display === "none"){
            crewResponsive.style.display = "flex";
            crews1.style.display = "none";
            squad2Button.style.background = "#ED401A";
            squad1Button.style.background = "#CCCCCC";
        }
        else{
            crewResponsive.style.display = "none";
        }
    }
    return(
        <div className='SugarSquadContainer'>
            <div className='sugarSquadsDeskop'>
                <div className='crew' id='crew1'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/almiraPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Elmira Ghoreishi</a>
                        <a className='memberPosition'>{t("sugarSquadMember1Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/aliPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Ali Rıza Yalçın</a>
                        <a className='memberPosition'>{t("sugarSquadMember5Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/selcukPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Selçuk Taşlı</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/eyadPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Muhammad Eyad</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                </div>
                <div className='crew' id='crew1'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/kubraPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Kübra Yıldız</a>
                        <a className='memberPosition'>{t("sugarSquadMember2Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/tugrulPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Tuğrul Subekçi</a>
                        <a className='memberPosition'>{t("sugarSquadMember6Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/erenPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Muhammed Eren Baş</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/hakkiPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Hakkı Altan Cebeci</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                </div>
                <div className='crew' id='crewResponsive'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/erdemPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Şükrü Erdem Şahin</a>
                        <a className='memberPosition'>{t("sugarSquadMember3Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/fatihPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Fatih Özdemir</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/utkuPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Utku Sert</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                </div>
                <div className='crew' id='crewResponsive'>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/sametPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Abdülsamet Sarıkoç</a>
                        <a className='memberPosition'>{t("sugarSquadMember4Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/ibrahimPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>İbrahim Aktaş</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                    <div className='SugarSquadMember'>
                    <img alt='' src={'./assets/img/nisaPp.svg'}></img>
                    <div className='memberInformation'>
                        <a className='memberName'>Nisa Nur Çakıcı</a>
                        <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className='sugarSquadsMobile'>
                <div className='mobileCrewOne'>
                    <div className='crew' id='crew1'>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/almiraPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Elmira Ghoreishi</a>
                            <a className='memberPosition'>{t("sugarSquadMember1Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/aliPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Ali Rıza Yalçın</a>
                            <a className='memberPosition'>{t("sugarSquadMember5Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/selcukPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Selçuk Taşlı</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/eyadPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Muhammad Eyad</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                    </div>
                    <div className='crew' id='crew1'>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/kubraPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Kübra Yıldız</a>
                            <a className='memberPosition'>{t("sugarSquadMember2Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/tugrulPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Tuğrul Subekçi</a>
                            <a className='memberPosition'>{t("sugarSquadMember6Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/erenPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Muhammed Eren Baş</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/hakkiPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Hakkı Altan Cebeci</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='mobileCrewOne'>
                    <div className='crew' id='crewResponsive'>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/erdemPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Şükrü Erdem Şahin</a>
                            <a className='memberPosition'>{t("sugarSquadMember3Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/fatihPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Fatih Özdemir</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/utkuPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Utku Sert</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                    </div>
                    <div className='crew' id='crewResponsive'>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/sametPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Abdülsamet Sarıkoç</a>
                            <a className='memberPosition'>{t("sugarSquadMember4Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/ibrahimPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>İbrahim Aktaş</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                        <div className='SugarSquadMember'>
                        <img alt='' src={'./assets/img/nisaPp.svg'}></img>
                        <div className='memberInformation'>
                            <a className='memberName'>Nisa Nur Çakıcı</a>
                            <a className='memberPosition'>{t("sugarSquadMember7Position")}</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='squadPageButtons' style={{display: "none"}}>
                <img onClick={crews1} className='solution1Button' id='squad1Button'></img>
                <img onClick={crewsResponsive} className='solution2Button' id='squad2Button'></img>
            </div>
        </div>
    );
}