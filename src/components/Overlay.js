function Overlay(props) {
	if (props.fade) {
		return (
			<div
				style={{
					position: 'relative',
					height: '0px',
					width: '100%',
					zIndex: 10,
				}}
			>
				<div id={props.id} style={props.style}>
					g
				</div>
			</div>
		);
	}
}

export default Overlay;
