import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import GlobalFonts from "./fonts/fonts";

import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/SideBar";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages";
import NickleOreMining from "./pages/NickleOreMining";
import NickleCobaltHPAL from "./pages/NickelCobaltHPAL";
import FerronickleSmelting from "./pages/FerronickleSmelting";
import ResourceReserve from "./pages/ResourceReserve";
import JettyTerminal from "./pages/JettyTerminal";
import PowerPlant from "./pages/PowerPlant";
import NewsRelease from "./pages/NewRelease";
import NewsComponent from "./components/CorporateNewsComponents/NewsComponent";
import Vismis from "./pages/Vismis";
import Subsidiary from "./pages/Subsidiary"

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
          <Route
            path="/Nickle-Cobalt-HPAL"
            component={NickleCobaltHPAL}
            exact
          />
          <Route
            path="/Ferronickle-Smelting"
            component={FerronickleSmelting}
            exact
          />
          <Route path="/Resource-Reserve" component={ResourceReserve} exact />
          <Route path="/Jetty-Terminal" component={JettyTerminal} exact />
          <Route path="/Power-Plant" component={PowerPlant} exact />
          <Route path="/News-Release" component={NewsRelease} exact />
          <Route path="/News/:title" component={NewsComponent} exact />
          <Route path="/Mission-Vision" component={Vismis} exact />
          <Route path="/Subsidiary" component={Subsidiary} exact />
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
