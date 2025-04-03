import React, { useContext } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Mycontext from '../../../util/Mycontext';


const Chart = () => {

  const { data ,showViews,showClickRate,showClicks,showSubs} = useContext(Mycontext)

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} 
        style={{
          display: showViews? 'block' : 'none',
        }}
        />
        <Line type="monotone" dataKey="clickRate" stroke="#ff7300"
        style={{
          display: showClickRate? 'block' : 'none',
        }} 
        />
        <Line type="monotone" dataKey="clicks" stroke="#82ca9d" 
        style={{
          display: showClicks? 'block' : 'none',
        }}
        />
        <Line type="monotone" dataKey="subs" stroke="#ff0000" 
        style={{
          display: showSubs? 'block' : 'none',
        }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart