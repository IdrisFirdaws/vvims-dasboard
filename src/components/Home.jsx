import React from 'react'
import Visitors from './Visitors'
import Vehicles from './Vehicles'
import Flaged from './Flaged'
import Chart from './Chart'
import RecentVehicle from './RecentVehicle'
import RecentVisitors from './RecentVisitors'

export default function Home() {
    return (
        <div className="home">
            <div className="box box1">
                {/* <div className="ellipse">
                    <img src="images/Ellipse-11.png" alt="" className='xl' />
                    <img src="images/Ellipse-10.png" alt="" className='lg' />
                    <img src="images/Ellipse-9.png" alt="" className='md' />
                    <img src="images/Ellipse-9.png" alt="" className='sm' />
                </div> */}
                <Visitors />
            </div>
            <div className="box box2">
                <Vehicles />
            </div>
            <div className="box box3">
                <Flaged />
            </div>
            <div className="box box4">
                <Chart />
            </div>
            <div className="box box5">
                <RecentVehicle />
            </div>
            <div className="box box6">
                <RecentVisitors />
            </div>
        </div >
    )
}
