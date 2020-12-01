import React from "react";
import { JettyTerminalHead } from "../components/Data/BusinessData";
import Banner from "../components/Banner";

const JettyTerminal = () => {
  return (
    <>
      <Banner {...JettyTerminalHead} />
    </>
  );
};

export default JettyTerminal;
