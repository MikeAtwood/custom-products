// import treeImg from '../assets/img/hand-tree.jpg'

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about" id="about">
                <h1>About Us</h1>
                <div className="left-column">
                    <h2>    
                        Our company is based on the belief that our customers needs are of the utmost importance. Our entire team 
                        is committed to meeting those needs. As a result, a high percentage of our business is from repeat customers and 
                        referrals. We would welcome the opportunity to earn your trust and deliver you the best service in the industry.
                    </h2>
                    <h3>
                        Location:
                        2919 Central Avenue NE
                        Minneapolis, MN 55418
                    </h3>
                    <h3>
                        Hours:
                        Mon - Fri: 9AM - 5PM
                        Sat: Closed         
                        Sun: Closed
                    </h3>
                </div>
                <div className="right-column">
                    {/* <img src={treeImg} /> */}
                </div>
            </div>
        </div>
    )
}

export default About