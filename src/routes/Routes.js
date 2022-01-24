import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Quiz from '../screens/Quiz/Quiz'
import Home from '../screens/Home/Home'
import QuizScore from '../screens/QuizScore/QuizScore'
import Screens from '../routes/Screens'

const Stack = createNativeStackNavigator()

const Routes = (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: '#CFCFCF',
				  },
			  }}
		>
			<Stack.Screen name={Screens.Home} component={Home} options={{headerShown: false}} />
			<Stack.Screen name={Screens.Quiz} component={Quiz} />
			<Stack.Screen name={Screens.QuizScore} component={QuizScore} options={{headerShown: false}} />
		</Stack.Navigator>
	</NavigationContainer>
)

export default Routes
