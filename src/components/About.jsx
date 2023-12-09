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
                    <div className='image-container'>
                        <img src={about1} alt='aboutImageOne'/>
                        <div className='image-text'>
                            <h2>Where we work</h2>
                            <p>asdfasdfasdfasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh</p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={about2} alt='aboutImageTwo'/>
                        <div className='image-text'>
                            <h2>something something</h2>
                            <p>asdfasdfasdfasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh asdfasdfasdfasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh asdfasdfasdfasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh</p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={about3} alt='aboutImageThree'/>
                        <div className='image-text'>
                            <h2>Giving back to the community</h2>
                            <p>asdfasdfasdfasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About