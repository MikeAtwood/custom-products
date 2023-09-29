import '../App.css'
import locationImg from '../assets/img/location.png'
import 'animate.css'

const Contact = () => {
    return (
        <section className="contact" id='contact'>
            <div className="left-content">
                <h2 className="animate__animated animate__bounce">Contact Us</h2>
                <a href="tel:+6127826930">Phone: 612-782-6930</a>
                <p>Fax: 612-782-6923</p>
                <a href="mailto:info@customproductsandservices.com">Email: info@customproductsandservices.com</a>

                <p className='address-container'>Address:</p>
                <p>Custom Products & Services
                    2919 Central Avenue North East
                    Minneapolis, MN 55418</p>
            </div>
            <div className='right-content'>
                <img src={locationImg} />
            </div>
           
        </section>
    )
}

export default Contact