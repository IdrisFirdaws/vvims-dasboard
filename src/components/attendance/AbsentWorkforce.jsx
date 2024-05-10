import React from 'react'

export default function AbsentWorkforce() {

    let absentWorkForce = 15;
    let absentWorkforceComparison = 10;

    return (
        <div className='allAttendancePageCards'>
            <div className="cardtop">
                <div className="img">
                    <img src="images/red-null.png" alt="" />
                </div>
                <div className="percent">
                    <span className='negative'>{absentWorkforceComparison}% </span>
                    vs last month
                </div>
            </div>

            <div className="bottom">
                <div className="title">absent workforce</div>
                <div className="figure">{absentWorkForce}</div>
            </div>
        </div>
    )
}
