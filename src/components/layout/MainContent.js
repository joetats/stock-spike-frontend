import Landing from '../views/Landing';
import Watchlist from '../tables/Watchlist';
import Watchlists from '../views/Watchlists';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const MainContent = (props) => {
  return (
    <Box minHeight="85vh">
      <Routes>
        <Route path="/" element={<Landing links={props.links} />} />
        <Route path="/watchlists" element={<Watchlists link={props.links} />} />
        <Route path="/watchlists/:watchlistId" element={<Watchlist />} />
      </Routes>
    </Box>
  );
};

export default MainContent;
