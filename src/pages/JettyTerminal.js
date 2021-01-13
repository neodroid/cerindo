import React from "react";
import { JettyTerminalHead } from "../components/Data/BusinessData/JettyTerminalDatas";
import Banner from "../components/Banner";
import JettyTerminalComponents from "../components/BusinessComponents/JettyTerminalComponents";

const JettyTerminal = () => {
  return (
    <>
      <Banner {...JettyTerminalHead} />
      <JettyTerminalComponents/>
    </>
  );
};

export default JettyTerminal;
