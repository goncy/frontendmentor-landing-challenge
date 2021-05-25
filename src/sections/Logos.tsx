import React from "react";
import {Container, Image, Stack} from "@chakra-ui/react";

import google from "../assets/logo-google.png";
import ibm from "../assets/logo-ibm.png";
import microsoft from "../assets/logo-microsoft.png";
import hp from "../assets/logo-hp.png";
import vectorGraphics from "../assets/logo-vector-graphics.png";

const Logos: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingY={6}>
      <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={12}>
        <Image objectFit="contain" src={google} />
        <Image objectFit="contain" src={ibm} />
        <Image objectFit="contain" src={microsoft} />
        <Image objectFit="contain" src={hp} />
        <Image objectFit="contain" src={vectorGraphics} />
      </Stack>
    </Container>
  );
};

export default Logos;
