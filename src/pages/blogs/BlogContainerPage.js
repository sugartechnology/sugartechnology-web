import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import './BlogContent.css';

export const BlogContainerPage = ({ urls }) => {
	const ref = useRef(null);
	const i18n = useTranslation();
	const navigate = useNavigate();
	const [url, setUrl] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			if (!url) return;
			const sources = url.split(';');
			const response = await fetch(sources[0], { method: 'GET' });

			if (!response.ok) {
				return;
			}
			const data = await response.text();
			ref.current.innerHTML = data;
		};

		if (urls) {
			const lang = i18n.i18n.language;
			const u = urls[lang];
			if (u) {
				setUrl(u);
			} else {
				navigate('/blogs');
				return;
			}	
			fetchData();
		}

	}, [url, urls, i18n.i18n.language, navigate])


	return (
		<div className={"page-margin ck-content"} ref={ref}>
		</div>
	);
}