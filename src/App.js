import NavBar from './components/layout/NavBar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import Chart from './components/charts/Chart';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ThemeContext from './store/theme-context';

function App() {
  const [watchlists, setWatchlists] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [chartIsShown, setChartIsShown] = useState(false);
  const [tickerSymbol, setTickerSymbol] = useState('');

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

  const flipThemeHandler = () => {
    const newTheme = !isDarkMode;

    document.body.className = newTheme ? 'bg-dark' : 'bg-light';
    setIsDarkMode(newTheme);
  };

  const showChartHandler = (symbol) => {
    setChartIsShown(true);
    setTickerSymbol(symbol);
  };

  const hideChartHandler = () => {
    setChartIsShown(false);
  };

  const checkSymbolHandler = (e) => {
    console.log(e);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
      {chartIsShown && (
        <Chart onHideChart={hideChartHandler} symbol={tickerSymbol} />
      )}
      <BrowserRouter>
        <NavBar links={watchlists} />
        <MainContent
          links={watchlists}
          onShowChart={showChartHandler}
          onSetSymbol={checkSymbolHandler}
        />
        <Footer onChangeTheme={flipThemeHandler} />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
