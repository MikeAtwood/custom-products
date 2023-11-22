import '../App.css'
import about1 from '../assets/aboutImg/aboutImg1.jpeg'
import about2 from '../assets/aboutImg/aboutImg2.jpeg'
import about3 from '../assets/aboutImg/aboutImg3.jpeg'

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about" id="about">
                <div className="about-container">
                    <h1>About Us</h1>
                    <h2>    
                        Our company is based on the belief that our customers needs are of the utmost importance. Our entire team 
                        is committed to meeting those needs. As a result, a high percentage of our business is from repeat customers and 
                        referrals. We would welcome the opportunity to earn your trust and deliver you the best service in the industry.
                    </h2>
                </div>
                <div className='about-img'>
                    <img src={about1} alt='aboutImageOne'/>
                    <img src={about2} alt='aboutImageTwo'/>
                    <img src={about3} alt='aboutImageThree'/>
                </div>
            </div>
        </div>
    )
}

export default About