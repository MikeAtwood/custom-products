import { useEffect, useState } from 'react'
import Logo from '../assets/img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
// import { BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
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
        <Container className="container-fluid">
          <Navbar.Brand href="#home">
            <img src={Logo} alt='Logo'/>
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>About</Nav.Link>
            <Nav.Link href="#services" className={activeLink === "services" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Services</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Contact</Nav.Link>
            {/* <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link> */}
          </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    // </Router>
    

  );
};
export default NavBar;
