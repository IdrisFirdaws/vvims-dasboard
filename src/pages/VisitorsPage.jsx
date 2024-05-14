import React, { useState } from 'react'
import TotalVisitors from '../components/visitors/TotalVisitors'
import LastMonthVisitors from '../components/visitors/LastMonthVisitors'
import DailyAverageVisitors from '../components/visitors/DailyAverageVisitors'
import VisitorsChart from '../components/visitors/VisitorsChart'
import AllVisitors from '../components/visitors/AllVisitors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddVisitorModal from '../components/visitors/AddVisitorModal'

export default function VisitorsPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };


    return (
        <>
            <div className="top">

                <div className="label">visitors</div>
                <div className="down">
                    <div className="breadcrumbs">
                        <span>dashboard - </span>
                        <span>visitors - </span>
                        <span className="active">all visitors</span>
                    </div>

                    <div className="btn" onClick={openModal}>
                        <FontAwesomeIcon icon={faPlus} />
                        <span>add new visitor</span>
                    </div>
                </div>
            </div>


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
                    <AllVisitors />
                </div>
            </div>
            {/* Render the modal if isModalOpen is true */}
            {isModalOpen && <AddVisitorModal onClose={() => setIsModalOpen(false)} />}

        </>
    )
}
