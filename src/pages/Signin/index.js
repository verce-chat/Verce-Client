import styled from 'styled-components';
import Topnav from '../../components/Navbar';
import Greybg from '../../assets/images/greybg.png';
import { COLOR, FONT_COLOR } from '../../constants';

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

const LoginBox = styled.div`
	position: absolute;
	top: calc(50% + 25px);
	left: 50%;
	background-color: ${COLOR.secondary};
	height: 300px;
	width: 450px;
	border: 3px solid ${FONT_COLOR.primary};
	border-radius: 5px;
	transform: translate(-50%, -50%);
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
			<LoginBox></LoginBox>
		</div>
	);
}

export default Signin;
