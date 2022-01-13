import React from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Homepage from "./pages/homepage";
//components
//Styles
import "./App.scss";

function App() {
  const imageDetails = {
    width: 524,
    height: 650,
  };



  return (<>
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Homepage imageDetails={imageDetails} />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
    </>
  );
}

export default App;
