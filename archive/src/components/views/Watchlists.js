import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat, url } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      as="a"
      href={'/watchlists/' + url}
    >
      <StatLabel fontWeight={'medium'}>{title}</StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function BasicStatistics(props) {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        pt={10}
        fontWeight={'bold'}
      >
        The Watchlists
      </chakra.h1>
      <Text align="center" mb={10}>
        Find the next spike here. No strategies, just some interesting market
        conditions that have produced winners for me in the past.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Top return on risk for S&P 500 stocks'}
          stat={'Best S&P 500 Puts'}
          url="puts"
        />
        <StatsCard
          title={'Rotate into the outperforming S&P 500 sectors'}
          stat={'Sector ETF Momentum'}
          url="sector"
        />
        <StatsCard
          title={'The list that started it all - abnormal daily volume'}
          stat={'Volume Spikes'}
          url="volume"
        />
      </SimpleGrid>
    </Box>
  );
}
