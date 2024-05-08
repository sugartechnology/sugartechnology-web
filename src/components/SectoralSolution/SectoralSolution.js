import "./SectoralSolution.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const SectoralSolution = (props) => {
	const { t } = useTranslation();

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 800);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="sectoralSolutionContainer">
			<div className="sectoralSolutionHeader">
				<img
					className="sectoralSolutionHeadLine"
					style={{ display: isMobile ? "none" : "" }}
					alt=""
					src={"./assets/img/sectoralSolutionLine.svg"}></img>
				<span className="sectoralSolutionSpan">{t("sectoralSolution")}</span>
				<img
					className="sectoralSolutionHeadLine"
					alt=""
					src={"./assets/img/sectoralSolutionLine.svg"}></img>
			</div>
			<div className="solutionsDiv">
				<div className="solution width100" id="solution1">
					<div className="solutionSpans" id="leftSpans">
						<span className="solutionHeader">{t("solutionHeader1")}</span>
						<span className="solutionSpan">{t("solutionSpan1")}</span>
						<a href="/productAr">
							<button className="solutionButton">
								<span>{t("readMore")}</span>
							</button>
						</a>
					</div>
					<div className="solutionImage">
						<img alt="" src={"./assets/img/solutionImg1.webp"} className="rightImage"></img>
						<img
							className="solutionShadow"
							alt=""
							src={"./assets/img/arDetailsShadow.svg"}
							style={{ display: "none" }}></img>
					</div>
				</div>

				<div className="solution width100" id="solution2">
					<div className="solutionImage">
						<img alt="" src={"./assets/img/solutionImg2.webp"} className="leftImage"></img>
						<img
							className="solutionShadow"
							alt=""
							src={"./assets/img/arDetailsShadow.svg"}
							style={{ display: "none" }}></img>
					</div>
					<div className="solutionSpans" id="rightSpans">
						<span className="solutionHeader">{t("solutionHeader2")}</span>
						<span className="solutionSpan">{t("solutionSpan2")}</span>
						<a href="/">
							<button className="solutionButton">
								<span>{t("readMore")}</span>
							</button>
						</a>
					</div>
				</div>

				<div className="solution width100" id="solution3">
					<div className="solutionSpans" id="leftSpans">
						<span className="solutionHeader">{t("solutionHeader3")}</span>
						<span className="solutionSpan">{t("solutionSpan3")}</span>
						<a href="/productShoes">
							<button className="solutionButton">
								<span>{t("readMore")}</span>
							</button>
						</a>
					</div>
					<div className="solutionImage">
						<img alt="" src={"./assets/img/solutionImg3.webp"} className="rightImage"></img>
						<img
							className="solutionShadow"
							alt=""
							src={"./assets/img/arDetailsShadow.svg"}
							style={{ display: "none" }}></img>
					</div>
				</div>

				<div className="solution width100" id="solution4">
					<div className="solutionImage">
						<img alt="" src={"./assets/img/solutionImg4.webp"} className="leftImage"></img>
						<img
							className="solutionShadow"
							alt=""
							src={"./assets/img/arDetailsShadow.svg"}
							style={{ display: "none" }}></img>
					</div>
					<div className="solutionSpans" id="rightSpans">
						<span className="solutionHeader">{t("solutionHeader4")}</span>
						<span className="solutionSpan">{t("solutionSpan4")}</span>
						<a href="/productMeta">
							<button className="solutionButton">
								<span>{t("readMore")}</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
