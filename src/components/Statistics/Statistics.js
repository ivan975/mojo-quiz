import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const totals = useLoaderData().data;
    // console.log(totals.data[0].total);
    return (
        <div>
            <LineChart width={500} height={400} data={totals}>
                <Line type="monotone" dataKey='total' stroke="#8884d8" strokeWidth={2}></Line>
                <XAxis dataKey='name' />
                <YAxis />
            </LineChart>

        </div >
    );
};

export default Statistics;