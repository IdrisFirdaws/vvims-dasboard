import React from 'react'
import Visitors from '../components/Visitors'
import Flaged from '../components/Flaged'
import Chart from '../components/Chart'
import RecentVehicle from '../components/RecentVehicle'
import RecentVisitors from '../components/RecentVisitors'
import Vehicles from '../components/Vehicles'

export default function VisitorsPage() {
    return (
        <div className='visitorsPage'>
            <div className="set1">
                <div className="box box1">
                    <img src="images/Ellipse-8.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11.png" alt="" className='ellipse11' />

                    <Visitors />
                </div>
                <div className="box box2">
                    <img src="images/Ellipse-8g.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9g.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10g.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11g.png" alt="" className='ellipse11' />

                    <Vehicles />
                </div>
                <div className="box box3">
                    <img src="images/Ellipse-8r.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9r.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10r.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11r.png" alt="" className='ellipse11' />

                    <Flaged />
                </div>
            </div>
            <div className="box box4">
                <Chart />
            </div>

            <div className="box box6">
                <RecentVisitors />
            </div>
        </div>
    )
}
