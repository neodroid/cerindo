import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import GlobalFonts from "./fonts/fonts";

function App() {
  return (
    <>
      <GlobalFonts />
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
