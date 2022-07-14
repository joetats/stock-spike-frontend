const EtfWatchlistRow = (props) => {
  const gain = `${(parseFloat(props.gain) * 100).toFixed(2)} %`;

  return (
    <tr>
      <th>{props.symbol}</th>
      <th>{gain}</th>
    </tr>
  );
};

export default EtfWatchlistRow;
