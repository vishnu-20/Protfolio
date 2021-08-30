import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import {BrowserRouter as Route,Redirect,Switch,useLocation,} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//added

function OtherDetails({send,sentEmailDirect}) {
  const location = useLocation();
  return (
    <div onClick={()=>sentEmailDirect(false)}>
      <div className="navbar_top">
        <Navbar />
      </div>
      <AnimatePresence location={location} key={location.key} exitBeforeEnter>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default OtherDetails;
