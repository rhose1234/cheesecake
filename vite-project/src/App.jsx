import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Menu from './Components/Menu';
import Blog from './Components/Blog';

function App() {
  

  return (
    <>
     <Hero />
   <About />
   <Menu />
   <Blog />
    </>
  )
}

AOS.init();
export default App
