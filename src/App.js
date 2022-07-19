import NavBar from './components/layout/NavBar';
import MainContent from './components/layout/MainContent';
import Footer from './components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ThemeContext from './store/theme-context';

function App() {
  const [watchlists, setWatchlists] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

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

  return (
    <ThemeContext.Provider value={{ isDarkMode: isDarkMode }}>
      <BrowserRouter>
        <NavBar links={watchlists} />
        <MainContent links={watchlists} />
        <Footer onChangeTheme={flipThemeHandler} />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
