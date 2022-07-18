import { useState, useEffect } from 'react';
import axios from 'axios';

import WatchlistRow from './WatchlistRow';

const Watchlist = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.sketchbrew.com/api/v1/stock-spike/watchlists${props.route}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [props.route]);

  if (!data) return null;

  const d = data.updated.substring(0, data.updated.indexOf('.'));

  const puts = data.data
    .slice(0, 15)
    .map((r) => (
      <WatchlistRow
        symbol={r.symbol}
        columns={data.columns}
        data={r}
        key={r.symbol}
      />
    ));

  const headers = data.columns.map((c) => (
    <th key={c.name} className={c.showOnMobile ? '' : 'd-none d-sm'}>
      {c.display}
    </th>
  ));

  return (
    <>
      <h2 className="text-white">{data.header}</h2>
      <em className="text-white ms-2">Updated: {d}</em>
      <p className="text-white text-center ps-4 mt-2">{data.subheader}</p>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th>Symbol</th>
            {headers}
          </tr>
        </thead>
        <tbody>{puts}</tbody>
      </table>
    </>
  );
};

export default Watchlist;
