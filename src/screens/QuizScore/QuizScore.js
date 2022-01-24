import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ButtonsContainer, Container, QuestionContainer, Text, TextContainer,ViewContainer, Title, FlatList, LeftTextContainer, TextIcon } from './styles'
import Button from '../../components/Button/Button'
import Screens from '../../routes/Screens'


const QuizScore = () => {
	const [playerScore, setPlayerScore] = useState(0)

	const navigation = useNavigation()
	const route = useRoute()

	useEffect(() => {
		calculatePlayerScore()
	}, [])

	const navigateToQuiz = () => navigation.reset({index: 1, routes: [{name: Screens.Home}, {name: Screens.Quiz}]})

	const navigateToHome = () => navigation.navigate(Screens.Home)

	const keyExtractor = (item, index) => (item + index);

	const calculatePlayerScore = () => {
		let score = 0
		route.params.questionsAndAnswers.forEach((item, index) => {
			if(isAnswerCorrect(item, index)) {
				score++
			}
		})
		setPlayerScore(score)
	}

	const isAnswerCorrect = (item, index) => {
		return item.correctAnswer === route.params.playerAnswers[index]
	}

	const renderListItem = ({ item, index }) => {
		return (
		  <TextContainer>
			  <LeftTextContainer><TextIcon>{isAnswerCorrect(item, index) ? '+' : '-'}</TextIcon></LeftTextContainer>
			  <Text>{route.params.questionsAndAnswers[index].question}</Text>
		  </TextContainer>
		)
	}

	return (
		<Container>
			<ViewContainer>
				<Title>You scored</Title>
				<Title>{playerScore} / 10</Title>
			</ViewContainer>

			<FlatList
				data={route.params.questionsAndAnswers}
				renderItem={renderListItem}
				keyExtractor={keyExtractor}
			/>

			<ButtonsContainer>
				<Button title='Play Again?' onPress={navigateToQuiz} />
				<Button title='Home' onPress={navigateToHome} />
			</ButtonsContainer>
		</Container>
	)
};

export default QuizScore
