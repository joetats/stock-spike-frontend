import { Container, Stack, Heading, Text } from '@chakra-ui/react';

const NothingFound = (props) => {
  return (
    <Container>
      <Stack spacing={2} my={5}>
        <Heading>{props.header}</Heading>
        <Text fontSize="sm">Updated: {props.d}</Text>
      </Stack>
      <Heading size="lg" my={3}>
        Nothing found!
      </Heading>
      <Text align="center">
        Nothing checked made this watchlist today... maybe tomorrow!
      </Text>
    </Container>
  );
};

export default NothingFound;
