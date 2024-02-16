import React, { useState, useEffect } from 'react';
import DexCard from './DexCard';

export default function DexHolder() {
	const [pokedexes, setPokedexes] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const url = "https://pokeapi.co/api/v2/pokedex?limit=32";
		try {
			const data = await fetch(url);
			const json = await data.json();
			setPokedexes(json.results);
		}
		catch (e) {
			console.log(`Error fetching pokedexes: DexHolder: ${e}`);
		}
	};

	if (pokedexes === null) {
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
		<div className='container text-light'>
			<h1 className='mt-3'>Pokdexes</h1>
			<div className="row">
				{pokedexes && pokedexes.filter((pokedex) => !pokedex.name.includes("updated-")).map((pokedex) => {
					return(
						<div key={ pokedex.url } className="col-sm-12 col-md-6 col-lg-3">
							<DexCard url={ pokedex.url } />
						</div>
					);
				})}
			</div>
		</div>
	);
}
