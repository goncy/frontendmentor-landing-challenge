import React from "react";
import {Text, Stack, Heading, Image, Container} from "@chakra-ui/react";

import preview from "../assets/image-devices.png";

const Anywhere: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingY={24}>
      <Stack alignItems="center" spacing={24}>
        <Stack alignItems="center" maxWidth="container.md" textAlign="center">
          <Heading>Access Clipboard anywhere</Heading>
          <Text fontSize="lg" textStyle="soft">
            Wether you are on the go, or at your computer, you can access all your Clipboard
            snippets in a few simple clicks.
          </Text>
        </Stack>
        <Image src={preview} />
      </Stack>
    </Container>
  );
};

export default Anywhere;
