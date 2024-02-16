import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PokemonCard(props) {
	const [pokemon, setPokemon] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetchPokemonData();
	}, []);

	const fetchPokemonData = async () => {
		let url = props.url.replace("-species", "");
		try {
			const data = await fetch(url);
			const json = await data.json();
			setPokemon(json);
		} catch (e) {
			console.log(`Error fetching pokemon details: PokemonCard: ${e}`);
		}
	};

	const showPokemon = async () => {
		const url = props.url.split("/");
		const id = url[6];
		navigate(`/pokemon/${id}`);
	};

	const capitalise = (name) => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		return name;
	};

	if (pokemon === null) {
		return (<div className="card m-3">Loading...</div>);
	}

	return (
		<div className="card my-3">
			{(pokemon.sprites.front_default === "") && <h4 className="text-center">Image not available</h4>} 
			{pokemon.sprites.front_default && <img className='img-fluid w-50 m-auto' src={ pokemon.sprites.front_default } alt='Pokemon front face' />}
			<div className="card-body d-flex flex-column justify-content-center">
				<h3 className="card-title text-center">{ capitalise(pokemon.name) }</h3>
				<button className="btn btn-primary" onClick={ showPokemon }>Check Details</button>
			</div>
		</div>
	)
}



