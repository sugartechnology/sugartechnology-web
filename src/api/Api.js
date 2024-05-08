
export class Api {
	constructor() {
		this.api_url = process.env.REACT_APP_API_ENDPOINT;
	}

	async fetchPages() {
		const url = this.api_url + 'api/blogs/published-pages/SUGARTECH_IO';
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		return data;
	}
	
}
