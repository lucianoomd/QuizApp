import { Text, Container } from './styles'

import React from 'react'

const Button = ({ title, onPress }) => (
	<Container onPress={onPress}>
		<Text>{title}</Text>
	</Container>
)

export default Button
