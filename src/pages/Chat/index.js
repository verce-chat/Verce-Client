import styled from 'styled-components';
import { Verce } from '../../components/Logo';
import { COLOR, FONT_COLOR, FONT_SIZE } from '../../constants';
import { ChatButton, DirectMessage, GetChats } from './DirectMessage';
import { BiChat } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { FaGamepad, FaBed } from 'react-icons/fa';
import { RiSettings4Line } from 'react-icons/ri';

// React Icons
// https://react-icons.github.io/react-icons

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
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100%-20px);
	width: 60px;
	padding: 10px 0px;
	background-color: ${COLOR.secondary};
`;

const Widget = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 44px;
	width: 44px;
	background-color: ${COLOR.secondaryHover};
	border-radius: 10px;
	margin-top: 20px;

	&:hover {
		cursor: pointer;
		filter: brightness(130%);
	}
`;

const ChatBar = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 40px);
	width: 225px;
	padding: 20px 15px;
	background-color: ${COLOR.quarternary};
`;

const ChatsContainer = styled.div`
	flex: 1;
	overflow-y: scroll;
	scrollbar-width: none;
`;

const User = styled.div`
	background-color: ${COLOR.secondary};
	height: 50px;
	width: auto;
	padding: 0px 10px;
	border-radius: 5px 5px 0px 0px;
`;

const UserSlider = styled.div`
	background-color: ${COLOR.tertiary};
	outline: 2px solid ${COLOR.secondary};
	height: 5px;
	width: 100%;
	margin-top: 50px;
	margin-left: 50%;
	padding: 0px 10px;
	border-radius: 20px;
	transform: translateX(calc(-1px + -50%));
`;

const Subtitle = styled.div`
	font-weight: bold;
	font-size: ${FONT_SIZE.lg};
	color: ${FONT_COLOR.primary};
`;

function Chat() {
	let iconStyle = {
		height: '35px',
		width: '35px',
		color: 'white',
	};

	return (
		<div>
			<Heading>
				<Verce size={FONT_SIZE.lg}>verce</Verce>
			</Heading>
			<AppContainer>
				<WidgetBar>
					<Widget
						style={{
							marginTop: '48px',
							outline: '2px solid ' + COLOR.tertiary,
						}}
					>
						<BiChat style={iconStyle}></BiChat>
					</Widget>
					<Widget>
						<HiUserGroup
							style={{
								...iconStyle,
								transform: 'translateY(-5%)',
							}}
						></HiUserGroup>
					</Widget>
					<Widget>
						<FaGamepad style={iconStyle}></FaGamepad>
					</Widget>
					<Widget>
						<FaBed style={iconStyle}></FaBed>
					</Widget>
					<Widget>
						<RiSettings4Line style={iconStyle}></RiSettings4Line>
					</Widget>
				</WidgetBar>
				<ChatBar>
					<Subtitle>Chats</Subtitle>
					{ChatButton(
						'https://www.w3schools.com/howto/img_avatar.png',
						'EskimoWhisperer',
						true
					)}
					<div
						style={{
							marginTop: '12px',
							backgroundColor: 'lightgrey',
							height: '3px',
						}}
					></div>
					<ChatsContainer>{GetChats()}</ChatsContainer>
					<User>
						<UserSlider></UserSlider>
					</User>
				</ChatBar>
				{DirectMessage()}
			</AppContainer>
		</div>
	);
}

export default Chat;
