import React from 'react'
import VisitorList from './VisitorList'

export default function RecentVisitors() {
    return (
        <div className='allVisitors'>
            <div className="visTitle">Recent Logged in Visitors</div>

            <VisitorList />
        </div>
    )
}
