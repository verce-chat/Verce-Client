import styled from 'styled-components';
import Topnav from '../../components/Navbar';
import Greybg from '../../assets/images/greybg.png';
import { COLOR, FONT_COLOR, FONT_SIZE } from '../../constants';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100vh - 160px);
	margin: 50px;
	border-radius: 20px;
	outline: 3px solid ${COLOR.tertiary};
`;

const Top = styled.div`
	display: flex;
	flex: 50%;
	background: center no-repeat url(${Greybg});
	background-size: cover;
	border-radius: 20px 20px 0 0;
`;

const Bottom = styled.div`
	display: flex;
	align-items: flex-end;
	flex: 50%;
	outline: 2px solid ${COLOR.tertiary};
	background-color: ${COLOR.primary};
	border-radius: 0 0 20px 20px;
`;

const LoginContainer = styled.div`
	display: flex;
	position: absolute;
	align-items: center;
	color: white;
	top: calc(50% + 25px);
	left: 50%;
	background-color: ${COLOR.secondary};
	height: 300px;
	width: 550px;
	border: 3px solid ${FONT_COLOR.primary};
	border-radius: 5px;
	font-size: ${FONT_SIZE.base};
	font-family: 'Lato';
	transform: translate(-50%, -50%);
`;

const LeftContainer = styled.div`
	flex: 58%;
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
`;

const RightContainer = styled.div`
	flex: 42%;
	display: flex;
	padding: 30px;
	padding-left: 5px;
	font-size: ${FONT_SIZE.lg};
	align-items: center;
	flex-direction: column;
	text-align: center;
	color: #9f9f9f;
`;

const InputBox = styled.input`
	all: unset;
	color: black;
	background-color: #bfbfbf;
	width: calc(100% - 20px);
	border-radius: 3px;
	height: min-content;
	padding: 6px 10px;
	align-self: center;
	margin-bottom: 20px;
	margin-top: 8px;
	&:focus,
	&:not(:placeholder-shown) {
		background-color: white;
	}
`;

const Login = styled.button`
	all: unset;
	width: min-content;
	height: min-content;
	padding: 8px 15px;
	color: ${FONT_COLOR.primary};
	background-color: ${COLOR.tertiary};
	cursor: pointer;
	border-radius: 3px;
	align-self: flex-end;
	margin-top: 5px;
	&:hover {
		outline: solid 1px white;
		background-color: ${COLOR.tertiaryHover};
	}
`;

function Signin({ signin }) {
	return (
		<div>
			<Topnav />
			<Container>
				<Top></Top>
				<Bottom>
					<div
						style={{
							backgroundColor: COLOR.quarternary,
							width: '100%',
							height: '40%',
						}}
					></div>
				</Bottom>
			</Container>
			<LoginContainer>
				<LeftContainer>
					<nobr
						style={{ fontSize: FONT_SIZE.sm, fontWeight: 'bold' }}
					>
						EMAIL{' '}
						<span style={{ color: FONT_COLOR.secondary }}>*</span>
					</nobr>
					<InputBox placeholder="(e.g. example@gmail.com)" />
					<nobr
						style={{ fontSize: FONT_SIZE.sm, fontWeight: 'bold' }}
					>
						PASSWORD{' '}
						<span style={{ color: FONT_COLOR.secondary }}>*</span>
					</nobr>
					<InputBox placeholder="Enter password" />
					<a
						href="/reset"
						style={{
							fontSize: FONT_SIZE.sm,
							color: FONT_COLOR.tertiary,
							textDecoration: 'none',
							transform: 'translateY(-10px)',
						}}
					>
						Reset your password
					</a>
					<Login>LOGIN</Login>
				</LeftContainer>
				<RightContainer>
					Have a mobile device? Sign in with the QR Code below:
					<img
						alt="Not a rickroll"
						src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png?20200615212723"
						style={{
							display: 'block',
							maxWidth: '85%',
							width: 'auto',
							height: 'auto',
							marginTop: '15px',
							borderRadius: '2px',
						}}
					></img>
				</RightContainer>
				<div
					style={{
						position: 'absolute',
						color: '#9F9F9F',
						alignSelf: 'flex-end',
						transform: 'translateY(100%)',
						paddingTop: '8px',
					}}
				>
					Not registered?{' '}
					<a href="/signup" style={{ color: FONT_COLOR.tertiary }}>
						Make an account
					</a>
				</div>
			</LoginContainer>
		</div>
	);
}

export default Signin;
