import React from 'react'
import Chart from './Chart'
import Visitors from './Visitors'

export default function ChartBox() {
    return (
        <div className='chartBox'>
            <div className="chartTop">
                <div className="chatTitle">Entry statistics</div>

            </div>

            <Chart />
        </div>
    )
}
