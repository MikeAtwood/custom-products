import '../App.css'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Footer from '../components/Footer'



const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home