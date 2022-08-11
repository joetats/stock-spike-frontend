import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import WatchlistRow from './WatchlistRow';
import NothingFound from './NothingFound';
import SortIcon from './SortIcon';
import {
  Heading,
  Text,
  Stack,
  Container,
  Table,
  Thead,
  Tbody,
  Th,
  TableContainer,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbItem,
} from '@chakra-ui/react';

const Watchlist = (props) => {
  const [data, setData] = useState(null);
  const [sortCol, setSortCol] = useState(null);

  const { watchlistId } = useParams();

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
    <Th key={c.name} onClick={() => sortColHandler(c.name, c.type)}>
      <small>
        {c.display}{' '}
        {sortCol.sortCol === c.name ? (
          <SortIcon asc={sortCol.sortColAsc} />
        ) : (
          ''
        )}
      </small>
    </Th>
  ));

  if (data.data.length === 0) {
    return <NothingFound header={data.header} d={d} />;
  }
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem mt={2}>
          <BreadcrumbLink href="/watchlists">Back to Watchlists</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Stack spacing={2} my={5}>
        <Heading>{data.header}</Heading>
        <Text fontSize="sm">Updated: {d} UTC</Text>
      </Stack>

      <Text align="center" my={2}>
        {data.subheader}
      </Text>

      <TableContainer>
        <Table size="sm">
          <Thead>
            <Th>Symbol</Th>
            {headers}
          </Thead>
          <Tbody>{rows}</Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Watchlist;
