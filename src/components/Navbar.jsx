import { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownClicked, setIsDropdownClicked] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    const onDropdownClick = () => {
      setIsDropdownClicked(!isDropdownClicked)
    }

  
  return (
    
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container className="navbar container-fluid">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={Logo} alt="Logo" className="mr-2" />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onDropdownClick}>
              <span className={`navbar-toggler-icon navbar-dark ${isDropdownClicked ? 'clicked' : ''}`}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/" className={`text-light ${activeLink === 'home' ? 'active' : ''}`} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
              <Nav.Link href="/#about" className={`text-light ${activeLink === 'about' ? 'active' : ''}`} onClick={() => onUpdateActiveLink("about")}>About</Nav.Link>
              <Nav.Link href="/#services" className={"text-white"} onClick={() => onUpdateActiveLink("services")}>Services</Nav.Link>
              <Nav.Link href="/#contact" className={"text-white"} onClick={() => onUpdateActiveLink("contact")}>Contact</Nav.Link>
              <Nav.Link href="/gallery" className={"text-white"} onClick={() => onUpdateActiveLink("gallery")}>Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    

  );
};
export default NavBar;
