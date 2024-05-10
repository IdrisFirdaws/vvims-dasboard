import React from 'react'

export default function LateArrivals() {

    let lateArrivals = 5;
    let lateArrivalsComparison = 10;

    return (
        <div className='allAttendancePageCards'>
            <div className="cardtop">
                <div className="img">
                    <img src="images/blue-exclamation.png" alt="" />
                </div>
                <div className="percent">
                    <span className='positive'>{lateArrivalsComparison}% </span>
                    vs last month
                </div>
            </div>

            <div className="bottom">
                <div className="title">late Arrivals</div>
                <div className="figure">{lateArrivals}</div>
            </div>
        </div>
    )
}
