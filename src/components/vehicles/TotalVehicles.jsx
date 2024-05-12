import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TotalVehicles() {

    let totalVehicles = 90;
    let totalVehiclesPercentage = 1.23;
    let totalVehiclesComparison = 10;

    return (
        <div className='vehicles'>

            <div className="dcardtop">
                <div className="icon">
                    <img src="images/car.png" alt="" />
                </div>
                <div className="title">
                    <div>total</div>
                    <div>vehicles</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">{totalVehicles}</div>
                    <div className="percent">
                        <span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>
                        {totalVehiclesPercentage}%</div>
                </div>


            </div>
            <div className="down">
                <span>{totalVehiclesComparison}% </span>Decrease of total employee
            </div>
        </div>
    )
}
