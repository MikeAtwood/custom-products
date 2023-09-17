import '../App.css'
import locationImg from '../assets/img/location.png'
import 'animate.css'

const Contact = () => {
    return (
        <section className="contact" id='contact'>
            <div className="left-content">
                <h2 className="animate__animated animate__bounce">Contact Us</h2>
                <p>Phone: 612-782-6930</p>
                <p>Fax: 612-782-6923</p>
                <p>Email: info@customproductsandservices.com</p>

                <p>Address:</p>
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