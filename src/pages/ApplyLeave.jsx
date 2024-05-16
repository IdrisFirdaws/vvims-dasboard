import React from 'react'
import ApplyLeaveForm from '../components/leave/ApplyLeaveForm'

export default function ApplyLeave() {
    return (
        <>
            <div className="top">
                <div className="label">Leave application</div>
                <div className="down">
                    <div className="breadcrumbs">
                        <span>dashboard - </span>
                        <span>leave management - </span>
                        <span className="active">apply leave</span>
                    </div>

                </div>

            </div>
            <div className='applyLeavePage'>
                <div className="box">
                    <ApplyLeaveForm />
                </div>
            </div>
        </>
    )
}
