import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';

import About from './components/page/About';
import Project from './components/page/Project';

import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/project" component={Project}></Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
