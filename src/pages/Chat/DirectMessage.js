import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_COLOR } from '../../constants';
import { BsPinAngleFill } from 'react-icons/bs';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { Messaging } from '../../components/Messaging';

const Container = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const ChatButtonStyle = styled.button`
	font-family: 'Lato';
	all: unset;
	height: 40px;
	width: 100%;
	margin-top: 5px;
	border-radius: 2px;
	padding: 5px 10px;
	color: grey;
	cursor: pointer;
	&:hover {
		color: lightgrey;
		background-color: ${COLOR.primary};
	}
`;

const PrimaryChatButtonStyle = styled(ChatButtonStyle)`
	width: auto;
	margin-top: 10px;
	outline: solid 2px ${COLOR.tertiary};
	background-color: ${COLOR.primary};
	color: ${FONT_COLOR.primary};
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
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: flex-end;
	width: 200px;
	background-color: #204588;
	height: calc(100% - 40px);
	padding: 20px;
`;

const ProfileBackground = styled.div`
	border-radius: 10px 10px 0px 0px;
	background-color: #abcdef;
	height: 120px;
	width: 100%;
`;

const Pin = styled(BsPinAngleFill)`
	cursor: pointer;
	height: 20px;
	width: 20px;
	color: ${FONT_COLOR.primary};
	margin-right: 10px;
	&:hover {
		color: ${FONT_COLOR.primaryHover};
	}
`;

const MagnifyingGlass = styled(RxMagnifyingGlass)`
	cursor: pointer;
	height: 15px;
	width: 15px;
	color: ${FONT_COLOR.primary};
	margin-left: -20px;
	&:hover {
		color: ${FONT_COLOR.primaryHover};
	}
`;

let msgs = [
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

export function PrimaryChat(name, image) {
	return (
		<PrimaryChatButtonStyle>
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
		</PrimaryChatButtonStyle>
	);
}

// TODO: Implement, image & description functionality
export function ChatButton(name, image) {
	return (
		<ChatButtonStyle key={name}>
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
			'Example Man ' + (i + 1),
			'https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg'
		);
	}
	return arr;
}

export function DirectMessage() {
	let usr = 'EskimoWhisperer'; // temporary user
	return (
		<Container>
			<TopContainer>
				{usr}
				<Widgets>
					<Pin></Pin>
					<SearchBar placeholder="Search"></SearchBar>
					<MagnifyingGlass></MagnifyingGlass>
				</Widgets>
			</TopContainer>
			<Container style={{ flexDirection: 'row' }}>
				{Messaging(usr, msgs)}
				<InfoContainer>
					<ProfileBackground></ProfileBackground>
					<img
						alt="DirectProfile"
						src="https://www.w3schools.com/howto/img_avatar.png"
						style={{
							aspectRatio: '1/1',
							height: '100px',
							borderRadius: '50%',
							marginTop: '-75px',
						}}
					></img>
					<div
						style={{
							color: FONT_COLOR.primary,
							fontSize: FONT_SIZE.xl,
							fontWeight: '600',
							marginTop: '2px',
						}}
					>
						{usr}
					</div>
					<div
						key="spacer"
						style={{
							backgroundColor: COLOR.tertiary,
							height: '3px',
							width: 'calc(100% - 40px)',
							marginTop: '10px',
							borderRadius: '10px',
						}}
					></div>
				</InfoContainer>
			</Container>
		</Container>
	);
}
