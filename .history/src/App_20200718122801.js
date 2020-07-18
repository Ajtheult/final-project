import React from "react";
import "./App.css";
import Navbar from "./layout/nav/Navbar";
import LandingPage from "./layout/pages/LandingPage";
import About from "./layout/pages/About";
import Keys from "./layout/pages/catalogue/Keys";
import String from "./layout/pages/catalogue/String";
import Woodwind from "./layout/pages/catalogue/Woodwind";
import Percussion from "./layout/pages/catalogue/Percussion";
import Login from "./layout/pages/login/Login";
import Cart from "./layout/pages/Cart";
import NewSignUp from "./layout/pages/login/NewSignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/keys" component={Keys} />
          <Route path="/string" component={String} />
          <Route path="/woodwind" component={Woodwind} />
          <Route path="/percussion" component={Percussion} />
          <Route path="/new-sign-up" component={NewSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
