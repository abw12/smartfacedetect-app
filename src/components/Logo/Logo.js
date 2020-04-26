import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import faceid from './faceid.png';

const Logo = () => {
	return(
		<div className='ma4 mt0 '>
			<Tilt className="Tilt br3 shadow-2" options={{ max : 25 }} style={{ height: 125, width: 120 }} >
 				<div className="Tilt-inner pa3 ">
 					<img style={{paddingTop:'5px'}} alt='logo' src={faceid}/> 
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;