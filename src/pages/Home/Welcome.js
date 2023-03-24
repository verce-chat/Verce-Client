import { Verce } from '../../components/Logo';
import styled from 'styled-components';
import background from '../../assets/images/background2.png';
import windowsIcon from '../../assets/images/windows.png';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../../constants';
import { useState, useEffect } from 'react';

const containerPadding = '50px';

const Container = styled.div`
	width: calc(100%-100px);
	height: 600px;
	margin: 50px;
	margin-bottom: 0px;
	border-radius: 20px;
	background: center no-repeat url(${background});
	background-size: cover;
	display: flex;
	flex-direction: column;
	border: 2px ${COLOR.tertiary} solid;
	border-bottom: none;
	overflow: hidden;
`;

const TopContainer = styled.div`
	flex: 50%;
	display: flex;
	flex-direction: row;
	align-items: top;
	padding-top: ${containerPadding};
`;

const BottomContainer = styled.div`
	flex: 50%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-end;
	padding-bottom: calc(${containerPadding} - 0.5 * ${containerPadding});
`;

const LeftContainer = styled.div`
	flex: 50%;
	align-items: center;
	padding-left: ${containerPadding};
	font-family: 'Open Sans';
`;

const RightContainer = styled.div`
	display: flex;
	align-self: flex-end;
	justify-content: flex-end;
	flex: 50%;
	padding-right: ${containerPadding};
`;

const Download = styled.button`
	display: flex;
	float: left;
	max-width: 250px;
	font-family: 'Varela Round';
	word-wrap: break-word;
	background-color: #1f1f1f;
	color: ${FONT_COLOR.primary};
	border: 1px solid ${FONT_COLOR.primary};
	font-size: ${FONT_SIZE.lg};
	cursor: pointer;
	padding: 0px 10px;
	margin: 0;
	align-items: center;
	&:hover {
		color: ${FONT_COLOR.secondaryHover};
		border-color: ${FONT_COLOR.primaryHover};
	}
`;

const Stripe = styled.div`
	position: absolute;
	top: ${(props) => (props.top ? props.top : '0px')};
	left: ${(props) => (props.left ? props.left : '0px')};
	width: 1000px;
	height: 15px;
	border: 2px solid
		${(props) =>
			props.borderTransparency
				? COLOR.secondary + props.borderTransparency
				: COLOR.secondary + 'C0'};
	background-color: ${(props) =>
		props.transparency
			? COLOR.tertiary + props.transparency
			: COLOR.tertiary + '30'};
	transform: rotate(-50deg);
`;

const TitleText = styled.div`
	-webkit-text-stroke: 2px white;
`;

function WelcomeContainer(props) {
	const [downloadBoxHeight, setDownloadBoxHeight] = useState(10);
	useEffect(() => {
		if (downloadBoxHeight === 10) return;
		document.getElementById('downloadText').style.transform =
			'translateY(calc(' + downloadBoxHeight + 'px - 100% + 3px))';
	}, [downloadBoxHeight]);

	return (
		<Container>
			<div
				style={{
					position: 'absolute',
					fontFamily: 'Lato',
					fontSize: FONT_SIZE.xxxl,
					color: 'white',
					top: '290px',
					left: '50%',
					lineHeight: '1.6em',
					transform: 'translateX(-50%)',
					textAlign: 'center',
				}}
			>
				<TitleText>The Dream,</TitleText>
				<div
					style={{
						fontSize: FONT_SIZE.xl,
						lineHeight: '1.3em',
					}}
				>
					...a place where you can meet a community of <br />
					people just like you.
				</div>
			</div>
			{props.children}
			<TopContainer>
				<LeftContainer>
					<div style={{ position: 'relative', width: '100%' }}>
						<Stripe left="130%" borderTransparency="B3" />
					</div>
				</LeftContainer>
				<RightContainer></RightContainer>
			</TopContainer>
			<BottomContainer>
				<LeftContainer>
					<Download>
						<nobr>
							Download{' '}
							<span style={{ fontSize: '20px' }}>verce</span> for
							<br />
							Windows
						</nobr>
						<img
							alt="Windows Icon"
							src={windowsIcon}
							style={{
								borderLeft: '1px solid',
								padding: '10px 0px 10px 10px',
								width: '30px',
								marginLeft: '10px',
							}}
							onLoad={(e) => {
								setDownloadBoxHeight(e.target.offsetHeight);
							}}
						/>
					</Download>
					<div
						id="downloadText"
						style={{
							fontSize: FONT_SIZE.sm,
							paddingLeft: '10px',
							float: 'left',
							color: 'gray',
						}}
					>
						Version 2.32.2, Windows 11
					</div>
				</LeftContainer>
				<RightContainer>
					<Verce size={FONT_SIZE.xxxxl}>verce</Verce>
				</RightContainer>
			</BottomContainer>
		</Container>
	);
}

export default WelcomeContainer;
