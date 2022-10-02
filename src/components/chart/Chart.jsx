import "./chart.scss"
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Chart = ({aspect,title}) => {
    const data = [
        {
            name: 'Styczeń',
            total: 100
        },
        {
            name: 'Luty',
            total: 200
        },
        {
            name: 'Marzec',
            total: 300
        },
        {
            name: 'Kwiecień',
            total: 800
        },
        {
            name: 'Maj',
            total: 220
        },
        {
            name: 'Czerwiec',
            total: 1000
        },
        {
            name: 'Lipiec',
            total: 500
        },
        {
            name: 'Sierpień',
            total: 600
        },
        {
            name: 'Wrzesień',
            total: 400
        },
        {
            name: 'Październik',
            total: 300
        },
        {
            name: 'Listopad',
            total: 200
        },
        {
            name: 'Grudzień',
            total: 600
        }   
      ];
    return (  
        <div className="chart">
            <h2 className="chartTitle">
                {title}
            </h2>
        <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        </ResponsiveContainer>
        </div>
    );
}
 
export default Chart;