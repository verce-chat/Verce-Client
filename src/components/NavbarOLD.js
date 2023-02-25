import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Verce } from './Logo';
import { FONT_COLOR, FONT_SIZE } from '../constants';

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
	padding-left: 20px;
`;

const RightContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 20px;
`;

const NavbarComponents = styled.div`
	padding: 0px 10px;
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

function Topnav() {
	return (
		<Nav>
			<LeftContainer>
				<NavbarComponents>
					<Verce size={FONT_SIZE.xxl}>verce</Verce>
				</NavbarComponents>
			</LeftContainer>
			<RightContainer>
				<NavbarLink>Download</NavbarLink>
				<NavbarLink>Blog</NavbarLink>
				<NavbarLink>Discover</NavbarLink>
				<NavbarLink>Support</NavbarLink>
				<NavbarLink secondary="true" shortpadding="true">
					Login
				</NavbarLink>
			</RightContainer>
		</Nav>
	);
}

export default Topnav;
