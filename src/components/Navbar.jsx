import { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [navbarClass, setNavbarClass] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavbarClass('scrolled')
            } else {
                setNavbarClass('')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    // <nav className={`navbar navbar-expand-lg bg-light ${navbarClass}`}>
    <nav className={`navbar navbar-expand-lg bg-transparent ${navbarClass}`}> 
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/home">
          <img src={Logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active text-white" aria-current="page" href="/home">Home</a>
            <a className="nav-link text-white" href="/about">About Us</a>
            <a className="nav-link text-white" href="/contact">Contact</a>
            <a className="nav-link text-white" href="/products">Products</a>
            <a className="nav-link text-white" href="/about">Services</a>
            <a className="nav-link text-white" href="/about">Projects</a>
            <a className="nav-link text-white" href="/about">Organic Gardening Info</a>
          </div>
        </div>
      </div>
    </nav>

  );
};
export default Navbar;
