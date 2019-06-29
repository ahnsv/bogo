import React from 'react'
import Login from './view/login'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Signup from "./view/signup";
import {Home} from "./view/home";
import {Loading} from "./view/loading";

const App = () => {
    return (
        <div className={`app h-screen`}>
            <Router>
                <Route exact path={`/`} component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path={`/loading`} component={Loading}/>
            </Router>
        </div>
    )
}

export default App;