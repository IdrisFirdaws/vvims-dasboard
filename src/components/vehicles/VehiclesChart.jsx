import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Mon',
        uv: 100,
        amt: 2400,
    },
    {
        name: 'Tue',
        uv: 180,
        amt: 2210,
    },
    {
        name: 'Wed',
        uv: 350,
        amt: 2290,
    },
    {
        name: 'Thur',
        uv: 200,
        amt: 2000,
    },
    {
        name: 'Fri',
        uv: 450,
        amt: 2181,
    },
    {
        name: 'Sat',
        uv: 300,
        amt: 2500,
    },

];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    render() {
        return (

            <div className="chart">
                <div className="chartTop">
                    <div className="chartTitle">vehicles entry statistics</div>
                    <div className="chartRight">

                        <select name="month" id="month" className="month">
                            <option value="this month">
                                <span>This Month</span>
                            </option>
                        </select>
                    </div>
                </div>

                <div className="chartBottom">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div>

        );
    }
}

