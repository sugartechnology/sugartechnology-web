import './SugarTeam.css';
import { useTranslation} from "react-i18next";
import { useState } from 'react';

export const SugarTeam = props =>{
    const {t} = useTranslation();
    return(
        <div className='SugarTeamContainer'>
            <div className='sugarTeamHeader'>
                <a>{t("sugarTeam")}</a>
            </div>
            <div className='sugarTeamLeaders'>
                <div className='sugarTeamLeader' id='leader1'>
                    <img alt='' src={'./assets/img/SugarTeamLeader1.svg'}></img>
                    <a className='leaderName'>Abdurrahman Türkeri</a>
                    <a className='leaderPosition'>{t("productManagmentHead")}</a>
                    <a className='leaderComment'>{t("leader1CommentSpan")}Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
                <div className='sugarTeamLeader' id='leader2'>
                    <img alt='' src={'./assets/img/SugarTeamLeader2.svg'}></img>
                    <a className='leaderName'>Yusuf Fatih Erol</a>
                    <a className='leaderPosition'>{t("softwareDeliveryHead")}</a>
                    <a className='leaderComment'>{t("leader2CommentSpan")}Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
                <div className='sugarTeamLeader' id='leader3'>
                    <img alt='' src={'./assets/img/SugarTeamLeader3.svg'}></img>
                    <a className='leaderName'>Farhad Faal</a>
                    <a className='leaderPosition'>{t("cgiTeamLeader")}</a>
                    <a className='leaderComment'>{t("leader3CommentSpan")}Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
                <div className='sugarTeamLeader' id='leader4'>
                    <img alt='' src={'./assets/img/erdemPp.svg'}></img>
                    <a className='leaderName'>Şükrü Erdem Şahin</a>
                    <a className='leaderPosition'>{t("sugarSquadMember3Position")}</a>
                    <a className='leaderComment'>{t("leader4CommentSpan")}Lorem ipsum dolor sit amet consectetur. Dignissim id congue velit eget erat eu fringilla nullam elementum.</a>
                </div>
            </div>
        </div>
    );
}