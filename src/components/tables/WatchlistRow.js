const WatchlistRow = (props) => {
  const parseDate = (val) => {
    const d = new Date(val);
    return d.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
    });
  };

  const delta = (parseFloat(props.delta) * -1).toFixed(2);
  const exp = parseDate(props.exp);
  const ask = `$${props.ask.toFixed(2)}`;
  const ror = `${(props.ror * 100).toFixed(2)} %`;

  const yahooLink = `https://finance.yahoo.com/quote/${props.symbol}/`;

  return (
    <tr>
      <th>
        <a
          href={yahooLink}
          target="_blank"
          className="link-light"
          rel="noreferrer"
        >
          {props.symbol}
        </a>
      </th>
      <th>{props.strike}</th>
      <th>{exp}</th>
      <th className="d-none d-sm">{delta}</th>
      <th>{ask}</th>
      <th>{ror}</th>
    </tr>
  );
};

export default WatchlistRow;
