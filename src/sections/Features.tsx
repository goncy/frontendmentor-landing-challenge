import React from "react";
import {Stack, Heading, Text, Image, Container} from "@chakra-ui/react";

import computer from "../assets/image-computer.png";

const Features: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingY={24}>
      <Stack alignItems="center" spacing={24}>
        <Stack alignItems="center" maxWidth="container.md" textAlign="center">
          <Heading>Keep track of your snippets</Heading>
          <Text fontSize="lg" textStyle="soft">
            Clipboard instantly stores any item you copy in the cloud, meaning you can access your
            snippets immediately on all your devices. Our Mac and iOS apps will help you organize
            everything.
          </Text>
        </Stack>
        <Stack alignItems="center" direction={{base: "column", md: "row"}} spacing={36}>
          <Image objectFit="contain" src={computer} width={{base: "100%", md: "50%"}} />
          <Stack spacing={12} width={{base: "100%", md: "50%"}}>
            <Stack spacing={3}>
              <Heading size="md">Quick Search</Heading>
              <Text textStyle="soft">
                Easily search your snippets by content, category, web address, application, and
                more.
              </Text>
            </Stack>
            <Stack spacing={3}>
              <Heading size="md">iCloud Sync</Heading>
              <Text textStyle="soft">
                Instantly saves and syncs snippets across all your devices.
              </Text>
            </Stack>
            <Stack spacing={3}>
              <Heading size="md">Complete History</Heading>
              <Text textStyle="soft">
                Retrieve any snippets from the first moment you started using the app.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Features;
