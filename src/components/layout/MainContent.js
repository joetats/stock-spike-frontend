import PutsWatchlist from '../tables/PutsWatchlist';
import EtfWatchlist from '../tables/EtfWatchlist';
import { Routes, Route } from 'react-router-dom';

const MainContent = (props) => {
  return (
    <div className="min-vh-100 bg-dark">
      <div className="container pt-5">
        <Routes>
          <Route path="/" element={<PutsWatchlist />} />
          <Route path="/puts" element={<PutsWatchlist />} />
          <Route path="/sectors" element={<EtfWatchlist />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
