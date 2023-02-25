import styled from 'styled-components';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../constants';

export const Container = styled.div`
	display: flex;
	width: 100%;
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : COLOR.primary};
	color: ${(props) => (props.color ? props.color : FONT_COLOR.primary)};
	font-size: ${(props) => (props.fontSize ? props.fontSize : FONT_SIZE.lg)};
	font-family: 'Open Sans';
	line-height: 2em;
`;

export const Title = styled.h1`
	color: ${(props) => (props.color ? props.color : FONT_COLOR.primary)};
	font-size: 32px;
	padding: 0;
	margin-top: 0;
`;

const LeftContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 50%;
	align-self: center;
	padding: 40px;
	font-family: 'Open Sans';
`;

const RightContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-self: center;
	flex: 50%;
	padding: 40px;
`;

function contentSort(props) {
	var content = (
		<div>
			<Title>{props.title}</Title>
			{props.children}
		</div>
	);
	var img = (
		<img src={props.image} style={props.imageStyle} alt="CustomizedImage" />
	);

	if (props.rightContent) {
		return [content, img];
	} else if (props.leftContent) {
		return [img, content];
	}
}

function Description(props) {
	var [rightContent, leftContent] = contentSort(props);

	return (
		<Container style={props.style}>
			<LeftContainer>{leftContent}</LeftContainer>
			<RightContainer>{rightContent}</RightContainer>
		</Container>
	);
}

// function Description(props) {
// 	return (
// 		<Container style={props.style}>
// 			<Content>
// 				<Title>{props.title}</Title>
// 				{props.children}
// 			</Content>
// 		</Container>
// 	);
// }

export default Description;
