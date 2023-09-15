import '../App.css'
import locationImg from '../assets/img/location.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="left-content">
                <h2>Contact Us</h2>
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
           
        </div>
    )
}

export default Contact