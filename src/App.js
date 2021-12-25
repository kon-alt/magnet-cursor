import React, {useState} from 'react';
import './App.scss';
import {MainLayout} from './louoyts';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';


const App = () => {

    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home/>
                    </Route>
                    <Route path="/about" exact={true}>
                        <About/>
                    </Route>
                </Switch>
            </MainLayout>
        </Router>
    );
};

export default App;
