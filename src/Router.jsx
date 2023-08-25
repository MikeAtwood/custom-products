import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Info from './pages/Info';

const Router = () => {
    return (
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/info' element={<Info />}></Route>
            </Routes>
    )
}

export default Router