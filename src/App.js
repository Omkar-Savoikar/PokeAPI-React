import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import DexHolder from './components/DexHolder';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';

function App() {
	return (
		<div>
			<Navbar />
			<Router>
				<Routes>
					<Route path="/" exact element={<DexHolder />} />
					<Route path="/pokedex/:id" element={<Pokedex />} />
					<Route path="/pokemon/:id" element={<PokemonDetails />} />
					<Route path="/about" exact element={<About />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
