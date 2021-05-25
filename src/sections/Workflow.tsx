import React from "react";
import {Text, Stack, Heading, Image, Container} from "@chakra-ui/react";

import paper from "../assets/icon-blacklist.svg";
import text from "../assets/icon-text.svg";
import preview from "../assets/icon-preview.svg";

const Workflow: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingY={24}>
      <Stack alignItems="center" spacing={16}>
        <Stack alignItems="center" maxWidth="container.md" spacing={6} textAlign="center">
          <Heading>Supercharge your workflow</Heading>
          <Text fontSize="lg" textStyle="soft">
            We have got the tools to boost your productivity.
          </Text>
        </Stack>
        <Stack direction="row" justifyContent="space-between" spacing={4} textAlign="center">
          <Stack alignItems="center" flex={1} spacing={6}>
            <Image height={12} objectFit="contain" src={paper} width={12} />
            <Heading size="md">Create blacklists</Heading>
            <Text fontSize="sm" textStyle="soft">
              Ensure sensitive information never makes its way to your clipboard by excluding
              certain sources.
            </Text>
          </Stack>
          <Stack alignItems="center" flex={1} spacing={6}>
            <Image height={12} objectFit="contain" src={text} width={12} />
            <Heading size="md">Plain text snippets</Heading>
            <Text fontSize="sm" textStyle="soft">
              Remove unwanted formatting from copied text for a consistent look.
            </Text>
          </Stack>
          <Stack alignItems="center" flex={1} spacing={6}>
            <Image height={12} objectFit="contain" src={preview} width={12} />
            <Heading size="md">Sneak preview</Heading>
            <Text fontSize="sm" textStyle="soft">
              Quick preview of all snippets on your Clipboard for easy access.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Workflow;
