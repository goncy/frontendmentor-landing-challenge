import React from "react";
import {Stack} from "@chakra-ui/react";

import Anywhere from "./sections/Anywhere";
import Download from "./sections/Download";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Logos from "./sections/Logos";
import Workflow from "./sections/Workflow";

function App() {
  return (
    <Stack>
      <Header />
      <Features />
      <Anywhere />
      <Workflow />
      <Logos />
      <Download />
      <Footer />
    </Stack>
  );
}

export default App;
