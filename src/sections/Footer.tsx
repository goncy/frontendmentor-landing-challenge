import React from "react";
import {Text, Image, SimpleGrid, Stack, Container, Box} from "@chakra-ui/react";

import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer: React.FC = () => {
  return (
    <Box backgroundColor="gray.100">
      <Container alignSelf="center" maxWidth="container.xl" paddingY={6}>
        <Stack alignItems="center" direction="row" justifyContent="space-between" spacing={12}>
          <Image height={12} src={logo} width={12} />
          <SimpleGrid columnGap={12} columns={3} rowGap={4}>
            <Text>FAQs</Text>
            <Text>Privacy Policy</Text>
            <Text>Install Guide</Text>
            <Text>Contact Us</Text>
            <Text>Press Kit</Text>
          </SimpleGrid>
          <Stack direction="row" spacing={6}>
            <Image objectFit="contain" src={facebook} />
            <Image objectFit="contain" src={twitter} />
            <Image objectFit="contain" src={instagram} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
