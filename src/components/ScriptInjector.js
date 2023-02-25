import { useEffect } from 'react';

function ScriptInjector(props) {
	useEffect(() => {
		if (props.id && document.getElementById(props.id)) return; // If id already exists, return
		const thirdPartyScript = document.createElement('script');
		thirdPartyScript.src = props.src;
		props.id
			? (thirdPartyScript.id = props.id)
			: console.log(
					'ID not set for script, an ID should be passed to ensure there are no copies.'
			  );
		document.body.appendChild(thirdPartyScript);
		if (!props.initFunction) console.log('no init function');
		thirdPartyScript.onload = () => {
			const initFunction = document.createElement('script');
			initFunction.setAttribute('type', 'text/javascript');
			initFunction.innerHTML = props.initFunction;
			document.body.appendChild(initFunction);
		};
	});
	return null;
}

export default ScriptInjector;
