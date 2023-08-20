import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" component={About}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router