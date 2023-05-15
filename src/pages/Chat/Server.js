import styled from 'styled-components';
import { COLOR } from '../../constants';

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
