import bottomLeft from './images/bg__left.svg'
import topRight from './images/bg__top-right.svg'
import bottomRight from './images/bg__btm-right.svg'
import './App.css';
import Phone from './components/Phone';

function App() {
	return (
		<div className="App h-screen relative flex items-center justify-center gap-x-8 bg-purple-100">
			<Phone />
			<img src={bottomLeft} className="absolute bottom-0 left-0" alt="Bottom Left" />
			<img src={topRight} className="absolute top-0 right-0" alt="Top Right" />
			<img src={bottomRight} className="absolute bottom-0 right-0" alt="Bottom Right" />
		</div>
	);
}

export default App;
