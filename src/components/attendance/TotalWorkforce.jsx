import React from 'react'

export default function TotalWorkforce() {

    let totalWorkForce = 150;
    let totalWorkforceComparison = 10;

    return (
        <div className='allAttendancePageCards'>
            <div className="cardtop">
                <div className="img">
                    <img src="images/blue-users.png" alt="" />
                </div>
                <div className="percent">
                    <span className='positive'>{totalWorkforceComparison}% </span>
                    vs last month
                </div>
            </div>

            <div className="bottom">
                <div className="title">total workforce</div>
                <div className="figure">{totalWorkForce}</div>
            </div>
        </div>
    )
}
