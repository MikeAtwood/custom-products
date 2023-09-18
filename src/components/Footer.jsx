import Logo from '../assets/img/logo.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <img src={Logo} />
            <h1>Custom Products & Services</h1>
            <hr className='footer-line' />
        </div>
    )
}

export default Footer