import { useState, useEffect } from 'react';

import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Modal from '../layout/Modal';

const Chart = (props) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.sketchbrew.com/api/v1/stock-spike/tickers/${props.symbol}`
      )
      .then((res) => {
        setChartData(res.data.reverse());
      });
  }, [props]);

  const formatDate = (val) => {
    const d = new Date(val);
    return d.toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
    });
  };

  if (!chartData)
    return (
      <Modal onClose={props.onHideChart}>
        <h3>Loading...</h3>
      </Modal>
    );

  return (
    <Modal onClose={props.onHideChart}>
      <h1>Hi {props.symbol}</h1>
      <div style={{ width: '90%', height: '200px' }}>
        <ResponsiveContainer>
          <LineChart
            width={250}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              interval={90}
              tickFormatter={formatDate}
              tickLine={false}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#82ca9d"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button className="btn btn-outline-danger" onClick={props.onHideChart}>
        Close
      </button>
    </Modal>
  );
};

export default Chart;
