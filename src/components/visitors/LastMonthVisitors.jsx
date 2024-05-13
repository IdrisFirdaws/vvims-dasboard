import React from 'react'

export default function LastMonthVisitors() {

    let lastMonthVisitors = 40;
    let monthlyVisitorComparison = 10;

    return (
        <div className='flaged'>

            <div className="dcardtop">
                <div className="icon">
                    <img src="images/people.png" alt="" />
                </div>
                <div className="title">
                    <div>last month</div>
                    <div>visitors</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">{lastMonthVisitors}</div>
                </div>


            </div>
            <div className="down">
                <span>{monthlyVisitorComparison}% </span>Increase of total employee
            </div>
        </div>
    )
}
