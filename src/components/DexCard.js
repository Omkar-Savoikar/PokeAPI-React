import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DexCard(props) {
	const [pokedex, setPokedex] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const showPokemon = () => {
		const id = props.url.split('/')[6];
		navigate(`/pokedex/${id}`);
	};

	const fetchData = async () => {
		try {
			const data = await fetch(props.url);
			const json = await data.json();
			setPokedex(json);
		} catch (e) {
			console.log(`Error fetching pokedex details: DexCard: ${e}`);
			return ("Error in fetching description");
		}
	};

	const getDescription = () => {
		const desc = pokedex.descriptions[pokedex.descriptions.length - 1];
		return (desc?.description || "No description available");
	}

	const capitalise = (name) => {
		let words = name.split("-");
		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}
		name = words.join("-");
		return name;
	};

	if (pokedex === null) {
		return (
			<div className='container text-light'>
				<h1 className='mt-3'>Pokdexes</h1>
				<div className="row">
					<div className="container text-light text-center">Loading Pokedexes...</div>
				</div>
			</div>
		);
	}

	return (
		<div className="card my-3" style={{height: "220px"}}>
			<div className="card-header text-center">
				<h2>{capitalise(pokedex.name)}</h2>
			</div>
			<div className="card-body">
				<p className='card-text'>{getDescription()}</p> 
				<button className="btn btn-primary position-absolute start-50 translate-middle" style={{bottom: "10px"}} onClick={showPokemon}>Check Pokemons</button>
			</div>
		</div>
	);
}
