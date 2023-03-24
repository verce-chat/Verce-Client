import styled from 'styled-components';
import { Verce } from '../../components/Logo';
import { COLOR, FONT_COLOR, FONT_SIZE } from '../../constants';

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

const Banner = styled.div`
	height: 20%;
	width: 100%;
	background-color: ${COLOR.primary};
`;

const ChannelName = styled.div`
	display: flex;
	align-items: center;
	font-family: 'Lato';
	font-weight: bold;
	color: gray;
	padding-left: 20px;
	height: 30px;
	width: calc(100%-20px);
	background-color: ${COLOR.secondary};
`;

const MessageBox = styled.input`
	all: unset;
	background-color: ${COLOR.primary};
`;

// TODO: Implement, image & description functionality
function ChatButton(image, name, mainBox) {
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
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example Man 1'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
					{ChatButton(
						'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg',
						'Example'
					)}
				</ChatBar>
				<ChatContainer>
					<Banner></Banner>
					<ChannelName># GENERAL</ChannelName>
				</ChatContainer>
			</AppContainer>
		</div>
	);
}

export default Chat;
