import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';

import About from './components/page/About';
import Project from './components/page/Project';

import Styled from 'styled-components';

import './App.css';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Sidebar />
        <Route exact path="/portfolio" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/project" component={Project}></Route>
          </Switch>
        </section>
      </Container>
    </Router>
  );
};

const Container = Styled.div`height: 100vh;`;

export default App;
