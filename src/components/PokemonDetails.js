import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetails() {
	const [pokemon, setPokemon] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		fetchPokemonDetails();
	}, []);

	const fetchPokemonDetails = async () => {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const data = await fetch(url);
		const json = await data.json();
		setPokemon(json);
	}

	const getAbilities = () => {
		const abilities = [];
		pokemon.abilities.forEach((ability) => {
			abilities.push(capitalise(ability.ability.name));
		});
		return(abilities.join(", "))
	}

	const getMoves = () => {
		if (pokemon.moves.length === 0) {
			return "No moves";
		}
		const moves = [];
		pokemon.moves.forEach((move) => {
			moves.push(capitalise(move.move.name));
		});
		return(moves.join(", "));
	}

	const getTypes = () => {
		const types = [];
		pokemon.types.forEach((type) => {
			types.push(capitalise(type.type.name));
		});
		return(types.join(", "));
	}

	const getStats = (x) => {
		const stats = {};
		pokemon.stats.forEach((stat) => {
			stats[stat.stat.name] = stat.base_stat;
		});
		return(stats[x]);
	}

	const capitalise = (name) => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		return name;
	};

	if (pokemon === null) {
		return <div className="container text-white">Loading Pokemon...</div>
	}

	return (
		<div className="container card my-3">
			<div className="card-body d-flex flex-column justify-content-center">
				{(pokemon.sprites.front_default === "") && <h4 className="text-center">Image not available</h4>} 
				{pokemon.sprites.front_default && <img className='img-fluid w-25 m-auto' src={ pokemon.sprites.front_default } alt='Pokemon front face' />}
				<h3 className="card-title text-center">{ capitalise(pokemon.name) }</h3>
				<table className="container table table-dark table-striped-columns text-center">
					<thead>
						<tr>
							<td>Stats</td>
							<td>Value</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Height</td>
							<td>{ pokemon.height }</td>
						</tr>
						<tr>
							<td>Weight</td>
							<td>{ pokemon.weight }</td>
						</tr>
						<tr>
							<td>Base Experience</td>
							<td>{ pokemon.base_experience }</td>
						</tr>
						<tr>
							<td>Hp</td>
							<td>{ getStats("hp") }</td>
						</tr>
						<tr>
							<td>Attack</td>
							<td>{ getStats("attack") }</td>
						</tr>
						<tr>
							<td>Defense</td>
							<td>{ getStats("defense") }</td>
						</tr>
						<tr>
							<td>Special Attack</td>
							<td>{ getStats("special-attack") }</td>
						</tr>
						<tr>
							<td>Special Defense</td>
							<td>{ getStats("special-defense") }</td>
						</tr>
						<tr>
							<td>Speed</td>
							<td>{ getStats("speed") }</td>
						</tr>
						<tr>
							<td>Types</td>
							<td>{ getTypes() }</td>
						</tr>
						<tr>
							<td>Abilities</td>
							<td>{ getAbilities() }</td>
						</tr>
					</tbody>
				</table>
				<p>Moves: { getMoves() }</p>
				<div className='row'>
					<p>More Images:</p>
					{Object.entries(pokemon.sprites).filter((imageSrc) => imageSrc[1] !== null).filter((imageSrc) => typeof(imageSrc[1]) !== "object").map((imageSrc) => {
						return(
							<div key={ imageSrc[1] } className='col-sm-12 col-md-4 col-lg-3 d-flex'>
								<img className='img-fluid m-auto' src={ imageSrc[1] } alt={ imageSrc[0] } />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
