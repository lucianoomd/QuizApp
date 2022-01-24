import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	background-color: #CFCFCF;
	padding: 20px;
	flex: 1;
`;

export const ViewContainer = styled.View`
	margin-bottom: 20px;
`

export const Title = styled.Text`
	font-size: 26px;
	padding-left: 20px;
	padding-right: 20px;
	text-align: center;
	color: #000;
	font-weight: bold;
`

export const FlatList = styled.FlatList`
	flex: 1;
	padding-bottom: 15%;
`;

export const QuestionContainer = styled.View``;

export const TextContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 20px;
`;

export const LeftTextContainer = styled.View`
	flex: 1.8;
	align-items: center;
`;

export const TextIcon = styled.Text`
	font-size: 35px;
	color: #3F3F3F;
	flex: 15;
	text-align: center;
`;

export const Text = styled.Text`
	font-size: 20px;
	color: #3F3F3F;
	flex: 15;
`;

export const ButtonsContainer = styled.View`
	height: 110px;
	justify-content: space-between;
	margin-top: 20px;
`;
