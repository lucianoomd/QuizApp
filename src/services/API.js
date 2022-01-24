export default class API {
	baseAPI = `https://opentdb.com`

	async doGet(endpoint) {
		const fullPath = `${this.baseAPI}${endpoint}`
		const response = { data: [], error: '' }
		try {
			response.data = await fetch(fullPath).then(tempResponse => tempResponse.json())
		} catch (error) {
			response.error = error.toString()
		}
		return response
	}
}