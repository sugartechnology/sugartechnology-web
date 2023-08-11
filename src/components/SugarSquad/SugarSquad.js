import './SugarSquad.css';
import { useTranslation } from "react-i18next";

export const SugarSquad = props => {
    const { t } = useTranslation();
    const array = [
        {
            image: "./assets/img/squadPp/elmiraPp.svg",
            name: "Elmira Ghoreishi",
            position: t("sugarSquadMember1Position")
        },
        {
            image: "./assets/img/squadPp/kubraPp.svg",
            name: "Kübra Yıldız",
            position: t("sugarSquadMember2Position")
        },
        {
            image: "./assets/img/squadPp/sametPp.svg",
            name: "Abdulsamet Sarıkoç",
            position: t("sugarSquadMember4Position")
        },
        {
            image: "./assets/img/squadPp/tugrulPp.svg",
            name: "Tuğrul Subekçi",
            position: t("sugarSquadMember6Position")
        },
        {
            image: "./assets/img/squadPp/nisaPp.svg",
            name: "Nisa Nur Çakıcı",
            position: t("sugarSquadMember8Position")
        },
        {
            image: "./assets/img/squadPp/utkuPp.svg",
            name: "Utku Sert",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/squadPp/ibrahimPp.svg",
            name: "İbrahim Aktaş",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/squadPp/erenPp.svg",
            name: "Muhammed Eren Demirbaş",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/squadPp/selcukPp.svg",
            name: "Selçuk Taşlı",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/squadPp/eyadPp.svg",
            name: "Muhammad Eyad Kamacheh",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/squadPp/altanPp.svg",
            name: "Hakkı Altan Cebeci",
            position: t("sugarSquadMember7Position")
        },
        {
            image: "./assets/img/squadPp/berkayPp.svg",
            name: "Berkay Kaynar",
            position: t("sugarSquadMember5Position")
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