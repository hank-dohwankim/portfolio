import React, { Fragment } from 'react';
// import { BrowerRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import Landing from './components/layout/Landing';
import Sidebar from './components/layout/Sidebar';
import './App.css';

const App = () => {
  return (
    // <Router>
    <Fragment>
      <Navbar />
      <Sidebar />
      {/* <Route exact path="/" component={Landing} /> */}
    </Fragment>
    // </Router>
  );
};

export default App;
