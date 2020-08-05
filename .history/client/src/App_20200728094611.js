import React from "react";
import "./App.css";
import Navbar from "./layout/nav/Navbar";
import LandingPage from "./layout/pages/LandingPage";
import About from "./layout/pages/About";
import Login from "./layout/pages/login/auth/Login";
import Register from "./layout/pages/login/auth/Register";
import Catalogue from "./layout/pages/catalogue/Catalogue";
import Logout from "./layout/pages/login/auth/Logout";
import LingLing from "./layout/pages/asaph/LingLing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./layout/pages/Alert";
import setAuthToken from "./utils/setAuthToken";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert />
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/catalogue" component={Catalogue} />
              <Route path="/register" component={Register} />
              <Route path="/ling-ling-wannabe" component={LingLing} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
