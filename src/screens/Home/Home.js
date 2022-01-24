import { Container, Title, Text, ViewContainer } from './styles'
import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { useNavigation } from '@react-navigation/native'
import Screens from '../../routes/Screens';

const Home = () => {
	const navigation = useNavigation()
	const navigateToQuiz = () => navigation.navigate(Screens.Quiz)

	return (
		<Container>
			<ViewContainer>
				<Title>Welcome to the</Title>
				<Title>Trivia Challenge!</Title>
			</ViewContainer>
			<ViewContainer>
				<Text>You will be presented with 10 True or False questions.</Text>
			</ViewContainer>
			<ViewContainer>
				<Text>Can you score 100%?</Text>
			</ViewContainer>

			<Button title='BEGIN' onPress={navigateToQuiz}/>
		</Container>
	)
};

export default Home
