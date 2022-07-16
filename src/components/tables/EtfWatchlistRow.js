const EtfWatchlistRow = (props) => {
  const gain = `${(parseFloat(props.gain) * 100).toFixed(2)} %`;
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
      <th>{gain}</th>
    </tr>
  );
};

export default EtfWatchlistRow;
