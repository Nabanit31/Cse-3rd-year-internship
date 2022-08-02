import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./pages/Navbar";
//import Home from './pages/home';
import About from './About';
import Register from './Register';
import Contact from './Contact';

import { Switch, Route } from "react-router-dom";
const App = () => {
    return (
        <>
          {/* <Navbar />
          <Header/> */}
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Register" component={Register} />  
        
            </Switch>
        </>
    )
}