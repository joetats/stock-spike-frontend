import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={300}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            stock-spike
          </Heading>
          <Text color={'gray.800'}>
            Free stock tips and strategies based on sifting through the chaos of
            reddit.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              Watchlists!
            </Button>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              Project George (coming soon...)
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
