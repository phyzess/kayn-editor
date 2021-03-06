import React from 'react';

export default ( { height, width, fsColor = 'rgba(255, 255, 255, 1)' } ) => (
	<svg className = 'kayn__svg' width = { width } height = { height } viewBox = '0 0 18 18'>
		<g
			style = { { 
				// backgroundColor: fsColor === 'rgba(255, 255, 255, 1)' ? 'transparent' : fsColor,
				fill: fsColor === 'rgba(255, 255, 255, 1)' ? 'rgba(0, 0, 0, 0.5)' : fsColor,
			} }
		>
			<polygon points = '6 6.868 6 6 5 6 5 7 5.942 7 6 6.868' />
			<rect height = '1' width = '1' x = '4' y = '4' />
			<polygon points = '6.817 5 6 5 6 6 6.38 6 6.817 5' />
			<rect height = '1' width = '1' x = '2' y = '6' />
			<rect height = '1' width = '1' x = '3' y = '5' />
			<rect height = '1' width = '1' x = '4' y = '7' />
			<polygon points = '4 11.439 4 11 3 11 3 12 3.755 12 4 11.439' />
			<rect height = '1' width = '1' x = '2' y = '12' />
			<rect height = '1' width = '1' x = '2' y = '9' />
			<rect height = '1' width = '1' x = '2' y = '15' />
			<polygon points = '4.63 10 4 10 4 11 4.192 11 4.63 10' />
			<rect height = '1' width = '1' x = '3' y = '8' />
			<path d = 'M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z' />
			<path d = 'M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z' />
			<path d = 'M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z' />
			<rect height = '1' width = '1' x = '12' y = '2' />
			<rect height = '1' width = '1' x = '11' y = '3' />
			<path d = 'M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z' />
			<rect height = '1' width = '1' x = '2' y = '3' />
			<rect height = '1' width = '1' x = '6' y = '2' />
			<rect height = '1' width = '1' x = '3' y = '2' />
			<rect height = '1' width = '1' x = '5' y = '3' />
			<rect height = '1' width = '1' x = '9' y = '2' />
			<rect height = '1' width = '1' x = '15' y = '14' />
			<polygon points = '13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174' />
			<rect height = '1' width = '1' x = '13' y = '7' />
			<rect height = '1' width = '1' x = '15' y = '5' />
			<rect height = '1' width = '1' x = '14' y = '6' />
			<rect height = '1' width = '1' x = '15' y = '8' />
			<rect height = '1' width = '1' x = '14' y = '9' />
			<path d = 'M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z' />
			<rect height = '1' width = '1' x = '14' y = '3' />
			<polygon points = '12 6.868 12 6 11.62 6 12 6.868' />
			<rect height = '1' width = '1' x = '15' y = '2' />
			<rect height = '1' width = '1' x = '12' y = '5' />
			<rect height = '1' width = '1' x = '13' y = '4' />
			<polygon points = '12.933 9 13 9 13 8 12.495 8 12.933 9' />
			<rect height = '1' width = '1' x = '9' y = '14' />
			<rect height = '1' width = '1' x = '8' y = '15' />
			<path d = 'M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z' />
			<rect height = '1' width = '1' x = '5' y = '15' />
			<path d = 'M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z' />
			<rect height = '1' width = '1' x = '11' y = '15' />
			<path d = 'M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z' />
			<rect height = '1' width = '1' x = '14' y = '15' />
			<rect height = '1' width = '1' x = '15' y = '11' />
		</g>
		<polyline  
			style = { {
				stroke:'rgba(0, 0, 0, 0.65)',
				fill: 'transparent',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
				strokeWidth: 1,
			} }
			points = '5.5 13 9 5 12.5 13' 
		/>
		<line
			style = { { stroke: 'rgba(0, 0, 0, 0.65)' } }
			x1 = '11.63'
			x2 = '6.38'
			y1 = '11'
			y2 = '11'
		/>
	</svg>
);