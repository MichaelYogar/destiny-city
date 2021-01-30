import React, { useReducer } from "react";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./components/Pages/Info/Info";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Signup";
import {
  GlobalContext,
  globalState,
  globalReducer,
} from "./context/reducers/globalReducer";
import {
  CityContext,
  cityState,
  cityReducer,
} from "./context/reducers/cityReducer";

function App() {
  const [global, dispatchToGlobal] = useReducer(globalReducer, globalState);
  const [city, dispatchToCity] = useReducer(cityReducer, cityState);

  return (
    <Router>
      <GlobalContext.Provider value={[global, dispatchToGlobal]}>
        <Switch>
          <Route path="/sign-up" component={Signup} />
          <Route path="/login" exact component={Login} />
          <CityContext.Provider value={[city, dispatchToCity]}>
            <Route path="/info" component={Info} />
            <Route path="/" exact component={Home} />
          </CityContext.Provider>
        </Switch>
      </GlobalContext.Provider>
    </Router>
  );
}

export default App;
