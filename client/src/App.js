import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddPatient from "./components/AddPatient";
import Navbar from './components/Navbar'
import ShowAll from "./components/ShowAll";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AddPatient/>
          </Route>
          <Route exact path="/about">
            <ShowAll/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
