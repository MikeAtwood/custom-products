import { Nav } from 'react-bootstrap'

const Navbar = () => {
  return (
    <div className='sidebar'>
        <Nav defaultActiveKey='/home' className='flex-column'>
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
    </div>
  )
}
export default Navbar;
