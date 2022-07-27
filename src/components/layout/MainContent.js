import { useContext } from 'react';

import Landing from '../Landing';
import Watchlist from '../tables/Watchlist';
import { Routes, Route } from 'react-router-dom';
import ThemeContext from '../../store/theme-context';

const MainContent = (props) => {
  const ctx = useContext(ThemeContext);

  const themes = {};

  if (ctx.isDarkMode) {
    themes.div = 'min-vh-100 bg-dark pt-5';
  } else {
    themes.div = 'min-vh-100 bg-light pt-5';
  }

  return (
    <div className={themes.div}>
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<Landing links={props.links} />} />
          <Route
            path="/watchlists/:watchlistId"
            element={<Watchlist onShowChart={props.onShowChart} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
