
import './App.css';
import Navbar from '../src/Navbar/Navbar';
import BelowSection from './Navbar/BelowSection';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import TopBanner from './Banner/TopBanner';

function App() {
  document.title ="Online Shopping Site for Fashion"
  return (
    <div className="App">
   
      <Navbar/>
      <BelowSection/>

      <br/>
      <Banner/>
      <TopBanner/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
