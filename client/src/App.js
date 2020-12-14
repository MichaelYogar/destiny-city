import React, { useState, useMemo } from "react";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";
import CityState from "./contexts/CityState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Info from "./components/Pages/Info/Info";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Switch>
        <Route path="/sign-up" component={Signup} />
        <UserContext.Provider value={value}>
          <Route path="/login" component={Login} />
          <CityState>
            <Route path="/info" component={Info} />
            <Route path="/" component={Home} />
          </CityState>
        </UserContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
