import React from 'react'

export default function OnLeave() {

    let onLeave = 15;
    let onLeaveComparison = 10;

    return (
        <div className='allAttendancePageCards'>
            <div className="cardtop">
                <div className="img">
                    <img src="images/Group.png" alt="" />
                </div>
                <div className="percent">
                    <span className='positive'>{onLeaveComparison}% </span>
                    vs last month
                </div>
            </div>

            <div className="bottom">
                <div className="title">On Leave</div>
                <div className="figure">{onLeave}</div>
            </div>
        </div>
    )
}
