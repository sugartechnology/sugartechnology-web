import './SugarSquad.css';
import { useTranslation } from "react-i18next";

export const SugarSquad = props => {
    const { t } = useTranslation();
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

    return (
        <div className='SugarSquadContainer'>
            <div className='SugarSquadsDeskop'>
                {array.map((item, index) => (
                    <div className='crew'>
                        <div i={index} className='SugarSquadMember'>
                            <img src={item.image}></img>
                            <div className='memberInformation'>
                                <div className='memberName'>{item.name}</div>
                                <div className='memberPosition'>{item.position}</div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}