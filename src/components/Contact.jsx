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

                <p className='address-container'></p>
                
                <a href="https://maps.google.com/maps?q=2648+34th+Ave+S,+Minneapolis,+MN+55406" target="_blank" rel="noreferrer noopener">
                    Location: 2648 34th Ave S, Minneapolis, MN 55406
                </a>
                    <p>
                        Hours:
                        Mon - Fri: 9AM - 5PM
                        Sat: Closed         
                        Sun: Closed
                    </p>
            </div>
            <div className='right-content'>
                <img href="geo:44.9539943,-93.2260099?q=2648 34th Ave South
                        Minneapolis, MN 55418"src={locationImg} />
            </div>
           
        </section>
    )
}

export default Contact