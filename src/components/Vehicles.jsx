import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Vehicles() {
    return (
        <div className='vehicles'>

            <div className="top">
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
                    <div className="figure">60</div>
                    <div className="percent">
                        <span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>
                        1.23%</div>
                </div>


            </div>
            <div className="down">
                <span>10% </span>Decrease of total employee
            </div>
        </div>
    )
}
