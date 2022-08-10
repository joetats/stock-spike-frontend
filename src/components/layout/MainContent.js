import Landing from '../Landing';
import Watchlist from '../tables/Watchlist';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const MainContent = (props) => {
  return (
    <Box minHeight="85vh">
      <Routes>
        <Route path="/" element={<Landing links={props.links} />} />
        <Route
          path="/watchlists/:watchlistId"
          element={<Watchlist onShowChart={props.onShowChart} />}
        />
      </Routes>
    </Box>
  );
};

export default MainContent;
