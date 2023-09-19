import '../App.css'
import heroImg from '../assets/img/hero-img.jpeg'


const Hero = () => {
    return (
        <section className='hero-container' id="home">
            
            <img src={heroImg} />
            <h1>Custom Products & Services</h1>
        </section>
    )
}

export default Hero