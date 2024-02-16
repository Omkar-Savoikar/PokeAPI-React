import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { useParams } from 'react-router-dom';

export default function Pokedex() {
	const { id } = useParams();
	const [pokemons, setPokemons] = useState(null);

	useEffect(() => {
		fetchPokemons();
	}, [id]);

	const fetchPokemons = async () => {
		try {
			const url = `https://pokeapi.co/api/v2/pokedex/${id}`;
			const data = await fetch(url);
			const json = await data.json();
			setPokemons(json.pokemon_entries);
		} catch (e) {
			console.log(`Error fetching pokemons: Pokedex: ${e}`);
		}
	};

	if (pokemons === null) {
		return <div className='container text-white'>Loading...</div>
	}

	return (
		<div className='container text-light'>
			<h1 className='mt-3'>Pokemons</h1>
			<div className="row">
				{pokemons && pokemons.map((pokemon) => {
					return(
						<div key={pokemon.entry_number} className="col-sm-6 col-md-4 col-lg-4">
							<PokemonCard url={pokemon.pokemon_species.url}  />
						</div>
					);
				})}
			</div>
		</div>
	);
}
