import {
  Box,
  Container,
  VStack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SmallWithSocial() {
  const year = new Date().getFullYear();

  return (
    <Box
      bg={useColorModeValue('blue.200', 'blue.900')}
      color={useColorModeValue('blue.700', 'blue.200')}
    >
      <Container
        as={VStack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={1}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        color={'gray.800'}
      >
        <Link href="https://github.com/joetats/stock-spike-frontend" isExternal>
          I'm Open Source!
        </Link>
        <Text align="center">
          Data provided for entertainment value with zero warranty. Not
          financial advice.
        </Text>
        <Text>© {year} Joe Tatusko. All rights reserved</Text>
      </Container>
    </Box>
  );
}
