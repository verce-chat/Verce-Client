import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Verce } from './Logo';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../constants';
import { useEffect, useState } from 'react';

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
	padding: 10px 50px;
`;

const RightContainer = styled.div`
	flex: 70%;
	display: flex;
	justify-content: flex-end;
	padding-right: 10px;
`;

const Center = styled.div`
	font-family: 'Open Sans';
	font-size: ${FONT_SIZE.lg};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	background-color: ${COLOR.secondary};
	position: absolute;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	padding: 5px 10px;
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
	margin: 8px 40px;
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

const navbarLinkHover = () => {
	return keyframes`
		0% { color: ${FONT_COLOR.primary}; background-color: ${COLOR.primary + '00'}};
		100% { color: ${FONT_COLOR.primaryHover}; background-color: ${
		COLOR.primary + '56'
	}};
	`;
};

const NavbarLink = styled(Link)`
	text-decoration: none;
	padding: 0px 34px;
	margin: 0px 3px;
	color: ${FONT_COLOR.primary};
	&:hover {
		padding-top: 2px;
		padding-bottom: 2px;
		border-radius: 20px;
		outline: 1px solid black;
		color: ${FONT_COLOR.primaryHover};
		background-color: ${COLOR.primary}56;
		animation-name: ${navbarLinkHover};
		animation-duration: 0.2s;
	}
`;

const downloadLinkHover = () => {
	return keyframes`
		0% {color: ${FONT_COLOR.secondary}; background-color: #CBFFF316};
		100% {color: ${FONT_COLOR.secondaryHover}; background-color: #CBFFF336;};
	`;
};

const downloadLinkFlash = () => {
	return keyframes`
	0% {color: ${FONT_COLOR.secondary}; background-color: #CBFFF316};
	40% {color: ${FONT_COLOR.secondaryHover}; background-color: #CBFFF326;};
	50% {color: ${FONT_COLOR.secondary}; background-color: #CBFFF316};
	80% {color: ${FONT_COLOR.secondaryHover}; background-color: #CBFFF326;};
	100% {color: ${FONT_COLOR.secondary}; background-color: #CBFFF316};
	`;
};

const DownloadLink = styled(Link)`
	text-decoration: none;
	border: 1px solid black;
	border-radius: 20px;
	padding: 6px 40px;
	margin: 0px 3px;
	color: ${FONT_COLOR.secondary};
	background-color: #cbfff316;
	animation: ${({ flash }) => {
		console.log(flash);
		return flash
			? css`
					${downloadLinkFlash} 1s
			  `
			: 'none';
	}};

	&:hover {
		color: ${FONT_COLOR.secondaryHover};
		background-color: #cbfff336;
		animation-name: ${downloadLinkHover};
		animation-duration: 0.2s;
	}
`;

/* TODO:
 * Flickering background for download button every 10 seconds? (Entice the user to install)
 * Change the login button on top right, lowk cringe
 * Background for download needs color on hover
 */
function Topnav() {
	const [blink, setBlink] = useState(false);

	useEffect(() => {
		const blinkInterval = setInterval(() => {
			console.log('blink');
			setBlink(true);
		}, 5000);
		return () => {
			clearInterval(blinkInterval);
		};
	});

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
				<DownloadLink
					flash={blink ? true : false}
					onAnimationEnd={() => {
						if (blink) setBlink(false);
					}}
				>
					Download
				</DownloadLink>
				<NavbarLink>News</NavbarLink>
				<NavbarLink>Security</NavbarLink>
			</Center>
		</Nav>
	);
}

export default Topnav;
