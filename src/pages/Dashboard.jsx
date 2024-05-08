import React from 'react'
import TotalVisitors from '../components/visitors/TotalVisitors'
import RecentVehicle from '../components/vehicles/RecentVehicle'
import RecentVisitors from '../components/visitors/RecentVisitors'
import DashboardChart from '../components/charts/DashboardChart'
import TotalVehicles from '../components/vehicles/TotalVehicles'
import FlagedVehicles from '../components/vehicles/FlagedVehicles'

export default function Dashboard() {
    return (
        <div className="home">
            <div className="box box1">
                <img src="images/Ellipse-8.png" alt="" className='ellipse8' />
                <img src="images/Ellipse-9.png" alt="" className='ellipse9' />
                <img src="images/Ellipse-10.png" alt="" className='ellipse10' />
                <img src="images/Ellipse-11.png" alt="" className='ellipse11' />

                <TotalVisitors />
            </div>
            <div className="box box2">
                <img src="images/Ellipse-8g.png" alt="" className='ellipse8' />
                <img src="images/Ellipse-9g.png" alt="" className='ellipse9' />
                <img src="images/Ellipse-10g.png" alt="" className='ellipse10' />
                <img src="images/Ellipse-11g.png" alt="" className='ellipse11' />

                <TotalVehicles />
            </div>
            <div className="box box3">
                <img src="images/Ellipse-8r.png" alt="" className='ellipse8' />
                <img src="images/Ellipse-9r.png" alt="" className='ellipse9' />
                <img src="images/Ellipse-10r.png" alt="" className='ellipse10' />
                <img src="images/Ellipse-11r.png" alt="" className='ellipse11' />

                <FlagedVehicles />
            </div>
            <div className="box box4">
                <DashboardChart />
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
