import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import WatchlistRow from './WatchlistRow';
import NothingFound from './NothingFound';
import SortIcon from './SortIcon';
import ThemeContext from '../../store/theme-context';

const Watchlist = (props) => {
  const [data, setData] = useState(null);
  const [sortCol, setSortCol] = useState(null);

  const { watchlistId } = useParams();

  const ctx = useContext(ThemeContext);

  const themes = {};

  const sortColHandler = (col, type) => {
    if ((sortCol.sortCol = col)) {
      setSortCol({
        sortCol: col,
        sortColAsc: !sortCol.sortColAsc,
      });
    } else {
      setSortCol({
        sortCol: col,
        sortColAsc: false,
      });
    }
  };

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
        `https://www.sketchbrew.com/api/v1/stock-spike/watchlists/${watchlistId}`
      )
      .then((res) => {
        setSortCol({
          sortCol: res.data.defaultSort,
          sortAsc: res.data.defaultSortAsc,
        });
        setData(res.data);
      });
  }, [watchlistId]);

  if (!data) return null;

  const d = data.updated.substring(0, data.updated.indexOf('.'));

  const sortedRows = data.data.slice(0, 15).sort((a, b) => {
    if (sortCol.sortColAsc) {
      return a[sortCol.sortCol] - b[sortCol.sortCol];
    } else {
      return b[sortCol.sortCol] - a[sortCol.sortCol];
    }
  });

  const rows = sortedRows.map((r) => (
    <WatchlistRow
      symbol={r.symbol}
      columns={data.columns}
      data={r}
      key={r.symbol}
      onShowChart={props.onShowChart}
      onSortCol={sortColHandler}
    />
  ));

  const headers = data.columns.map((c) => (
    <th
      key={c.name}
      className={c.showOnMobile ? '' : ' d-none d-sm-block'}
      onClick={() => sortColHandler(c.name, c.type)}
    >
      <small>
        {c.display}{' '}
        {sortCol.sortCol === c.name ? (
          <SortIcon asc={sortCol.sortColAsc} />
        ) : (
          ''
        )}
      </small>
    </th>
  ));

  if (data.data.length === 0) {
    return <NothingFound themes={themes} header={data.header} d={d} />;
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
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

export default Watchlist;
