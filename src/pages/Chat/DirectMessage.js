import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_COLOR } from '../../constants';
import { MdOutlineArrowCircleRight } from 'react-icons/md';

const ChatButtonStyle = styled.button`
	font-family: 'Lato';
	all: unset;
	height: 40px;
	width: ${(props) => (props.main ? 'auto' : '100%')};
	margin-top: ${(props) => (props.main ? '10px' : '5px')};
	outline: ${(props) =>
		props.main ? 'solid 2px ' + COLOR.tertiary : 'none'};
	border-radius: 2px;
	padding: 5px 10px;
	background-color: ${(props) => (props.main ? COLOR.primary : 'none')};
	color: ${(props) => (props.main ? 'white' : 'grey')};
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

const Container = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
// Horizontal Chat Container, thinking of making Vertical chat container
const ChatContainer = styled.div`
	flex: 1;
	height: calc(100%-50px);
	display: flex;
	flex-direction: column;
	justify-content: end;
	padding: 0px 60px;
	padding-bottom: 50px;
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

const SearchBar = styled.input`
	all: unset;
	background-color: ${COLOR.primary};
	height: 50%;
	width: 150px;
	outline: 1px solid black;
	font-size: ${FONT_SIZE.sm};
	padding: 0px 10px;
`;

const InfoContainer = styled.div`
	align-self: flex-end;
	width: 225px;
	background-color: #204588;
	height: 100%;
`;

const MessengerContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: calc(100%);
	height: 40px;
	background-color: ${COLOR.primary};
	align-self: center;
	border-radius: 5px;
`;

const InputMessageBox = styled.input`
	all: unset;
	color: white;
	flex: 1;
	padding: 0px 20px;
	height: 100%;
`;

const MessageWidgets = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
	padding: 0px 10px;
`;

const SendButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover * {
		color: ${COLOR.tertiary};
	}
`;

const MessageContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
`;

const MessageName = styled.div`
	display: flex;
	flex-direction: row;
	height: min-content;
	align-items: flex-end;
	color: ${FONT_COLOR.primary};
	* {
		font-weight: 600;
	}
`;

const MessageTime = styled.div`
	padding-left: 10px;
	color: #dadada;
	font-size: ${FONT_SIZE.sm};
`;

const MessageColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2px;
`;

const Message = styled.div`
	color: ${FONT_COLOR.primary}cc;
`;

function newMessage(messageData) {
	let getProfilePicture = () => {
		if (messageData.sameSender) return;
		return (
			<img
				alt="UserProfile"
				src={messageData.profilePicture}
				style={{
					aspectRatio: '1/1',
					height: '50px',
					borderRadius: '50%',
					marginRight: '15px',
				}}
			></img>
		);
	};

	if (messageData.sameSender) return;
	return (
		<MessageContainer>
			{getProfilePicture()}
			<div>
				<MessageName>
					<div>{messageData.sender}</div>
					<MessageTime>{messageData.time}</MessageTime>
				</MessageName>
				<MessageColumn>{messageData.messages}</MessageColumn>
			</div>
		</MessageContainer>
	);
}

function RenderMessages(newMessages) {
	let components = [];
	for (let i = 0; i < newMessages.length; i++) {
		let currentMsg = newMessages[i];
		for (let j = 0; j < currentMsg.messages.length; j++) {
			currentMsg.messages[j] = (
				<Message key={currentMsg.id}>{currentMsg.messages[j]}</Message>
			);
		}
		if (i > 0 && newMessages[i - 1].sender === currentMsg.sender) {
			currentMsg.sameSender = true;
			newMessages[i - 1].messages.push(...currentMsg.messages);
		}
		components[i] = newMessage(currentMsg);
	}
	return components;
}

// TODO: Implement, image & description functionality
export function ChatButton(image, name, mainBox) {
	return (
		<ChatButtonStyle key={name} main={mainBox}>
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
	for (let i = 0; i < 20; i++) {
		arr[i] = ChatButton(
			'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
			'Example Man ' + (i + 1)
		);
	}
	return arr;
}

export function DirectMessage() {
	let iconStyle = {
		height: '30px',
		width: '30px',
		color: 'white',
		paddingLeft: '10px',
	};

	// Temporary Replacement for personal info
	let personalInfo = {
		name: 'Oz0ne',
		aboutMe: 'Alive... for now',
		image: 'https://www.w3schools.com/howto/img_avatar.png',
	};

	// Temporary Replacement for messages
	let messages = [
		{
			profilePicture: 'https://www.w3schools.com/howto/img_avatar.png',
			sender: 'EskimoWhisperer',
			time: 'Today at 5:33 PM',
			messages: ['MESSAGE1'],
			id: 1,
		},
		{
			profilePicture: 'https://www.w3schools.com/howto/img_avatar.png',
			sender: 'EskimoWhisperer',
			time: 'Today at 5:33 PM',
			messages: ['MESSAGE2'],
			id: 2,
		},
		{
			profilePicture: 'https://www.w3schools.com/howto/img_avatar.png',
			sender: 'Example Man 23',
			time: 'Today at 5:33 PM',
			messages: ['This is a real message I swear'],
			id: 2,
		},
	];

	return (
		<Container>
			<TopContainer>
				EskimoWhisperer
				<Widgets>
					<SearchBar placeholder="Search"></SearchBar>
				</Widgets>
			</TopContainer>
			<Container style={{ flexDirection: 'row' }}>
				<ChatContainer>
					{RenderMessages(messages)}
					<MessengerContainer>
						<InputMessageBox placeholder="Message @EskimoWhisperer"></InputMessageBox>
						<MessageWidgets>
							<div
								style={{
									backgroundColor: 'gray',
									height: 'calc(100% - 6px)',
									width: '2px',
									borderRadius: '10px',
								}}
							></div>
							<SendButton>
								<MdOutlineArrowCircleRight
									style={iconStyle}
								></MdOutlineArrowCircleRight>
							</SendButton>
						</MessageWidgets>
					</MessengerContainer>
				</ChatContainer>
				<InfoContainer>
					<div
						style={{
							borderRadius: '10px 0px 10px 0px',
							backgroundColor: '#ABCDEF',
							height: '100px',
							width: 'calc(100%)',
						}}
					></div>
				</InfoContainer>
			</Container>
		</Container>
	);
}
