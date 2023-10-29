import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
// import Products from './components/Products';
import Services from './components/Services';
// import Projects from './components/Projects';
// import Info from './components/Info';
import Footer from './components/Footer'
function App() {

  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
