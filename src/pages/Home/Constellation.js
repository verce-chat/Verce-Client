import ScriptInjector from '../../components/ScriptInjector';
import React, { useState, useEffect } from 'react';

/*
KNOWN ISSUES
- Particles are stretched on window expansion
-
-
*/

function debounce(fn, ms) {
	let timer;
	return (_) => {
		clearTimeout(timer);
		timer = setTimeout((_) => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

function Constellation() {
	const [dimensions, setDimensions] = useState({
		width: window.innerWidth - 120,
	});

	useEffect(() => {
		const debounceHandler = debounce(() => {
			setDimensions({
				width: window.innerWidth - 120,
			});
		}, 1000);
		window.addEventListener('resize', debounceHandler);
	});
	const init = `
	particlesJS("particles-js", {
		"particles":{
			"number":{
				"value":80,
				"density":{
					"enable":true,
					"value_area":800
				}
			},
			"color":{
				"value":"#ffffff"
			},
			"shape":{
				"type":"circle",
				"stroke":{
					"width":0,
					"color":"#000000"
				},
				"polygon":{
					"nb_sides":5
				},
				"image":{
					"src":"img/github.svg",
					"width":100,
					"height":100
				}
			},
			"opacity":{
				"value":0.7,
				"random":false,
				"anim":{
					"enable":false,
					"speed":1,
					"opacity_min":0.1,
					"sync":false
				}
			},
			"size":{
				"value":3,
				"random":true,
				"anim":{
					"enable":false,
					"speed":40,
					"size_min":0.1,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
				"distance":150,
				"color":"#ffffff",
				"opacity":0.4,
				"width":1
			},
			"move":{
				"enable":true,
				"speed":2,
				"direction":"top",
				"random":true,
				"straight":true,
				"out_mode":"out",
				"bounce":false,
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
					"mode":"repulse"
				},
				"onclick":{
					"enable":false,
					"mode":"push"
				},
				"resize":true
			},
			"modes":{
				"grab":{
					"distance":400,
					"line_linked":{
					"opacity":1
					}
				},
				"bubble":{
					"distance":400,
					"size":40,
					"duration":2,
					"opacity":8,
					"speed":3
				},
				"repulse":{
					"distance":200,
					"duration":0.4
				},
				"push":{
					"particles_nb":4
				},
				"remove":{
					"particles_nb":2
				}
			}
		},
			"retina_detect":true
	});
	`;
	return (
		<div>
			<style>
				{`
				* {
					z-index: 1;
				}

				#refPoint {
					position: relative
					width: 0;
					height: 0;
				}
				
                #particles-js {
                    position: absolute;
                    height: 652px;
                    width: ` +
					dimensions.width +
					`px;
                    z-index: 0;
                }
                `}
			</style>
			<div id="refPoint">
				<div id="particles-js"></div>
			</div>
			<ScriptInjector
				id="particlejsCDN"
				src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
				initFunction={init}
			/>
		</div>
	);
}

export default Constellation;
