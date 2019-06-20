import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/services" component={Services} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/testimonial" component={Testimonial} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="*" component={Home} exact={true} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
