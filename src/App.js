import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/about/About';
import Skills from './components/Skills';

function App() {
	return (
		<div className="bg-gray-100 h-screen">
			<Navbar />
			<Home />
			<About />
			<Skills />
		</div>
	);
}

export default App;
