import styled from 'styled-components';
import { FONT_SIZE } from '../constants';
// https://maxibestof.one/typefaces/varela-round

export const Verce = styled.div`
	font-family: 'Varela Round';
	font-size: ${(props) => (props.size ? props.size : FONT_SIZE.xxl)};
	color: white;
`;
