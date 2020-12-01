import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import GlobalFonts from "./fonts/fonts";

import Home from "./pages";
import NickleOreMining from "./pages/NickleOreMining";

import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/SideBar";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalFonts />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Nickle-Ore-Mining" component={NickleOreMining} exact />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
