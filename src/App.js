import './App.css';
import Home from './components/Home/Home';

import About from './components/Aboutus/About';

import DirectorDesk from './directordesk';
import Workshop from './components/Workshop';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Team from './components/Team/Team';
import Amba from './components/Ambassador/Amba';
import Sunburn from './components/Sunbrn';

function App() {
  return (
    <div className="App">
    

    <Home/>
    <About/>
    <DirectorDesk/>
    <Workshop/>
    <Testimonial/>
    <Amba/>
    <Sunburn/>
    <Team/>
    <Footer/>

      
    </div>
  );
}

export default App;
