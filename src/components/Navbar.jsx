import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sidebar'>
        <Nav defaultActiveKey='/home' className='flex-column'>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About Us</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/projects'>Projects</Link>
            </li>
            <li>
                <Link to='/info'>Organic Gardening Info</Link>
            </li>
        </Nav>
    </div>
  )
}
export default Navbar;
