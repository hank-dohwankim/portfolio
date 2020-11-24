import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';
import AboutScreen from './screens/AboutScreen';
import ProjectScreen from './screens/ProjectScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import LoginScreen from './screens/auth/LoginScreen';

import Styled from 'styled-components';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/projects" component={ProjectScreen}></Route>
            <Route exact path="/register" component={RegisterScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>
          </Switch>
        </section>
      </Container>
    </Router>
  );
};

const Container = Styled.div`height: 100vh;`;

export default App;
