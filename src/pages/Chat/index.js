import styled from 'styled-components';
import { Verce } from '../../components/Logo';
import { COLOR, FONT_COLOR, FONT_SIZE } from '../../constants';
import { DirectMessage, GetChats, PrimaryChat } from './DirectMessage';
import { GroupMessage, GetGroups } from './Server';
import { BiChat } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';
import { FaGamepad, FaBed } from 'react-icons/fa';
import { RiSettings4Line } from 'react-icons/ri';
import { useState } from 'react';

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
	padding-bottom: 10px;
	padding-top: 38px;
	background-color: ${COLOR.secondary};
`;

const Widget = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 44px;
	width: 44px;
	background-color: ${COLOR.secondaryHover};
	border-radius: 10px;
	margin-top: 20px;
	outline: ${(props) =>
		props.selected ? 'solid 2px ' + COLOR.tertiary : 'none'};
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
	display: flex;
	flex-direction: column;
	justify-content: end;
	background-color: ${COLOR.secondary};
	height: 64px;
	width: auto;
	padding: 0px 10px;
	border-radius: 5px 5px 0px 0px;
`;

const Profile = styled.img`
	aspect-ratio: 1/1;
	height: calc(100% - 10px);
	max-height: 46px;
	border-radius: 50%;
	margin-top: 5px;
	float: left;
	outline: 1px solid #00800080;
`;

const Status = styled.div`
	position: absolute;
	float: left;
	margin: 36px 0 0 30px;
	height: 14px;
	width: 14px;
	border-radius: 50%;
	background-color: #008000;
`;

const Name = styled.div`
	color: ${FONT_COLOR.primary};
	font-weight: 600;
`;

const AboutMe = styled.div`
	color: ${FONT_COLOR.primary}80;
	font-size: ${FONT_SIZE.sm};
	margin-top: 1px;
`;

const Slider = styled.div`
	background-color: ${COLOR.tertiary};
	outline: 2px solid ${COLOR.secondary};
	height: 5px;
	width: 100%;
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

function LoadingChats() {
	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: 'Lato',
				fontSize: FONT_SIZE.xl,
				color: 'white',
				background:
					'radial-gradient(' +
					COLOR.secondary +
					', ' +
					COLOR.secondary +
					'00)',
			}}
		>
			Loading...
		</div>
	);
}

function Chat() {
	// Set to DirectMessage Defaults
	const [activeWidget, setActiveWidget] = useState('');
	const [chatSubtitle, setChatSubtitle] = useState('Loading...');
	const [activeWindow, setActiveWindow] = useState(LoadingChats());
	const [activeChat, setActiveChat] = useState('');
	const [chats, setChats] = useState(LoadingChats());

	let iconStyle = {
		height: '35px',
		width: '35px',
		color: 'white',
	};

	let widgets = {
		DirectMessage: [DirectMsg, <BiChat style={iconStyle}></BiChat>],
		GroupMessage: [
			GroupMsg,
			<HiUserGroup
				style={{ ...iconStyle, transform: 'translateY(-5%)' }}
			></HiUserGroup>,
		],
		Games: [() => {}, <FaGamepad style={iconStyle}></FaGamepad>],
		AFK: [() => {}, <FaBed style={iconStyle}></FaBed>],
		Settings: [
			() => {},
			<RiSettings4Line style={iconStyle}></RiSettings4Line>,
		],
	};

	function DirectMsg() {
		setActiveWidget('DirectMessage');
		setChatSubtitle('Chats');
		setChats(GetChats());
		setActiveWindow(DirectMessage());
		setActiveChat(
			PrimaryChat(
				'EskimoWhisperer',
				'https://www.w3schools.com/howto/img_avatar.png'
			)
		);
	}

	function GroupMsg() {
		setActiveWidget('GroupMessage');
		setChatSubtitle('Groups');
		setChats(GetGroups());
		setActiveWindow(GroupMessage());
		setActiveChat(
			PrimaryChat(
				'Happy Place',
				'https://www.w3schools.com/howto/img_avatar.png'
			)
		);
	}

	function Widgets() {
		let result = [];
		for (let k in widgets) {
			result.push(
				<Widget
					key={k}
					selected={k === activeWidget}
					onClick={() => {
						widgets[k][0]();
					}}
				>
					{widgets[k][1]}
				</Widget>
			);
		}
		return result;
	}

	setTimeout(() => {
		if (activeWidget === '') {
			DirectMsg();
		}
	}, 3000);
	return (
		<div>
			<Heading>
				<Verce size={FONT_SIZE.lg}>verce</Verce>
			</Heading>
			<AppContainer>
				<WidgetBar>{Widgets()}</WidgetBar>
				<ChatBar>
					<Subtitle>{chatSubtitle}</Subtitle>
					{activeChat}
					<div
						style={{
							marginTop: '12px',
							backgroundColor: FONT_COLOR.primary + 'cc',
							height: '3px',
						}}
					></div>
					<ChatsContainer>{chats}</ChatsContainer>
					<User>
						<div
							style={{ flex: '1', maxHeight: 'calc(100% - 6px)' }}
						>
							<Profile
								alt="profile"
								src="https://avatars.githubusercontent.com/u/67258053?s=160&v=4"
							></Profile>
							<Status></Status>
							<div
								style={{
									float: 'left',
									display: 'flex',
									flexDirection: 'column',
									marginLeft: '10px',
									marginTop: '6px',
								}}
							>
								<Name>Oz0neX</Name>
								<AboutMe>Alive... For now</AboutMe>
							</div>
						</div>
						<Slider></Slider>
					</User>
				</ChatBar>
				{activeWindow}
			</AppContainer>
		</div>
	);
}

export default Chat;
