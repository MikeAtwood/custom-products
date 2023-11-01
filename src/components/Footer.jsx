import Logo from '../assets/img/logo.png'

const Footer = () => {
    return (
        <div className="footer-container">
           
                <img src={Logo} />
                <hr className='footer-line' />
           
            
            
            <div className='footer-underline'>
                <p>©Custom Products & Services. All Rights Reserved 2023</p>
            </div>
            
        </div>
    )
}

export default Footer