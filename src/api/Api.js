let instance = null;
export class Api {

	// #api_url = process.env.REACT_APP_API_ENDPOINT;


	/**
	 * @returns {Api}
	 */
	static get instance() {
		if (!instance) {
			instance = new Api();
		}
		return instance;
	}

	// async fetchPages() {
	// 	const url = this.#api_url + 'api/blogs/published-pages/SUGARTECH_IO';
	// 	const response = await fetch(url);
	// 	const data = await response.json();
	// 	console.log(data);
	// 	return data;
	// }
	/**
	 * 
	 * @param {{name?: string, email?: string, message?: string, phone?: string}} data 
	 * @param {function} successCallback
	 * @param {function} errorCallback
	 */
	sendFormData = async (data, successCallback, errorCallback) => {
		const form = new FormData();

		form.append("contactForm", JSON.stringify(data));

		const response = await fetch(
			process.env.REACT_APP_BACKEND_API + "/api/contact/form",
			{
				method: "POST",
				body: form
			}).catch((error) => {
				console.error("Error:", error);
				errorCallback?.call();
			});

		if (response.ok) {
			successCallback?.call();
		} else {
			errorCallback?.call();
		}
	};

}
