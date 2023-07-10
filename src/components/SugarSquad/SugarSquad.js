import './SugarSquad.css';
import { useTranslation} from "react-i18next";
import { useEffect } from 'react';

export const SugarSquad = props =>{
    const {t} = useTranslation();
    const array = [
        {
            image: "./assets/img/almiraPp.webp",
            name: "Elmira Ghoreishi",
            position: t("sugarSquadMember1Position")
        },
        {
            image: "./assets/img/aliPp.webp",
            name: "Ali Rıza Yalçın",
            position: t("sugarSquadMember5Position")
        },
        {
            image: "./assets/img/selcukPp.webp",
            name: "Selçuk Taşlı",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/eyadPp.webp",
            name: "Muhammad Eyad",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/kubraPp.svg",
            name: "Kübra Yıldız",
            position: t("sugarSquadMember2Position")
        },
        {
            image: "./assets/img/tugrulPp.webp",
            name: "Tuğrul Subekçi",
            position: t("sugarSquadMember6Position")
        },
        {
            image: "./assets/img/erenPp.webp",
            name: "Muhammed Eren Demirbaş",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/hakkiPp.webp",
            name: "Hakkı Altan Cebeci",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/sametPp.webp",
            name: "Abdülsamet Sarıkoç",
            position: t("sugarSquadMember4Position")
        },
        {
            image: "./assets/img/ibrahimPp.webp",
            name: "İbrahim Aktaş",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/nisaPp.webp",
            name: "Nisa Nur Çakıcı",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/utkuPp.webp",
            name: "Utku Sert",
            position: t("sugarSquadMember7Position")
        },
    ];
    useEffect(() => {
        let parentDiv = document.querySelector(".sugarSquadsDeskop");
        array.forEach((item, i) => {
            if(i % 4 === 0){
                const crew = document.createElement("div");
                crew.classList.add("crew");
                parentDiv.appendChild(crew);
            }

            const memberDiv = document.createElement("div");
            memberDiv.classList.add("SugarSquadMember");

            const memberInformation = document.createElement("div");
            memberInformation.classList.add("memberInformation");

            const memberImage = document.createElement("img");
            memberImage.src = item.image;

            const memberName = document.createElement("a");
            memberName.innerHTML = item.name;
            memberName.classList.add("memberName");

            const memberPosition = document.createElement("a");
            memberPosition.innerHTML = item.position;
            memberPosition.classList.add("memberPosition");

            memberDiv.appendChild(memberImage);
            memberDiv.appendChild(memberInformation);
            memberInformation.appendChild(memberName);
            memberInformation.appendChild(memberPosition);

            const parentElement = document.querySelector(".crew:last-child");
            parentElement.appendChild(memberDiv);
        })
    },[]);
    return(
        <div className='SugarSquadContainer'>
            <div className='sugarSquadsDeskop'>
                
            </div>
        </div>
    );
}