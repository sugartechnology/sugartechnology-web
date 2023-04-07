import './SugarTeam.css';
import { useTranslation} from "react-i18next";

export const SugarTeam = props =>{
    const {t} = useTranslation();
    return(
        <div className='SugarTeamContainer'>
            <div className='sugarTeamHeader'>
                <a>{t("sugarTeam")}</a>
            </div>
            <div className='sugarTeamLeaders'>
                <div className='sugarTeamLeader'>
                    <img alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                    <a className='leaderName'>Abdurrahman Türkeri</a>
                    <a className='leaderPosition'>{t("productManagmentHead")}</a>
                    <a className='leaderComment'>{t("leader1CommentSpan")}</a>
                </div>
                <div className='sugarTeamLeader'>
                    <img alt='' src={'./assets/img/SugarTeamLeader2.svg'}></img>
                    <a className='leaderName'>Yusuf Fatih Erol</a>
                    <a className='leaderPosition'>{t("softwareDeliveryHead")}</a>
                    <a className='leaderComment'>{t("leader2CommentSpan")}</a>
                </div>
                <div className='sugarTeamLeader'>
                    <img alt='' src={'./assets/img/SugarTeamLeader3.svg'}></img>
                    <a className='leaderName'>Farhad Faal</a>
                    <a className='leaderPosition'>{t("cgiTeamLeader")}</a>
                    <a className='leaderComment'>{t("leader3CommentSpan")}</a>
                </div>
            </div>
        </div>
    );
}