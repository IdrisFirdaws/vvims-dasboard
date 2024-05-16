import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SuccessLeaveModal({ onClose }) {
    return (
        <div className="successModal">
            <div className="modalWrapper">
                <div className="successTop">
                    <div className="bigCircle">
                        <div className="smallCircle">
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </div>
                    </div>
                </div>
                <div className="text">
                    <p>application successful</p>
                    <span>You have successfully applied for a leave</span>
                </div>
                <div className="modalBtn" onClick={onClose}>Done</div>

            </div>
        </div>
    )
}
