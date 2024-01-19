import '../App.css'
// import heroImg from '../assets/img/hero-img.jpeg'
// import heroImg from '../assets/img/hero-mn.jpeg'
import heroImg from  '../assets/img/hero2.jpeg'


const Hero = () => {
    return (
        <section className='hero-container' id="home">
            <img className='hero-img' src={heroImg} />
                <div className='hero-info'>
                    <h1 className='animate__animated animate__backInDown'>Custom Products & Services</h1>
                    <p className='animate__animated animate__backInDown'>Serving the greater Minneapolis area since 19XX</p>
                    <a href="mailto:info@customproductsandservices.com" className='email-button'>Email Us!</a>
                </div>
        </section>
    )
}

export default Hero

{/* <div>
<section className='hero-container' id="home">
    <img className='hero-img' src={heroImg} />
</section>    
<div className='hero-info'>
    <h1 className='animate__animated animate__backInDown'>Custom Products & Services</h1>
    <p className='animate__animated animate__backInDown'>Serving the greater Minneapolis area since 19XX</p>
    <a href="mailto:info@customproductsandservices.com" className='email-button'>Email Us!</a>
</div>
</div> */}