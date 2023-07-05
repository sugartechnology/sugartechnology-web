import './MainSectoralSolution.css';
import { useTranslation} from "react-i18next";
import React, { useEffect, useState } from 'react';


export const MainSectoralSolution = (props) => {
    const { t } = useTranslation();
    const solutionArray = [
            {
                url: "./assets/img/solutionImages/koltuk.svg",
                header: t("furnitureHeader"),
                span: t("furnitureSpan"),
                link: "/productAr",
                popupImage: "./assets/img/ShowAtHomeImage.webp"
            },
            {
                url: "./assets/img/solutionImages/halı.svg",
                header: t("carpetHeader"),
                span: t("carpetSpan"), 
                link: "/productCarpet",
                popupImage: "./assets/img/products/carpet.svg"
            },
            {
                url: "./assets/img/solutionImages/tablo.svg",
                header: t("tableHeader"),
                span: t("tableSpan"), 
                link: "/productTable",
                popupImage: "./assets/img/products/tablo.svg"
            },
            {
                url: "./assets/img/solutionImages/banyo.svg",
                header: t("bathroomFurnitureHeader"),
                span: t("bathroomFurnitureSpan"),
                link: "/productBathroom",
                popupImage: "./assets/img/products/banyo.svg"
            },
            {
                url: "./assets/img/solutionImages/beyazEşya.svg",
                header: t("whiteGoodsHeader"),
                span: t("whiteGoodsSpan"), 
                link: "/productWhiteGoods",
                popupImage: "./assets/img/products/beyazEsya.svg"
            },
            {
                url: "./assets/img/solutionImages/aksesuarlar.svg",
                header: t("decorationHeader"),
                span: t("decorationSpan"),
                link: "/productDecoration",
                popupImage: "./assets/img/products/dekorasyon.svg"
            },
            {
                url: "./assets/img/solutionImages/materyaller.svg",
                header: t("materialsHeader"),
                span: t("materialsSpan"),
                popupImage: "./assets/img/products/materials.svg"
            },
            {
                url: "./assets/img/solutionImages/saat.svg",
                header: t("watchHeader"),
                span: t("watchSpan"),
                link: "/productWatch",
                popupImage: "./assets/img/watchImage.webp"
            },
            {
                url: "./assets/img/solutionImages/ayakkabı.svg",
                header: t("shoesHeader"),
                span: t("shoesSpan"), 
                link: "/productShoes",
                popupImage: "./assets/img/shoesImage.webp"
            },
            {
                url: "./assets/img/solutionImages/kıyafet.svg",
                header: t("cloothHeader"),
                span: t("cloothSpan"),
                link: "/productClooth",
                popupImage: "./assets/img/cloothImage.webp"
            },
            {
                url: "./assets/img/solutionImages/tekstil.svg",
                header: t("textileHeader"),
                span: t("textileSpan"),
                link: "/productTextile",
                popupImage: "./assets/img/products/tekstil.svg"
            },
            {
                url: "./assets/img/solutionImages/ışık.svg",
                header: t("lightHeader"),
                span: t("lightSpan"),
                popupImage: "./assets/img/products/light.svg"
            }
    ];

    useEffect(() => {
        const parentDiv = document.querySelector(".solutionItems");
        solutionArray.forEach((item, i) => {
            if (i % 4 === 0) {
                const solutionGroup = document.createElement("div");
                solutionGroup.classList.add("solutionGroup");
                parentDiv.appendChild(solutionGroup);
            }

            const solutionItem = document.createElement("div");
            const solutionImage = document.createElement("img");
            const solutionSpan = document.createElement("a");

            solutionItem.classList.add("solutionItem");
            solutionImage.classList.add("solutionImage");
            solutionImage.setAttribute("index", "" + i);
            solutionImage.addEventListener("click", selectSolution);
            solutionSpan.classList.add("solutionSpans");
            solutionImage.src = item.url;
            solutionSpan.innerHTML = t(item.header);

            solutionItem.appendChild(solutionImage);
            solutionItem.appendChild(solutionSpan);

            const parentElement = document.querySelector(".solutionGroup:last-child");
            parentElement.appendChild(solutionItem);
        });
    }, []);

    const selectSolution = (event) => {

        const index = parseInt(event.target.getAttribute("index"));
       

        let parentElement = event.target.parentElement;

        while (parentElement && !parentElement.classList.contains("solutionGroup")) {
            parentElement = parentElement.parentElement;
        }


        const solutionItem = event.target.closest(".solutionItem");

        const existingPopups = document.querySelectorAll(".popup");

        existingPopups.forEach((popup) => {
            if ( popup || popup.parentNode !== solutionItem) {
                popup.remove();
            }
        });
        
        const popupContainer = document.createElement("div");
        popupContainer.classList.add("popup");

        const overlay = document.createElement("div");
        overlay.classList.add("popupOverlay");

        const closeButtons = document.createElement("div");
        closeButtons.classList.add("popupCloseButtons");
        popupContainer.appendChild(closeButtons);

        const closeIcon = document.createElement("img");
        closeIcon.src = "./assets/img/popupVector2.svg";
        closeIcon.classList.add("popupCloseButton")
        closeButtons.appendChild(closeIcon);
        closeIcon.addEventListener("click", () => {
            const popup = closeIcon.closest(".popup");
            const overlay = document.querySelector(".popupOverlay");
            if (popup) {
              popup.parentElement.removeChild(popup);
              overlay.parentElement.removeChild(overlay);
            }
        });
    
        const popupSpans = document.createElement("div");
        popupSpans.classList.add("popupSpans");
        popupContainer.appendChild(popupSpans);

        const popupSpanElements = document.createElement("div");
        popupSpanElements.classList.add("popupSpanElements");
        popupSpans.appendChild(popupSpanElements);

        const header = document.createElement("a");
        header.classList.add("showAtHomeHeader");
        header.innerHTML = solutionArray[index].header;
        popupSpanElements.appendChild(header);

        const span = document.createElement("a");
        span.classList.add("popupSpan");
        span.innerHTML = solutionArray[index].span;
        popupSpanElements.appendChild(span);

        const popupButton = document.createElement("div");
        popupButton.classList.add("popupButton");
        popupSpans.appendChild(popupButton);

        if (solutionArray[index].link) {

            const button = document.createElement("a");
            button.classList.add("showAtHomeButton1");
            button.innerHTML = t("usecase");
            popupButton.appendChild(button);

        } else {
            popupButton.style.display = "none";
        }
        const popupImageDiv = document.createElement("div");
        popupImageDiv.classList.add("popupImageDiv");
        popupContainer.appendChild(popupImageDiv);

        const popupImage = document.createElement("img");
        popupImage.classList.add("showAtHomeImage");
        popupImage.src = solutionArray[index].popupImage;
        popupImageDiv.appendChild(popupImage);

        solutionItem.appendChild(overlay);
        solutionItem.appendChild(popupContainer);
    
        const solutionImages = document.querySelectorAll(".solutionImage");
    
        solutionImages.forEach((item) => {
            const itemIndex = parseInt(item.getAttribute("index"));
            if (itemIndex === index) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }
        });
    };
      
    return (
        <div className='mainSectoralSolutionContainer'>
            <div className='mainSolutionHeader'>
                <img className='mainSolutionHeaderLine' alt='' src={'./assets/img/mainSolutionLine.svg'}></img>
                <h1>{t("sectoralSolution")}</h1>
                <img className='mainSolutionHeaderLine' alt='' src={'./assets/img/mainSolutionLine.svg'}></img>
            </div>
            <div className='mainSolutionSpans'>
                <a className='mainSolutionSpan'>{t("mainSolutionSpan")}
            </a>
            </div>
            <div className="solutionItems">
               
            </div>
        </div>
    );
}