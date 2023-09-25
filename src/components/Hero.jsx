import '../App.css'
// import heroImg from '../assets/img/hero-img.jpeg'
// import heroImg from '../assets/img/hero-mn.jpeg'
import heroImg from  '../assets/img/hero2.jpeg'


const Hero = () => {
    return (
        <section className='hero-container' id="home">
            
            <img src={heroImg} />
            <h1 className='animate__animated animate__backInRight'>Custom Products & Services</h1>
            <p>Serving the greater Minneapolis area since 19XX</p>
        </section>
    )
}

export default Hero