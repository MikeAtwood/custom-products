import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
// import Products from './components/Products';
import Services from './components/Services';
// import Projects from './components/Projects';
// import Info from './components/Info';
import Footer from './components/Footer'
import Router from './Router.jsx'

function App() {

  return (
    <div className='main-container'>
     <Router />
      <Navbar />
      <Home />
     <Hero />
     <About />
     <Services />
     {/* <Products /> */}
     <Contact />
     <Footer />
     {/* <Projects /> */}
     {/* <Info /> */}
    </div>
  )
}

export default App
