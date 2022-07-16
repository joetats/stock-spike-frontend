import { useState, useEffect } from 'react';
import axios from 'axios';

import WatchlistRow from './WatchlistRow';

const PutsWatchlist = (props) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/watchlists/puts').then((res) => {
      setList(res.data.data);
    });
  }, [props.url]);

  if (!list) return null;

  list.sort((a, b) => {
    return b.topPutROR - a.topPutROR;
  });

  const puts = list
    .slice(0, 15)
    .map((r) => (
      <WatchlistRow
        symbol={r.symbol}
        strike={r.topPutStrike}
        exp={r.topPutExp}
        delta={r.topPutDelta}
        ask={r.topPutAsk}
        ror={r.topPutROR}
        key={r.symbol}
      />
    ));
  console.log(puts);
  return (
    <>
      <h2 className="text-white">the "good" watchlist</h2>
      <p className="text-white text-center ps-4 mt-2">
        Return on risk from selling 30 delta puts on the S&P 500 at 45ish DTE
      </p>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Strike</th>
            <th>Exp</th>
            <th className="d-none d-sm">Delta</th>
            <th>Ask</th>
            <th>RoR</th>
          </tr>
        </thead>
        <tbody>{puts}</tbody>
      </table>
    </>
  );
};

export default PutsWatchlist;
