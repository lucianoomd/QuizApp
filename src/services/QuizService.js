import API from './API'

export default class QuizService extends API {
	async getQuestionsAndAnswers() {
		const endpoint = '/api.php?amount=10&difficulty=hard&type=boolean'
		const response = await this.doGet(endpoint)

		response.data = response.data.results.map((item) => ({
			category: item.category,
			question: item.question.replaceAll('&quot;', '"'),
			correctAnswer: item.correct_answer.toLowerCase() === 'true',
		}))

		return response
	}
}
