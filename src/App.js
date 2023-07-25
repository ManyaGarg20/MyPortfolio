/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu.js';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import ScrollToTop from './components/ScrollToTop.js';

export default function App() {
  return (
    <Router>
        <NavMenu /> {/*  show navvbar here */}
     <ScrollToTop />
       <Switch>  {/* when we have this route path: /about , which is given in navbar Navlink,show this component */}
        <Route path="/about">
          <About />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/"> {/*  take this case at end bcoz otherwise , this will work for all urls starting with / */}
          <Home />
        </Route>

       </Switch>
      </Router>
  );
}
