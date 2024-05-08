import React from 'react'

export default function DailyAverageVehicles() {

    let dailyAverageVehicles = 6;
    let dailyVehiclesComparison = 10;
    return (
        <div className='visitors'>

            <div className="top">
                <div className="icon">
                    <img src="images/people.png" alt="" />
                </div>
                <div className="title">
                    <div>Daily average</div>
                    <div>vehicles</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">{dailyAverageVehicles}</div>

                </div>


            </div>
            <div className="down">
                <span>{dailyVehiclesComparison}% </span>Increase of total employee
            </div>
        </div>
    )
}
