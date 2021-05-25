import React from "react";
import {Text, Stack, Heading, Button, Container} from "@chakra-ui/react";

const Download: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingY={24}>
      <Stack alignItems="center" spacing={12}>
        <Stack alignItems="center" maxWidth="container.md" spacing={6} textAlign="center">
          <Heading>Clipboard for iOS and Mac OS</Heading>
          <Text fontSize="lg" textStyle="soft">
            Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you
            are ready to start adding to your clipboard.
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
  );
};

export default Download;
