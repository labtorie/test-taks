import React from 'react'
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

const Chart = (props) => {
    // Random colors for cells
    const COLORS = ['#FF6633', '#FFB399', '#FF33FF', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']

    // normalizing data for pies
    let data =  Object.keys(props.data).map(i => ({senderId: i, amount: props.data[i]}))

    return <ResponsiveContainer width="100%" height={300}>
        <PieChart>
        <Pie data={data} nameKey="senderId" valueKey="amount" cx="50%" cy="50%" innerRadius={20}
             outerRadius={80} fill="#82ca9d">{
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
        }</Pie>
        <Legend verticalAlign="top" align="left" height={36} layout={"vertical"}/>
        <Tooltip/>
    </PieChart>
    </ResponsiveContainer>
}
export default Chart
