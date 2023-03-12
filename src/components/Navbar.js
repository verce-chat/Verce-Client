import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Verce } from './Logo';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../constants';

const Nav = styled.nav`
	width: 100%;
	height: 60px;
	background-color: #082032;
	display: flex;
	flex-direction: row;
`;

const LeftContainer = styled.div`
	flex: 30%;
	display: flex;
	align-items: center;
	padding: 10px 20px;
`;

const RightContainer = styled.div`
	flex: 70%;
	display: flex;
	justify-content: flex-end;
	padding-right: 10px;
`;

const Center = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: ${COLOR.secondary};
	position: absolute;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	padding: 5px 10px;
	padding-left: 0px;
	border-radius: 300px;
	border: solid 2px black;
`;

const LoginButton = styled.button`
	all: unset;
	padding: 0px 20px;
	color: ${FONT_COLOR.primary};
	background-color: ${COLOR.tertiary};
	height: 100%;
	font-family: 'Lato';
	font-weight: bold;
	border-radius: 2px;
	margin: 8px 0px;
	&:hover {
		animation-name: ${keyframes`
			0% {
				background-color: ${COLOR.tertiary};
				outline-width: 0px;
			}
			100% {
				background-color: ${COLOR.tertiaryHover};
				outline-width: 1px;
			}
		`};
		animation-duration: 0.1s;
		background-color: ${COLOR.tertiaryHover};
		outline: 1px solid ${FONT_COLOR.primary};
		cursor: pointer;
	}
`;

const colorChange = (normal, hovering) => {
	return keyframes`
		0% { color: ${normal}};
		100% { color: ${hovering}};
	`;
};

const NavbarLink = styled(Link)`
	font-family: 'Open Sans';
	font-size: ${FONT_SIZE.lg};
	text-decoration: none;
	padding: 0px 40px;
	padding-right: ${(props) => (props.shortpadding ? '30px' : '40px')};
	color: ${(props) =>
		props.secondary ? FONT_COLOR.secondary : FONT_COLOR.primary};
	&:hover {
		color: ${(props) =>
			props.secondary
				? FONT_COLOR.secondaryHover
				: FONT_COLOR.primaryHover};
		animation-name: ${(props) => {
			return props.secondary
				? colorChange(FONT_COLOR.secondary, FONT_COLOR.secondaryHover)
				: colorChange(FONT_COLOR.primary, FONT_COLOR.primaryHover);
		}};
		animation-duration: 0.2s;
	}
`;

const DownloadButton = styled.div`
	background-color: ${COLOR.primary}56;
	border: 1px solid black;
	border-radius: 20px;
	padding: 6px 0px;
`;

/* TODO:
 * Flickering background for download button every 10 seconds? (Entice the user to install)
 * Change the login button on top right, lowk cringe
 * Background for download needs color on hover
 */
function Topnav() {
	return (
		<Nav>
			<LeftContainer>
				<button
					style={{ all: 'unset', cursor: 'pointer' }}
					onClick={() => {
						window.location.href = '/';
					}}
				>
					<Verce size={FONT_SIZE.xxl}>verce</Verce>
				</button>
			</LeftContainer>
			<RightContainer>
				<div style={{ height: 'calc(100% - 16px)' }}>
					<LoginButton
						onClick={() => {
							window.location.href = '/signin';
						}}
					>
						Login
					</LoginButton>
				</div>
			</RightContainer>
			<Center>
				<NavbarLink>Discover</NavbarLink>
				<NavbarLink>Support</NavbarLink>
				<DownloadButton>
					<NavbarLink>Download</NavbarLink>
				</DownloadButton>
				<NavbarLink>News</NavbarLink>
				<NavbarLink>Security</NavbarLink>
			</Center>
		</Nav>
	);
}

export default Topnav;
