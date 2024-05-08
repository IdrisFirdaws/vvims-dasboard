import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FlagedVehicles() {

    let flagedVehicles = 30;
    let flagedVehiclesPercentage = 1.23;
    let flagedVehiclesComparison = 10;

    return (
        <div className='flaged'>
            <div className="top">
                <div className="icon">
                    <img src="images/smart-car.png" alt="" />
                </div>
                <div className="title">
                    <div>flaged vehicles</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">{flagedVehicles}</div>
                    <div className="percent">
                        <span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>
                        {flagedVehiclesPercentage}%
                    </div>
                </div>


            </div>
            <div className="down">
                <span>{flagedVehiclesComparison}% </span>Increase of total employee
            </div>
        </div>
    )
}
