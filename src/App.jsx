import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './Components/Menu';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

function App() {
  

  return (
    <>
    <Navbar />
     <Hero />
   <About />
   <Menu />
   <Blog />
   <Contact />
    </>
  )
}

AOS.init();
export default App
