import React from 'react'
import TotalWorkforce from '../components/attendance/TotalWorkforce'
import PrecentWorkforce from '../components/attendance/PrecentWorkforce'
import AbsentWorkforce from '../components/attendance/AbsentWorkforce'
import LateArrivals from '../components/attendance/LateArrivals'
import OnLeave from '../components/attendance/OnLeave'
import AttendanceChart from '../components/attendance/AttendanceChart'
import AttendanceStatsChart from '../components/attendance/AttendanceStatsChart'


export default function AllAttendancePage() {
    return (
        <div className="allAttendacePage">
            <div className="box box1">
                <TotalWorkforce />
            </div>
            <div className="box box2">
                <PrecentWorkforce />
            </div>
            <div className="box box3">
                <AbsentWorkforce />
            </div>
            <div className="box box4">
                <LateArrivals />
            </div>
            <div className="box box5">
                <OnLeave />
            </div>
            <div className="box box6">
                <AttendanceChart />
            </div>
            <div className="box box7">
                <AttendanceStatsChart />
            </div>
            <div className="box box8">

            </div>
        </div >
    )
}
