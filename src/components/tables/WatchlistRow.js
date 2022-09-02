import { Tr, Td } from '@chakra-ui/react';

const WatchlistRow = (props) => {
  const setSymbolHandler = () => {
    props.onShowChart(props.symbol);
  };

  const parseData = (type, val) => {
    if (type === 'date') {
      const d = new Date(val + ' EST');
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
    return <Td key={c.name}>{data}</Td>;
  });

  return (
    <Tr>
      <Td>
        <button onClick={setSymbolHandler}>{props.symbol}</button>
      </Td>
      {cells}
    </Tr>
  );
};

export default WatchlistRow;
