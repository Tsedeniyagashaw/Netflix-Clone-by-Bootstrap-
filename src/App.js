import './App.css';
import './styles/bootstrap.css'
import './styles/style.css'
import Home from './components/Home';
import Ads from './components/Ads';
import Display from './components/Display';
import Banner from './components/Banner';
import ForKids from './components/ForKids';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Getstarted from './components/Getstarted';

function App() {
  return (
    <div className="App">
    <Home />
    <Ads />
    <Display />
    <Banner />
    <ForKids/>
    <FAQ/>
    <Getstarted />
    <Footer/>
    </div>
  );
}

export default App;

