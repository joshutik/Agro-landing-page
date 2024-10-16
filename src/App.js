// import logo from './logo.svg';
import './App.css';
import AboutSection from './Components/AboutSection/AboutSection';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import HeroPage from './Components/HeroPage/HeroPage';
import NavigationBar from './Components/NavigationBar/Navigation';
import OurServicesSection from './Components/OurServicesSection/OurServicesSection';
import Partnership from './Components/Partnership/Partnership';
import Testimonials from './Components/Testimonials/Testimonials';
import YoutubeLink from './Components/YoutubeLink/YoutubeLink';
// 
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroPage/>
      <AboutSection/>
      <OurServicesSection/>
      <Testimonials/>
      <Contact/>
      <YoutubeLink/>
      <Partnership/>
      <Footer/>
    </div>
  );
}

export default App;
