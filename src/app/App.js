import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/Pages/Home';
import Projects from 'components/Pages/Projects';
import SignUp from 'components/Pages/SignUp';
import 'normalize.css';
import 'theme/theme.css'
import 'theme/fonts.css'
import 'theme/globalStyle.css'

const App = () => (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/project" exact component={Projects}/>
                <Route path="/signup/" exact component={SignUp}/>
            </Switch>
        </Router>
    </div>
);

export default App;
