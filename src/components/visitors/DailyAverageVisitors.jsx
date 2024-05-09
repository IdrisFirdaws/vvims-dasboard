import React from 'react'

export default function DailyAverageVisitors() {

    let dailyAverageVisitors = 6;
    let averageVisitorComparison = 10;

    return (
        <div className='vehicles'>

            <div className="top">
                <div className="icon">
                    <img src="images/people.png" alt="" />
                </div>
                <div className="title">
                    <div>Daily average</div>
                    <div>visitors</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">{dailyAverageVisitors}</div>

                </div>


            </div>
            <div className="down">
                <span>{averageVisitorComparison}% </span>Increase of total employee
            </div>
        </div>
    )
}
