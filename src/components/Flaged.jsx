import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Flaged() {
    return (
        <div className='flaged'>
            <div className="top">
                <div className="icon">
                    <img src="images/smart-car.png" alt="" />
                </div>
                <div className="title">
                    <div>total</div>
                    <div>visitors</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">60</div>
                    <div className="percent">
                        <span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>
                        1.23%</div>
                </div>

                <div className="down">
                    <span>10% </span>Increase of total employee
                </div>
            </div>
        </div>
    )
}
