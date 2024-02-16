import React from 'react';

export default function About() {
	return (
		<div className='container text-white'>
			<div className='my-3'>
				<h3>What is this?</h3>
				<p>This website provides data of all the Pokémons.Using this website, you can consume information on Pokémon, their moves, abilities, and much, much more.</p>
			</div>
			
			<div className='my-3'>
				<p className='text-center'>Source: <a className='text-danger' href='https://pokeapi.co/' target='_blank' rel="noreferrer">PokeAPI</a></p>
				<p>Pokedexes: <span className='text-success'>https://pokeapi.co/api/v2/pokedex</span></p>
				<p>Pokemons: <span className='text-success'>https://pokeapi.co/api/v2/pokedex/&lt;PokedexId&gt;</span></p>
				<p>Pokemon data: <span className='text-success'>https://pokeapi.co/api/v2/pokemon/&lt;PokemonId&gt;</span></p>
				<p>Pokemon data displayed:
					<span className='text-success'>
						<ul>
							<li>Height</li>
							<li>Weight</li>
							<li>Base Experience</li>
							<li>HP</li>
							<li>Attack</li>
							<li>Defense</li>
							<li>Special Attack</li>
							<li>Special Defense</li>
							<li>Speed</li>
							<li>Types</li>
							<li>Abilities</li>
						</ul>
					</span>
				</p>
			</div>
		</div>
	)
}
