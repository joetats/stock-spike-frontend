import Landing from '../Landing';
import Watchlist from '../tables/Watchlist';
import { Routes, Route, useLocation } from 'react-router-dom';

const MainContent = (props) => {
  const route = useLocation().pathname;
  return (
    <div className="min-vh-100 bg-dark pt-5">
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<Landing links={props.links} />} />
          <Route path="/puts" element={<Watchlist route={route} />} />
          <Route path="/sector" element={<Watchlist route={route} />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
