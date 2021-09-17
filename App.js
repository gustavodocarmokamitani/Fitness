import './App.css';
import './components/variable.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Body from './components/Body';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Cards />
      <Body />
    </div>
  );
}

export default App;
