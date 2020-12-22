import React, { useReducer } from "react";
import "./App.scss";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Info from "./components/Pages/Info/Info";
import { Link } from "react-router-dom";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Signup";
import {
  GlobalContext,
  globalState,
  globalReducer,
} from "./context/reducers/globalReducer";

function App() {
  const [global, dispatchToGlobal] = useReducer(globalReducer, globalState);

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/sign-up">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <GlobalContext.Provider value={[global, dispatchToGlobal]}>
          <Switch>
            <Route path="/sign-up" component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
          </Switch>
        </GlobalContext.Provider>
        {/* {/* <Route path="/info" component={Info} /> */}
      </div>
    </Router>
  );
}

export default App;
