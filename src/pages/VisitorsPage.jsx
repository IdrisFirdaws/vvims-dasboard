import React from 'react'
import TotalVisitors from '../components/visitors/TotalVisitors'
import LastMonthVisitors from '../components/visitors/LastMonthVisitors'
import DailyAverageVisitors from '../components/visitors/DailyAverageVisitors'
import VisitorsChart from '../components/visitors/VisitorsChart'
import Visitors from '../components/visitors/Visitors'

export default function VisitorsPage() {
    return (
        <div className='visitorsPage'>
            <div className="set1">
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

                    <LastMonthVisitors />
                </div>
                <div className="box box3">
                    <img src="images/Ellipse-8r.png" alt="" className='ellipse8' />
                    <img src="images/Ellipse-9r.png" alt="" className='ellipse9' />
                    <img src="images/Ellipse-10r.png" alt="" className='ellipse10' />
                    <img src="images/Ellipse-11r.png" alt="" className='ellipse11' />

                    <DailyAverageVisitors />
                </div>
            </div>
            <div className="box box4">
                <VisitorsChart />
            </div>

            <div className="box box6">
                <Visitors />
            </div>
        </div>
    )
}
