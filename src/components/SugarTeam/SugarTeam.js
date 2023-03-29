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
                    <a className='leaderComment'>Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
                <div className='sugarTeamLeader'>
                    <img alt='' src={'./assets/img/SugarTeamLeader2.svg'}></img>
                    <a className='leaderName'>Yusuf Fatih Erol</a>
                    <a className='leaderPosition'>{t("softwareDeliveryHead")}</a>
                    <a className='leaderComment'>Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
                <div className='sugarTeamLeader'>
                    <img alt='' src={'./assets/img/SugarTeamLeader3.svg'}></img>
                    <a className='leaderName'>Farhad Faal</a>
                    <a className='leaderPosition'>{t("cgiTeamLeader")}</a>
                    <a className='leaderComment'>Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
            </div>
        </div>
    );
}