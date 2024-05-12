import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import TotalVisitors from '../visitors/TotalVisitors';
import TotalVehicles from '../vehicles/TotalVehicles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
    constructor(props) {
        super(props);
        this.state = {
            selectedCheckbox: null,
        };
    }

    handleCheckboxChange = (value) => {
        this.setState({ selectedCheckbox: value });
    };

    render() {
        const { selectedCheckbox } = this.state;

        return (
            <div className="chart">
                <div className="chartTop">
                    <div className="chartTitle">attendance comparison chart</div>
                    <div className='chartRight'>
                        <input
                            type="checkbox"
                            id="Daily"
                            name="duration"
                            value="Daily"
                            checked={selectedCheckbox === "Daily"}
                            onChange={() => this.handleCheckboxChange("Daily")}
                        />
                        <label htmlFor="Daily">Daily</label>

                        <input
                            type="checkbox"
                            id="Weekly"
                            name="duration"
                            value="Weekly"
                            checked={selectedCheckbox === "Weekly"}
                            onChange={() => this.handleCheckboxChange("Weekly")}
                        />
                        <label htmlFor="Weekly">Weekly</label>

                        <input
                            type="checkbox"
                            id="Monthly"
                            name="duration"
                            value="Monthly"
                            checked={selectedCheckbox === "Monthly"}
                            onChange={() => this.handleCheckboxChange("Monthly")}
                        />
                        <label htmlFor="Monthly">Monthly</label>
                    </div>
                    <div className="menu">
                        <img src="images/menu.png" alt="" />
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
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}
