import { Thead, Th, Tr } from '@chakra-ui/react';
import SortIcon from './SortIcon';

const WatchlistHeader = (props) => {
  const headers = props.columns.map((c) => (
    <Th key={c.name} onClick={() => props.sortColHandler(c.name, c.type)}>
      <small>
        {c.display}{' '}
        {props.sortCol.sortCol === c.name ? (
          <SortIcon asc={props.sortCol.sortColAsc} />
        ) : (
          ''
        )}
      </small>
    </Th>
  ));

  return (
    <Thead>
      <Tr>
        <Th>Symbol</Th>
        {headers}
      </Tr>
    </Thead>
  );
};

export default WatchlistHeader;
