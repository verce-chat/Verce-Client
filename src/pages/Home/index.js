import Topnav from '../../components/Navbar';
import WelcomeContainer from './Welcome';
import Description from '../../components/Description';
import Constellation from './Constellation';
import chatImage from '../../assets/images/image1.png';
import Overlay from '../../components/Overlay';
import { COLOR } from '../../constants';

function Home() {
	return (
		<div>
			<Topnav />
			<WelcomeContainer>
				<Constellation />
			</WelcomeContainer>
			<Overlay
				fade
				id="fade1"
				style={{
					position: 'absolute',
					height: '300px',
					width: '100%',
					backgroundImage:
						'linear-gradient(to bottom, rgba(8, 32, 50, 1), rgba(8, 32, 50, 0.7), rgba(8, 32, 50, 0)',
				}}
			/>

			<Description
				title="Who are we?"
				rightContent={true}
				style={{
					outline: '2px solid ' + COLOR.tertiary,
					minHeight: '100px',
				}}
				image={chatImage}
				imageStyle={{
					maxWidth: '500px',
				}}
			>
				<div style={{ color: 'white', maxWidth: '500px' }}>
					We are VERCE, a communications platform that wishes to bring
					speed, customization, and innovation to the world. We are a
					company that wishes to bring it’s users the best online chat
					experience possible. Providing customizablity like no other
					platform.
				</div>
			</Description>
		</div>
	);
}

export default Home;
