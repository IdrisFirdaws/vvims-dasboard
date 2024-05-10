import React from 'react'

export default function PrecentWorkforce() {

    let presentWorkForce = 125;
    let presentWorkforceComparison = 10;

    return (
        <div className='allAttendancePageCards'>
            <div className="cardtop">
                <div className="img">
                    <img src="images/green-mark.png" alt="" />
                </div>
                <div className="percent">
                    <span className='positive'>{presentWorkforceComparison}% </span>
                    vs last month
                </div>
            </div>

            <div className="bottom">
                <div className="title">present workforce</div>
                <div className="figure">{presentWorkForce}</div>
            </div>
        </div>
    )
}
