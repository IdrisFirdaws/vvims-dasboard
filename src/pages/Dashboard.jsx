import React from 'react'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Sidebar />
            <Content />
        </div>
    )
}
