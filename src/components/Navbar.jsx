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
                <Link to='/about'>About</Link>
            </li>
        </Nav>
    </div>
  )
}
export default Navbar;
