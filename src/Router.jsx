import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About'
// import Contact from './components/Contact';
import Products from './components/Products';
// import Services from './components/Services';
// import Projects from './components/Projects';
// import Info from './components/Info';

const Router = () => {
    return (
            <Routes>
                {/* <Route path='/home' element={<Home />}></Route> */}
                {/* <Route path="/about" element={<About />}></Route> */}
                {/* <Route path='/contact' element={<Contact />}></Route> */}
                <Route path='/products' element={<Products />}></Route>
                {/* <Route path='/services' element={<Services />}></Route> */}
                {/* <Route path='/projects' element={<Projects />}></Route> */}
                {/* <Route path='/info' element={<Info />}></Route> */}
            </Routes>
    )
}

export default Router