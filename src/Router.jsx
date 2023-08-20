import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about" component={About}>

                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router