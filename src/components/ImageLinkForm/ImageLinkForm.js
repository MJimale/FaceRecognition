import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit, gap }) => {
	return(
		<div style={gap}>
			<p className= 'f3'>
				{'Enter URL of your image and I will detect the face in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form pa4 center br3 shadow-5 '>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv2 dib white' type='text' onClick={onButtonSubmit}>Detect</button>
				</div>	
			</div>
		</div>

	);
}




export default ImageLinkForm;