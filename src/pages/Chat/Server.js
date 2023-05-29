import styled from 'styled-components';
import { COLOR } from '../../constants';

const Container = styled.div`
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

export function GetGroups() {}

export function GroupMessage() {
	return (
		<Container>
			<Banner></Banner>
			<ChannelName>#GENERAL</ChannelName>
		</Container>
	);
}
