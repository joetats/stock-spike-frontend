import { useContext } from 'react';

import ThemeContext from '../../store/theme-context';

const WatchlistRow = (props) => {
  const ctx = useContext(ThemeContext);

  const themes = {};

  if (ctx.isDarkMode) {
    themes.link = ' btn btn-link link-light';
  } else {
    themes.link = 'btn btn-link link-dark';
  }

  const parseData = (type, val) => {
    if (type === 'date') {
      const d = new Date(val);
      return d.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
      });
    } else if (type === 'price') {
      return `$${val.toFixed(2)}`;
    } else if (type === 'percentage') {
      return `${(val * 100).toFixed(2)}%`;
    } else if (type === 'int') {
      return Math.floor(val).toLocaleString('en-US');
    } else if (type === 'delta') {
      return -1 * Math.floor(val * 100);
    } else if (type === 'strike') {
      return val;
    } else {
      return 'Error Parsing...';
    }
  };

  const cells = props.columns.map((c) => {
    const data = parseData(c.type, props.data[c.name]);
    const mobile = c.showOnMobile ? '' : 'd-none d-sm-block';
    return (
      <td key={c.name} className={mobile}>
        {data}
      </td>
    );
  });

  return (
    <tr>
      <td>
        <button className={themes.link} onClick={props.onShowChart}>
          {props.symbol}
        </button>
      </td>
      {cells}
    </tr>
  );
};

export default WatchlistRow;
