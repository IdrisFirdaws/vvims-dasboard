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
