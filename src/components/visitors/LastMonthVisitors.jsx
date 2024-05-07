import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LastMonthVisitors() {
    return (
        <div className='visitors'>

            <div className="top">
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
                    <div className="figure">40</div>
                </div>


            </div>
            <div className="down">
                <span>10% </span>Increase of total employee
            </div>
        </div>
    )
}
