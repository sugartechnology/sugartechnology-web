import './SugarTeam.css';
import { useTranslation} from "react-i18next";
import { useState } from 'react';

export const SugarTeam = props =>{
    const {t} = useTranslation();
    const [index, setIndex] = useState(0);
    const array = [{
        leaderName: "leaderName1",
        leaderPosition: "productManagmentHead",
        leaderComment: "leader1CommentSpan"
    },

    {
        leaderName: "leaderName2",
        leaderPosition: "softwareDeliveryHead",
        leaderComment: "leader2CommentSpan"
    },
    {
        leaderName: "leaderName3",
        leaderPosition: "cgiTeamLeader",
        leaderComment: "leader3CommentSpan"
    }];

    const next = () => {
        setIndex((index + 1) % array.length);
    }

    const prev = () => {
        setIndex((index - 1) < 0 ? index - 1 + array.length : index - 1);
    }
    return(
        <div className='SugarTeamContainer'>
            <div className='sugarTeamHeader'>
                <a>{t("sugarTeam")}</a>
            </div>
            <div className='sugarTeamLeaders'>

            <img className='teamsLeftButton' alt='' src={'assets/img/commentsLeftButton.svg'} onClick={() => { prev(); }} style={{display: "none"}}></img>
                <div className='mobileLeaders'>
                <div className='sugarTeamLeader'>
                    <img alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                    <a className='leaderName'>{t(array[index].leaderName)}</a>
                    <a className='leaderPosition'>{t(array[index].leaderPosition)}</a>
                    <a className='leaderComment'>{t(array[index].leaderComment)}</a>
                </div>
                <div className='sugarTeamLeader' style={{display: "none"}}>
                    <img alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                    <a className='leaderName'>{t(array[index].leaderName)}</a>
                    <a className='leaderPosition'>{t(array[index].leaderPosition)}</a>
                    <a className='leaderComment'>{t(array[index].leaderComment)}</a>
                </div>
                <div className='sugarTeamLeader' style={{display: "none"}}>
                    <img alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                    <a className='leaderName'>{t(array[index].leaderName)}</a>
                    <a className='leaderPosition'>{t(array[index].leaderPosition)}</a>
                    <a className='leaderComment'>{t(array[index].leaderComment)}</a>
                </div>
                </div>
                
                <div className='deskopLeaders'>
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
                

                <img className='teamsRightButton' alt='' src={'assets/img/commentsRightButton.svg'} onClick={() => { next(); }} style={{display: "none"}}></img>
            </div>
        </div>
    );
}