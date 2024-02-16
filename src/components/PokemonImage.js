import React, { useState } from 'react';
import { Image } from "@chakra-ui/core";

export default function PokemonImage(props) {
	const image1 = `url("${props.sprites.front_default}")`;
	const image2 = `url("${props.sprites.back_default}")`;

	const [image, setImage] = useState(image1);
	return (
		<Image 
			className='img-fluid w-25 m-auto'
			style={{ content: image }}
			onMouseEnter={() => setImage(image2)}
			onMouseOut={() => setImage(image1)}
			alt='Pokemon'
		/>
	)
}
