import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants';

const ChatButtonStyle = styled.button`
	font-family: 'Lato';
	all: unset;
	max-height: 40px;
	margin-top: ${(props) => (props.main ? '10px' : '5px')};
	outline: ${(props) =>
		props.main ? 'solid 2px ' + COLOR.tertiary : 'none'};
	border-radius: 2px;
	padding: 5px 10px;
	background-color: ${(props) => (props.main ? COLOR.primary : 'none')};
	color: grey;
	cursor: pointer;
	&:hover {
		color: lightgrey;
		background-color: ${COLOR.primary};
	}
`;

const ChatButtonName = styled.div`
	float: left;
	padding-left: 10px;
	font-weight: 600;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: calc(100% - 51px);
	margin-top: 18px;
	transform: translateY(-50%);
`;

// Horizontal Chat Container, thinking of making Vertical chat container
const ChatContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const TopContainer = styled.div`
	background-color: ${COLOR.secondary};
	height: 45px;
	width: calc(100% - 40px);
	color: #dadada;
	font-size: ${FONT_SIZE.xl};
	font-weight: bold;
	padding: 0px 20px;
`;

const Widgets = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: right;
	float: right;
	padding: 0px 0px;
	height: 100%;
	width: 600px;
`;

const SearchBar = styled.div`
	background-color: ${COLOR.primary};
	height: 50%;
	width: 150px;
	outline: 2px solid black;
	font-size: ${FONT_SIZE.sm};
	padding: 0px 10px;
`;

const InfoContainer = styled.div`
	align-self: flex-end;
	width: 225px;
	background-color: #204588;
	height: 100%;
`;

// TODO: Implement, image & description functionality
export function ChatButton(image, name, mainBox) {
	return (
		<ChatButtonStyle main={mainBox}>
			<img
				alt="Profile"
				src={image}
				style={{
					aspectRatio: '1/1',
					float: 'left',
					height: '100%',
					borderRadius: '50%',
				}}
			/>
			<ChatButtonName>{name}</ChatButtonName>
		</ChatButtonStyle>
	);
}

export function GetChats() {
	// Temporary DM generator.
	let arr = [];
	for (let i = 0; i < 10; i++) {
		arr[i] = ChatButton(
			'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
			'Example Man ' + (i + 1)
		);
	}
	return arr;
}

export function DirectMessage() {
	return (
		<ChatContainer>
			<TopContainer>
				EskimoWhisperer
				<Widgets>
					<SearchBar>Search</SearchBar>
				</Widgets>
			</TopContainer>
			<InfoContainer>green</InfoContainer>
		</ChatContainer>
	);
}
