import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const LineChartItem = props => {
  const {timeLineData, DataFormatter, dataType} = props

  let colorfill
  let payload
  switch (dataType) {
    case 'active':
      colorfill = '#0A4FA0'
      payload = 'Active'
      break
    case 'recovered':
      colorfill = '#216837'
      payload = 'Recovered'
      break
    case 'deceased':
      colorfill = '#474C57'
      payload = 'Deceased'
      break
    case 'tested':
      colorfill = '#9673B9'
      payload = 'Tested'
      break

    default:
      colorfill = '#9A0E31'
      payload = 'Confirmed'
      break
  }

  const renderColorfulLegendText = value => (
    <span style={{color: colorfill, fontWeight: 'bold'}}>{value}</span>
  )

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={timeLineData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis
          dataKey="date"
          style={{
            fontFamily: 'Roboto',
            fontWeight: 500,
            textTransform: 'uppercase',
          }}
          tick={{fill: colorfill, fontWeight: 700}}
          stroke={`${colorfill}`}
          strokeWidth={2}
        />
        <YAxis
          dataKey={`${dataType}`}
          tickFormatter={DataFormatter}
          tick={{fill: colorfill, fontWeight: 700}}
          stroke={`${colorfill}`}
          strokeWidth={2}
        />
        <Tooltip cursor={{stroke: colorfill, strokeWidth: 0.3}} />
        <Legend
          verticalAlign="top"
          align="right"
          iconSize={0}
          payload={[{value: payload}]}
          formatter={renderColorfulLegendText}
        />
        <Line
          type="monotone"
          dataKey={dataType}
          stroke={colorfill}
          strokeWidth={3}
          dot={{fill: `${colorfill}`, strokeWidth: 1}}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartItem
