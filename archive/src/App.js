import NavBar from './components/layout/NavBar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        'https://www.sketchbrew.com/api/v1/stock-spike/watchlists/'
      );
      const links = data.data.map((r) => {
        return { url: `/${r.name}`, title: r.navDesc };
      });
      setWatchlists(links);
    };
    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Box minHeight="100vh">
        <BrowserRouter>
          <NavBar links={watchlists} />
          <MainContent links={watchlists} />
          <Footer />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
