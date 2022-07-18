const WatchlistRow = (props) => {
  const yahooLink = `https://finance.yahoo.com/quote/${props.symbol}/`;

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
        <a
          href={yahooLink}
          target="_blank"
          className="link-light"
          rel="noreferrer"
        >
          {props.symbol}
        </a>
      </td>
      {cells}
    </tr>
  );
};

export default WatchlistRow;
