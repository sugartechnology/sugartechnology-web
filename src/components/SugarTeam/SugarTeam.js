import './SugarTeam.css';
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

export const SugarTeam = props => {
    const { t } = useTranslation();

    const array = [
        {
            image: "./assets/img/SugarTeamLeader1.webp",
            name: "Abdurrahman Türkeri",
            position: t("productManagmentHead"),
            comment: t("leader1CommentSpan")
        },
        {
            image: "./assets/img/SugarTeamLeader2.webp",
            name: "Yusuf Fatih Erol",
            position: t("softwareDeliveryHead"),
            comment: t("leader2CommentSpan")
        },
        {
            image: "./assets/img/SugarTeamLeader3.webp",
            name: "Farhad Faal",
            position: t("cgiTeamLeader"),
            comment: t("leader3CommentSpan")
        },
        {
            image: "./assets/img/erdemPp.jpg",
            name: "Şükrü Erdem Şahin",
            position: t("sugarSquadMember3Position"),
            comment: t("leader4CommentSpan")
        }
    ];

    // useEffect(() => {
    //     let parentDiv = document.querySelector(".sugarTeamLeaders");
    //     array.forEach((item) => {

    //         let leaderDiv = document.createElement("div");
    //         leaderDiv.classList.add("sugarTeamLeader");

    //         let leaderImage = document.createElement("img");
    //         leaderImage.src = item.image;

    //         let leaderName = document.createElement("a");
    //         leaderName.classList.add("leaderName");
    //         leaderName.innerHTML = item.name;

    //         let leaderPosition = document.createElement("a");
    //         leaderPosition.classList.add("leaderPosition");
    //         leaderPosition.innerHTML = item.position;

    //         let leaderComment = document.createElement("a");
    //         leaderComment.classList.add("leaderComment");
    //         leaderComment.innerHTML = item.comment;

    //         leaderDiv.appendChild(leaderImage);
    //         leaderDiv.appendChild(leaderName);
    //         leaderDiv.appendChild(leaderPosition);
    //         leaderDiv.appendChild(leaderComment);

    //         parentDiv.appendChild(leaderDiv);
    //     });
    // }, []);
    return (
        <div className='SugarTeamContainer'>
            <div className='sugarTeamHeader'>
                <a>{t("sugarTeam")}</a>
            </div>
            <div className='sugarTeamLeaders'>
                {array.map((item, index) => (
                    <div className="sugarTeamLeader">
                        <img src={item.image} />
                        <a className="leaderName">{item.name}</a>
                        <a className="leaderPosition"> {item.position}</a>
                        <a className="leaderComment">{item.comment}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}