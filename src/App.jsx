import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Services from './components/Services';
import Projects from './components/Projects';
import Info from './components/Info';

function App() {

  return (
    <>
     <Navbar />
     <Home />
     <About />
     <Services />
     <Products />
     <Contact />
     <Projects />
     <Info />
    </>
  )
}

export default App
