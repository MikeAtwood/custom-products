import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'

const Router = () => {
    return (
            <Routes>
                <Route path='/home' component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </Routes>
    )
}

export default Router