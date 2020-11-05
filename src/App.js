import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/Helpers";
import { Auth, Home, Error } from "./Pages";
import { Footer, Header } from "./Components/Navbar";
import "./App.css";
import { StateProvider } from "./Store/context/user-context";

function App() {
  return (
    <>
      <StateProvider>
        <Header />
        <div id="content">
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/auth" component={Auth} />
              <Route component={Error} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </StateProvider>
    </>
  );
}

export default App;
