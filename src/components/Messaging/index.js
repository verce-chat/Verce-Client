import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_COLOR } from '../../constants';
import { MdOutlineArrowCircleRight } from 'react-icons/md';

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

let iconStyle = {
	height: '30px',
	width: '30px',
	color: 'white',
	paddingLeft: '10px',
};

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

function renderMessages(newMessages) {
	let components = [];
	for (let i = 0; i < newMessages.length; i++) {
		// If an element has already been wrapped, don't wrap it again
		if (newMessages[i].wrapped) {
			components[i] = newMessage(newMessages[i]);
			continue;
		}
		newMessages[i].wrapped = true;
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

export function Messaging(user, msgs) {
	let messages = renderMessages(msgs);
	return (
		<ChatContainer>
			{messages}
			<MessengerContainer>
				<InputMessageBox
					placeholder={'Message @' + user}
				></InputMessageBox>
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
	);
}
