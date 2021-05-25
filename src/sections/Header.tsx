import React from "react";
import {Box, Button, Container, Heading, Image, Stack, Text} from "@chakra-ui/react";

import background from "../assets/bg-header-desktop.png";
import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Box
      backgroundImage={`url(${background})`}
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
    >
      <Container alignSelf="center" maxWidth="container.xl" paddingY={24}>
        <Stack alignItems="center" spacing={12}>
          <Image height={24} src={logo} width={24} />
          <Stack alignItems="center" maxWidth="container.md" textAlign="center">
            <Heading>A history of everything you copy</Heading>
            <Text fontSize="lg" textStyle="soft">
              Clipboard allows you to track and organize everything you copy. Instantly access your
              clipboard on all your devices.
            </Text>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="primary" size="md">
              Download for iOS
            </Button>
            <Button colorScheme="secondary" size="md">
              Download for Mac
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
