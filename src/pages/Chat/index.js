import styled from 'styled-components';
import { Verce } from '../../components/Logo';
import { COLOR, FONT_COLOR, FONT_SIZE } from '../../constants';
import { ChatButton, DirectMessage, GetChats } from './DirectMessage';

const Heading = styled.div`
	display: flex;
	align-items: center;
	padding-left: 10px;
	width: calc(100% - 10px);
	height: 30px;
	background-color: ${COLOR.secondary};
`;

const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: calc(100vh - 30px);
`;

const WidgetBar = styled.div`
	height: 100%;
	width: 60px;
	background-color: ${COLOR.secondary};
`;

const ChatBar = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 40px);
	width: 225px;
	padding: 20px 15px;
	background-color: ${COLOR.quarternary};
`;

const Subtitle = styled.div`
	font-weight: bold;
	font-size: ${FONT_SIZE.lg};
	color: ${FONT_COLOR.primary};
`;

// const MessageBox = styled.input`
// 	all: unset;
// 	background-color: ${COLOR.primary};
// `;

function Chat() {
	return (
		<div>
			<Heading>
				<Verce size={FONT_SIZE.lg}>verce</Verce>
			</Heading>
			<AppContainer>
				<WidgetBar></WidgetBar>
				<ChatBar>
					<Subtitle>Chats</Subtitle>
					{ChatButton(
						'https://www.w3schools.com/howto/img_avatar.png',
						'Happy Place',
						true
					)}
					<div
						style={{
							marginTop: '12px',
							backgroundColor: 'lightgrey',
							height: '3px',
						}}
					></div>
					{GetChats()}
				</ChatBar>
				{DirectMessage()}
			</AppContainer>
		</div>
	);
}

export default Chat;
