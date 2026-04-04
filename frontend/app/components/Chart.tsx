'use client'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import CustomTooltip from './CustomTooltip';

const Chart = ({data, width, height, xName,  yName}:any) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <AreaChart width={600} height={400} data={data}>
        <defs>
          <linearGradient id='color' x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor='var(--accent-light)' stopOpacity={.6} />
            <stop offset="75%" stopColor='var(--accent-light)' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey={yName} stroke='var(--accent-light)' fill='url(#color)' animationDuration={3000} />
        <XAxis dataKey={xName} stroke="var(--text)" />
        <YAxis stroke="var(--text)" />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid vertical={false} opacity={.15} stroke='var(--accent-light)' />
      </AreaChart>
    </ResponsiveContainer>  
  )
}

export default Chart