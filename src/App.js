import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';

import Styled from 'styled-components';

import './App.css';
import AboutScreen from './Screens/AboutScreen';
import ProjectScreen from './Screens/ProjectScreen';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Sidebar />
        <Route exact path="/portfolio" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/project" component={ProjectScreen}></Route>
          </Switch>
        </section>
      </Container>
    </Router>
  );
};

const Container = Styled.div`height: 100vh;`;

export default App;
