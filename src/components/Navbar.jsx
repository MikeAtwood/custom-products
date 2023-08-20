import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sidebar'>
        <Nav defaultActiveKey='/home' className='flex-column'>
            <Nav.Link href='/home'>Home</Nav.Link>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
    </div>
  )
}
export default Navbar;
