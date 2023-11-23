
import './App.css';
import Navbar from '../src/Navbar/Navbar';
import BelowSection from './Navbar/BelowSection';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import TopBanner from './Banner/TopBanner';
import Banner1 from './Banner/Banner1';
import Banner3 from './Banner/Banner3';
import Banner4 from './Banner/Banner4';

function App() {
  document.title ="Online Shopping Site for Fashion"
  return (
    <div className="App">
   
      <Navbar/>
      <BelowSection/>

      <br/>
      <Banner/>
      <Banner1/>
      <TopBanner/>
      <TopBanner />
      <Banner3/>
      <br/>
      <Banner4/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
