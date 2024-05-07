import React from 'react'
import VisitorList from './visitors/VisitorList'

export default function RecentVisitors() {
    return (
        <div className='recentVisitors'>
            <div className="visTitle">Recent Logged in Visitors</div>

            <VisitorList />
        </div>
    )
}
