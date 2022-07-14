import data from './etf_rank';

import EtfWatchlistRow from './EtfWatchlistRow';

const EtfWatchlist = (props) => {
  const rows = data.data.map((i) => (
    <EtfWatchlistRow symbol={i.symbol} gain={i.gain} key={i.symbol} />
    // <EtfWatchlistRow />
  ));

  return (
    <>
      <h2 className="text-white">best sector ETFs</h2>
      <p className="text-white text-center ps-4 mt-2">
        Simple momentum on S&P 500 sector ETFs: 12 month return minus the
        previous month
      </p>
      <table className="table table-dark table-striped table-bordered">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Gain</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

export default EtfWatchlist;
