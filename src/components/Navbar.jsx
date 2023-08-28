import { useEffect, useState } from 'react'

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
    <nav className={`navbar navbar-expand-lg bg-light ${navbarClass}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Custom Products & Services
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
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
            <a className="nav-link" href="/about">About Us</a>
            <a className="nav-link" href="/contact">Contact</a>
            <a className="nav-link" href="/products">Products</a>
            <a className="nav-link" href="/about">Services</a>
            <a className="nav-link" href="/about">Projects</a>
            <a className="nav-link" href="/about">Organic Gardening Info</a>
          </div>
        </div>
      </div>
    </nav>
// For sidebar setup: removed for traditional top navbar
    // <nav className="navbar navbar-expand-lg bg-dark">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <div className="sidebar">
    //       <Nav defaultActiveKey="/home" className="flex-column">
    //         <li>
    //           <Link to="/home">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About Us</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //         <li>
    //           <Link to="/products">Products</Link>
    //         </li>
    //         <li>
    //           <Link to="/services">Services</Link>
    //         </li>
    //         <li>
    //           <Link to="/projects">Projects</Link>
    //         </li>
    //         <li>
    //           <Link to="/info">Organic Gardening Info</Link>
    //         </li>
    //       </Nav>
    //     </div>
    //   </div>
    // </nav>
  );
};
export default Navbar;
