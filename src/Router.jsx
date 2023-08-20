import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'

const Router = () => {
    return (
            <Routes>
                <Route path='/home' element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
    )
}

export default Router