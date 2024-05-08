import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FlagedVehicles() {
    return (
        <div className='flaged'>
            <div className="top">
                <div className="icon">
                    <img src="images/smart-car.png" alt="" />
                </div>
                <div className="title">
                    <div>flaged</div>
                    <div>vehicles</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">30</div>
                    <div className="percent">
                        <span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>
                        1.23%</div>
                </div>


            </div>
            <div className="down">
                <span>10% </span>Increase of total employee
            </div>
        </div>
    )
}
