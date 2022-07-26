import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import WatchlistRow from './WatchlistRow';
import ThemeContext from '../../store/theme-context';

const Watchlist = (props) => {
  const [data, setData] = useState(null);

  const ctx = useContext(ThemeContext);

  const themes = {};

  if (ctx.isDarkMode) {
    themes.h2 = 'text-white';
    themes.em = 'text-white ms-2';
    themes.p = 'text-white text-center ps-4 mt-2';
    themes.table = 'table table-dark table-striped table-bordered';
  } else {
    themes.h2 = 'text-dark';
    themes.em = 'text-dark ms-2';
    themes.p = 'text-dark text-center ps-4 mt-2';
    themes.table = 'table table-light table-striped table-bordered';
  }

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
        onShowChart={props.onShowChart}
      />
    ));

  const headers = data.columns.map((c) => (
    <th key={c.name} className={c.showOnMobile ? '' : 'd-none d-sm-block'}>
      {c.display}
    </th>
  ));
  if (data.data.length === 0) {
    return (
      <div className="container">
        <h2 className={themes.h2}>{data.header}</h2>
        <em className={themes.em}>Updated: {d}</em>
        <h3 className={themes.h2 + ' mt-5 text-center'}>Nothing found!</h3>
        <p className={themes.h2 + ' text-center'}>
          Nothing in the S&P 500 made this watchlist today... maybe tomorrow!
        </p>
      </div>
    );
  }
  return (
    <>
      <h2 className={themes.h2}>{data.header}</h2>
      <em className={themes.em}>Updated: {d}</em>
      <p className={themes.p}>{data.subheader}</p>
      <table className={themes.table}>
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
