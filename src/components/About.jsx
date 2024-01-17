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
                            <p> Based in the greater Minneapolis area, leveraging our expertise and serving clients within this vibrant community</p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={about2} alt='aboutImageTwo'/>
                        <div className='image-text'>
                            <h2>something something</h2>
                            <p>asdfasdfasdfasdf asdffdsa fdssf aasdffdsaa aehkhlkgh asdfa sdfasdfasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh asdfasdfa sd fasdf asdffdsa fdssdf aasdffdsaa aehkhlkgh</p>
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={about3} alt='aboutImageThree'/>
                        <div className='image-text'>
                            <h2>Giving back to the community</h2>
                            <p> We are deeply committed to giving back to the community we serve. As a public service company specializing in landscaping and street cleaning, we take pride in enhancing the beauty and cleanliness of our city. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About