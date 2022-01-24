import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ButtonsContainer, Container, QuestionContainer, Text, TextContainer } from './styles'
import { Alert } from 'react-native'
import Loader from '../../components/Loader/Loader'
import QuizService from '../../services/QuizService'
import Button from '../../components/Button/Button'
import Screens from '../../routes/Screens'

const Quiz = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [playerAnswers, setPlayerAnswers] = useState([])
	const navigation = useNavigation()

	const quizService = new QuizService()

	useEffect(() => {
		getQuestionsAndAnswers()
	}, [])

	useEffect(() => {
		if(questionsAndAnswers.length){
			navigation.setOptions({
				title: questionsAndAnswers[currentQuestionIndex].category,
			})
		}
	}, [currentQuestionIndex, questionsAndAnswers])

	const navigateToQuizScore = () => navigation.navigate(Screens.QuizScore, { playerAnswers, questionsAndAnswers })

	const getQuestionsAndAnswers = async () => {
		setIsLoading(true)
		const response = await quizService.getQuestionsAndAnswers()

		if (response.error) {
			Alert.alert('Error', response.error)
		} else {
			setQuestionsAndAnswers(response.data)
		}
		setIsLoading(false)
	}

	const handleAnswerTrue = () => handleAnswer(true)

	const handleAnswerFalse = () => handleAnswer(false)

	const handleAnswer = (answer) => {
		const tempPlayerAnswers = playerAnswers
		tempPlayerAnswers.push(answer)
		setPlayerAnswers(tempPlayerAnswers)
		if(currentQuestionIndex < 9) {
			setCurrentQuestionIndex(currentQuestionIndex + 1)
		} else {
			navigateToQuizScore()
		}
	} 

	const renderQuestion = () => {
		const question = questionsAndAnswers.length ? questionsAndAnswers[currentQuestionIndex].question : ''

		return (
			<QuestionContainer>
				<TextContainer>
					<Text>{question}</Text>
				</TextContainer>
				<Text>{currentQuestionIndex + 1} of 10</Text>
			</QuestionContainer>
		)
	}

	return (
		<Container>
			{isLoading ? <Loader /> : null}

			{renderQuestion()}
			<ButtonsContainer>
				<Button title='True' onPress={handleAnswerTrue} />
				<Button title='False' onPress={handleAnswerFalse} />
			</ButtonsContainer>
		</Container>
	)
};

export default Quiz
