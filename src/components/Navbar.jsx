import { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
  const [setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

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
  return (
    // <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container className="navbar container-fluid">
          <Navbar.Brand href="#home">
            <img src={Logo} alt='Logo'/>
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon custom-icon navbar-dark"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={"text-light"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#about" className={"text-light"} onClick={() => onUpdateActiveLink("about")}>About</Nav.Link>
            <Nav.Link href="#services" className={"text-white"} onClick={() => onUpdateActiveLink("services")}>Services</Nav.Link>
            <Nav.Link href="#contact" className={"text-white"} onClick={() => onUpdateActiveLink("contact")}>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    // </Router>
    

  );
};
export default NavBar;
