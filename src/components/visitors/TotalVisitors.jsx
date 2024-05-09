import { faAngleUp, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



export default function TotalVisitors() {

    let totalVisitors = 60;
    let totalVisitorsPercentage = 1.23;
    let visitorComparison = 10



    return (
        <div className='visitors'>

            <div className="top">
                <div className="icon">
                    <img src="images/people.png" alt="" />
                </div>
                <div className="title">
                    <div>total</div>
                    <div>visitors</div>
                </div>
            </div>

            <div className="bottom">
                <div className="numb">
                    <div className="figure">{totalVisitors}</div>
                    <div className="percent">
                        <span>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>{totalVisitorsPercentage}%</div>
                </div>


            </div>
            <div className="down">
                <span>{visitorComparison}% </span>Increase of total employee
            </div>
        </div>


    )
}
