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
                    <h2 className='about-info'>    
                        Our company is based on the belief that our customers needs are of the utmost importance. Our entire team 
                        is committed to meeting those needs. As a result, a high percentage of our business is from repeat customers and 
                        referrals. We would welcome the opportunity to earn your trust and deliver you the best service in the industry.
                    </h2>
                </div>
                <div className='about-img'>
                    <div className='image-container'>
                        <img src={about1} alt='aboutImageOne'/>
                        <div className='image-text'>
                            <h2>Where we work</h2>
                            <p> Serving Minneapolis, including St. Louis Park and Brooklyn Park, we bring our expertise to enhance the beauty of your community</p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={about2} alt='aboutImageTwo'/>
                        <div className='image-text'>
                            <h2>Transform Your Space</h2>
                            <p>Experience the difference with our export landscaping and cleanup services. From revitalizing outdoor areas to maintaining pristine enviroments, let us transform your space into a place you'll love to call home.</p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={about3} alt='aboutImageThree'/>
                        <div className='image-text'>
                            <h2>The Community</h2>
                            <p> We are deeply committed to giving back to the community we serve. As a public service company specializing in landscaping and street cleaning, we take pride in enhancing the beauty and cleanliness of our city. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About